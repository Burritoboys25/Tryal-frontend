import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { loginUser } from '../services/auth'
import { jwtDecode } from 'jwt-decode'
import { JwtUser } from '../types/authTypes'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        remember: { label: 'Remember me', type: 'checkbox'}
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Email and password are required.')
          }

          const remember = credentials?.remember === 'true';

          const { accessToken, refreshToken } = await loginUser({
            email: credentials.email,
            password: credentials.password,
            remember,
          })

          const decodedToken = jwtDecode<{ sub: string }>(accessToken)

          return {
            id: decodedToken.sub,
            accessToken,
            refreshToken
          } as JwtUser
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
        const u = user as JwtUser
        token.id = u.id || ''
        token.accessToken = u.accessToken || ''
        token.refreshToken = u.refreshToken || ''
        // TODO: 
        //token.accessTokenExpiry = u.accessTokenExpiry || ''
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
        // TODO:
        //session.accessTokenExpiry = token.accessTokenExpiry
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
