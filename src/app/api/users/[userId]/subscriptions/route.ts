import { NextRequest, NextResponse } from 'next/server'

// GET /api/subscriptions/user/${userId}?active=true|false
// User's active/non-active subscriptions
export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  const searchParams = req.nextUrl.searchParams
  const active = searchParams.get('active')

  try {
    let url = `${process.env.BACKEND_URL}/api/subscriptions/user/${userId}`

    if (active !== null) {
      url += `?active=${active}`
    }

    const result = await fetch(url)
    const data = await result.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching subscriptions:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
