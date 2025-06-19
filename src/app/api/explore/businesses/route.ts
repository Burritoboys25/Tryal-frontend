import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const filters = await request.json()
    const res = await fetch(`${process.env.BACKEND_URL}/api/businesses/filter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categoryIds: filters.type,
        skillLevel: filters.skillLevel,
        duration: filters.duration,
      }),
    })

    const data = await res.json()
    console.log('data', data)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return NextResponse.json({ error: 'Failed to fetch businesses' }, { status: 500 })
  }
}
