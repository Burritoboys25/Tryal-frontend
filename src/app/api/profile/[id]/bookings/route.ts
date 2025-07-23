import { NextRequest, NextResponse } from 'next/server'

export async function GET(_: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params

  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/bookings/users/${userId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const backendData = await result.json()

    if (!result.ok) {
      throw new Error(backendData?.message || 'Failed to fetch user bookings')
    }

    return NextResponse.json(backendData)
  } catch (error) {
    console.error('GET profile bookings error: ', error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
