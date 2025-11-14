import { NextResponse } from 'next/server'
import { BackendError, backendFetch } from './backendFetch'

export function handleBackendError(err: unknown) {
  if (err instanceof BackendError) {
    return NextResponse.json(
      {
        error: err.message,
        status: err.status,
        backendError: err.error,
        path: err.path,
      },
      { status: err.status }
    )
  }

  console.error('Unexpected error talking to backend:', err)

  return NextResponse.json(
    { error: 'Unexpected error contacting backend' },
    { status: 500 }
  )
}

export async function backendJson<T>(input: string, init?: RequestInit): Promise<T> {
  const res = await backendFetch(input, init)
  return res.json() as Promise<T>
}