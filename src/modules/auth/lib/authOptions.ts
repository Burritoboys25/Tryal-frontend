import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { jwtDecode } from 'jwt-decode'
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

          const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/login`, {
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

          // Remove if we decide not to store anything else in the jwt
          // const decodedToken = jwtDecode<{ sub: string }>(token.data.accessToken)

          return {
            id: token.data.userId,
            accessToken: token.data.accessToken,
            refreshToken: token.data.refreshToken,
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
        token.userId = u.id || ''
        token.accessToken = u.accessToken || ''
        token.refreshToken = u.refreshToken || ''
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.userId = token.userId ?? ''
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
