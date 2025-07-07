import { NextRequest, NextResponse } from 'next/server'

// Fetch a single business by id from the backend
export async function GET(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/businesses/${params.id}`)
    if (!result.ok) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 })
    }
    const data = await result.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching business:', error)
    return NextResponse.json({ error: 'Error fetching business:' }, { status: 500 })
  }
}
