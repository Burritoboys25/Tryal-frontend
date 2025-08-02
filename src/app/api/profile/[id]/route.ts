import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json()

  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
      }),
    })

    const backendData = await result.json()

    if (!result.ok) {
      throw new Error(backendData?.message || 'Failed to update user on backend')
    }

    return NextResponse.json(backendData)
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
