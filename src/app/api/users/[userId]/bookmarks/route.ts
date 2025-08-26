import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

export async function GET(_: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params

  try {
    const response = await fetch(`${BACKEND_URL}/api/user-bookmarks/${userId}`, {
      credentials: 'include',
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Failed to fetch bookmarks' },
        { status: response.status },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('GET bookmarks error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  const { businessId } = await req.json()

  if (!businessId) {
    return NextResponse.json({ error: 'Missing businessId' }, { status: 400 })
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/user-bookmarks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ userId, businessId }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Failed to add bookmark' },
        { status: response.status },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('POST bookmark error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
) {
  const { userId } = await params
  const { businessId } = await req.json()

  if (!businessId) {
    return NextResponse.json({ error: 'Missing businessId' }, { status: 400 })
  }

  try {
    const response = await fetch(`${BACKEND_URL}/api/user-bookmarks`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ userId, businessId }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Failed to remove bookmark' },
        { status: response.status },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('DELETE bookmark error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
