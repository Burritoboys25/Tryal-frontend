import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

let matcher: string[]

if (process.env.ENVIRONMENT === 'dev') {
  matcher = []
} else {
  matcher = ['/explore', '/login', '/signup']
}

export const config = {
  matcher
}