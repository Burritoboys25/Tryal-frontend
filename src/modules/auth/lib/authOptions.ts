import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { jwtDecode } from 'jwt-decode'
import { JwtBase } from '../types/authTypes'
import API_BASE_URL from '@/shared/lib/apiBaseUrl'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        remember: { label: 'Remember me', type: 'checkbox' },
        accountType: { label: 'Type', type: 'text' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password || !credentials?.accountType) {
            throw new Error('Missing credentials')
          }

          const endpoint =
            credentials.accountType === 'BUSINESS'
              ? `${API_BASE_URL}/api/business-temp/login`
              : `${API_BASE_URL}/api/users/login`

          const remember = credentials?.remember === 'true'

          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
              remember,
            }),
          })

          if (!res.ok) {
            throw new Error('Login failed')
          }

          const token = await res.json()
          const decodedToken = jwtDecode<{ sub: string; accountType: string; exp: number; username: string }>(
            token.data.accessToken,
          )

          console.log('Login successful for user:', decodedToken.username)
          console.log('Decoded Token:', decodedToken)

          return {
            id: decodedToken.sub,
            accessToken: token.data.accessToken,
            accessTokenExpires: decodedToken.exp * 1000,
            refreshToken: token.data.refreshToken,
            accountType: decodedToken.accountType,
          } as JwtBase
        } catch (error) {
          console.error('Login error:', error)
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      // On login, perist tokens
      if (user) {
        const u = user as JwtBase;
        return {
          ...token,
          id: u.id || '',
          accessToken: u.accessToken || '',
          accessTokenExpires: u.accessTokenExpires || 0,
          refreshToken: u.refreshToken || '',
          accountType: u.accountType || ''
        }
      }
      // If access token has not expired
      else if (Date.now() < (token.accessTokenExpires as number)) {
        return token
      } else {
        // Subsequent logins, but the `access_token` has expired, try to refresh it
        if (!token.refreshToken) throw new TypeError("Missing refresh token")

        // If token expired, refresh token via API using refresh cookie
        try {
          const refreshed = await fetch(`${process.env.BACKEND_URL}/api/auth/refresh`, {
            method: 'POST',
            body: JSON.stringify({
              refreshToken: token.refreshToken!,
            }),
          })

          if (!refreshed.ok) throw refreshed

          const refreshedTokens = await refreshed.json()
          const decodedToken = jwtDecode<{ sub: string; accountType: string; exp: number }>(
            refreshedTokens.data.accessToken,
          )
          console.log('Access token refreshed for userId:', decodedToken.sub)
          return {
            ...token,
            accessToken: refreshedTokens.data.accessToken,  
            accessTokenExpires: decodedToken.exp * 1000,
            refreshToken: refreshedTokens.data.refreshToken,
          }
          
        } catch (error) {
          console.error('Error refreshing access token:', error)
          return token
        }
      }
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          accountType: token.accountType,
        }
        session.accessToken = token.accessToken
        session.accessTokenExpires = token.accessTokenExpires
      }
      return session
    },
  },
  events: {
    async signOut({token}) {
      try {
        await fetch(`${process.env.BACKEND_URL}/api/auth/logout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            refreshToken: token.refreshToken,
          }),
        })
      } catch (error) {
        console.error('Error during logout:', error)
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
}
