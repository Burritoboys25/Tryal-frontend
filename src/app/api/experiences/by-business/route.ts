import { NextResponse } from 'next/server'

// Fetch experiences for a specific business from the backend
export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const businessId = url.searchParams.get('businessId')

    if (!businessId) {
      return NextResponse.json({ error: 'Missing businessId query parameter' }, { status: 400 })
    }

    const result = await fetch(
      `${process.env.BACKEND_URL}/api/experiences/by-business?businessId=${businessId}`,
    )
    if (!result.ok) {
      return NextResponse.json({ error: 'Failed to fetch experiences' }, { status: 500 })
    }
    const data = await result.json()
    return NextResponse.json({ experiences: data.experiences || data })
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
