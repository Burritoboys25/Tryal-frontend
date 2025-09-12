import { NextResponse } from 'next/server'

// GET /api/plans
export async function GET() {
  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/plans`)
    const data = await result.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching plans:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
