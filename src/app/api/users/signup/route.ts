import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json()

    const res = await fetch(`${BACKEND_URL}/api/auth/user/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()

    if (!res.ok) {
      const fieldErrors = data.errors || {}
      const message = data.message || 'Signup failed'
      return NextResponse.json({ error: message, fieldErrors }, { status: res.status })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
