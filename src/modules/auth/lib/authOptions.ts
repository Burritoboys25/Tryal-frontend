import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {jwtDecode} from 'jwt-decode'
import { JwtUser } from '../types/authTypes'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        remember: { label: 'Remember me', type: 'checkbox' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required.')
          }

          const remember = credentials?.remember === 'true'

          const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
              remember,
            }),
          })

          if (!res.ok) {
            const data = await res.json()
            throw new Error(data.error || 'Login failed')
          }

          const data = await res.json()

          const decodedToken = jwtDecode<{ sub: string }>(data.accessToken)

          return {
            id: decodedToken.sub,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          } as JwtUser
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
        const u = user as JwtUser
        token.id = u.id || ''
        token.accessToken = u.accessToken || ''
        token.refreshToken = u.refreshToken || ''
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id ?? '',
        }
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
