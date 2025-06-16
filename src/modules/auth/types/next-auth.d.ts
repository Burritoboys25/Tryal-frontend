import { DefaultSession } from 'next-auth'
declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type

  interface Session extends DefaultSession {
    user: {
      id: string
    }
    accessToken: string
    refreshToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    accessToken: string
    refreshToken: string
  }
}
