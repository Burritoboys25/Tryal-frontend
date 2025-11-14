import { handleBackendError } from '@/shared/lib/handleBackendError'
import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

export async function POST(req: NextRequest) {
  try {
    const { email, password, remember } = await req.json()

    const res = await fetch(`${BACKEND_URL}/api/auth/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, remember }),
    })

    const data = await res.json()

    if (!res.ok) {
      return NextResponse.json({ error: data.message || 'Login failed' }, { status: res.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Login error:', error)
    return handleBackendError(error)
  }
}
