import NextAuth from 'next-auth'
import { businessAuthOptions } from '@/modules/auth/business/lib/businessAuthOptions'

const handler = NextAuth(businessAuthOptions)

export { handler as GET, handler as POST }
