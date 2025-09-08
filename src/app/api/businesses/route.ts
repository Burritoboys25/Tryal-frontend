import { NextResponse } from 'next/server'

// Fetch all businesses from the backend
export async function GET() {
  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/businesses`)
    if (!result.ok) {
      return NextResponse.json({ error: 'Failed to fetch businesses' }, { status: 500 })
    }
    const data = await result.json()
    return NextResponse.json({ businesses: data.businesses || data })
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
