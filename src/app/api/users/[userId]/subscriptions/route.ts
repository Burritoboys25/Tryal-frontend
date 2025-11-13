import { NextRequest, NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'

// GET /api/subscriptions/user/${userId}?active=true|false
// User's active/non-active subscriptions
export async function GET(req: NextRequest, { params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params
  const searchParams = req.nextUrl.searchParams
  const active = searchParams.get('active')

  try {
    let url = `/api/subscriptions/user/${userId}`

    if (active !== null) {
      url += `?active=${active}`
    }

    const result = await backendFetch(url)
    const data = await result.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching subscriptions:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
