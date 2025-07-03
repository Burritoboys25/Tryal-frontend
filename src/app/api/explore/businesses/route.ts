import { NextRequest, NextResponse } from 'next/server'

// Takes the query params and fetches the businesses from the backend
export async function GET(req: NextRequest) {
  const query = req.url?.split('?')[1] ?? ''

  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/businesses/filter?${query}`)
    const data = await result.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
