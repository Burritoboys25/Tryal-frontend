import { getServerSession } from 'next-auth'
import { authOptions } from '@/modules/auth/lib/authOptions'

type BackendFetchOptions = RequestInit & {
  auth?: boolean
}

export async function backendFetch(path: string, options: BackendFetchOptions = {}) {
  const auth = process.env.NEXT_PUBLIC_ENV === 'dev'
  // const auth = true

  const { ...init } = options

  const session = auth ? await getServerSession(authOptions) : null

  if (auth && !session?.accessToken) {
    throw new Error('Not authenticated')
  }

  // Start from any existing headers
  const headers = new Headers(init.headers ?? {})

  // headers.set('Content-Type', 'application/json')

  if (auth && session?.accessToken) {
    headers.set('Authorization', `Bearer ${session.accessToken}`)
  }

  return fetch(`${process.env.BACKEND_URL}${path}`, {
    ...init,
    headers,
    cache: 'no-store',
  })
}