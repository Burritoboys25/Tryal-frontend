import { DefaultSession } from 'next-auth'
import type { User as AppUser } from '@/shared/types/userTypes'

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends AppUser {}

  interface Session extends DefaultSession {
    user: User
    expires_in: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    email: string
    firstName: string
    lastName: string
  }
}
