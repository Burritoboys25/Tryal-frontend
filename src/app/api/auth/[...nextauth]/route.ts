import NextAuth from 'next-auth'
import { userAuthOptions } from '@/modules/auth/user/lib/userAuthOptions'

const handler = NextAuth(userAuthOptions)

export { handler as GET, handler as POST }
