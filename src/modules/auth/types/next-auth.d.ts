import { DefaultSession, DefaultJWT } from 'next-auth'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      accountType: 'USER' | 'BUSINESS'
    } & DefaultSession['user']
    accessToken: string
    accessTokenExpires: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string
    accountType: 'USER' | 'BUSINESS'
    accessToken: string
    accessTokenExpires: number
    refreshToken?: string
  }
}