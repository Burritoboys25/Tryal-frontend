import { DefaultSession, DefaultJWT } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      accountType: 'USER' | 'BUSINESS'
    } & DefaultSession['user']
    accessToken: string
    refreshToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string
    accountType: 'USER' | 'BUSINESS'
    accessToken: string
    refreshToken: string
  }
}