import { User } from '@/shared/types/userTypes'
import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

export async function GET(_: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params

  try {
    const res = await fetch(`${BACKEND_URL}/api/users/${userId}`, {
      credentials: 'include',
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch user' }, { status: res.status })
    }

    const user = await res.json()
    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params

  try {
    const body: Partial<User> = await req.json()

    const res = await fetch(`${BACKEND_URL}/api/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to update user' }, { status: res.status })
    }

    const updatedUser = await res.json()
    return NextResponse.json(updatedUser)
  } catch (error) {
    console.error('Error updating user:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
