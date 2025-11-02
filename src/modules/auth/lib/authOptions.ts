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
          const decodedToken = jwtDecode<{ sub: string; accountType: string }>(
            token.data.accessToken,
          )

          return {
            id: token.data.userId,
            accessToken: token.data.accessToken,
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
      if (user) {
        const u = user as JwtBase
        token.id = u.id || ''
        token.accessToken = u.accessToken || ''
        token.refreshToken = u.refreshToken || ''
        token.accountType = u.accountType || ''
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id,
          accountType: token.accountType,
        }
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
