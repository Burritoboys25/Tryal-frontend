import { getServerSession } from 'next-auth'
import { authOptions } from '@/modules/auth/lib/authOptions'

type BackendFetchOptions = RequestInit & {
  auth?: boolean
}

export class BackendError extends Error {
  status: number
  error?: string
  path?: string
  trace?: string

  constructor(init: {
    status: number
    message: string
    error?: string
    path?: string
    trace?: string
  }) {
    super(init.message)
    this.name = 'BackendError'
    this.status = init.status
    this.error = init.error
    this.path = init.path
    this.trace = init.trace
  }
}

export async function backendFetch(path: string, options: BackendFetchOptions = {}) {
  // NEXT_PUBLIC_ENV Set to 'prod' to include bearer token header
  // const auth = process.env.NEXT_PUBLIC_ENV !== 'dev'
  const auth = true

  const { ...init } = options

  const session = auth ? await getServerSession(authOptions) : null

  if (auth && !session?.accessToken) {
    throw new Error('Not authenticated')
  }

  const defaultHeaders = {
    'Content-Type': 'application/json',
  }

  const headers = new Headers({
    ...defaultHeaders,
    ...init.headers,
  } as HeadersInit)

  if (auth && session?.accessToken) {
    headers.set('Authorization', `Bearer ${session.accessToken}`)
  }

  // return fetch(`${process.env.BACKEND_URL}${path}`, {
  //   ...init,
  //   headers,
  //   cache: 'no-store',
  // })

  const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
    ...init,
    headers,
    cache: 'no-store',
  })

  if (res.ok) return res

  let body: any = null
  try {
    body = await res.json()
  } catch {
    // non-JSON or empty body
  }

  const message =
    (body?.message ?? res.statusText) || 'Unknown error from backend'

  throw new BackendError({
    status: res.status,
    message,
    error: body?.error,
    path: body?.path,
    // trace: body?.trace,
  })
}