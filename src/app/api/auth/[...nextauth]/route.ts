import NextAuth from 'next-auth'
import { authOptions } from '@/modules/auth/lib/authOptions'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
