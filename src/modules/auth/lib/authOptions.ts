import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginUser } from '../services/auth'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required.')
          }

          const user = await loginUser({
            email: credentials.email,
            password: credentials.password,
          })

          return user
        } catch (error) {
          console.error('Login error: ' + error)
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
        token.id = user.id || ''
        token.email = user.email || ''
        token.firstName = user.firstName || ''
        token.lastName = user.lastName || ''
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id ?? '',
          email: token.email ?? '',
          firstName: token.firstName ?? '',
          lastName: token.lastName ?? '',
        }
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
