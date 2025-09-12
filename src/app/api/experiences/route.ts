import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL = process.env.BACKEND_URL

// GET /api/experiences or /api/experiences?businessId=...
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const businessId = searchParams.get('businessId')
    let response
    if (businessId) {
      response = await fetch(`${BACKEND_URL}/api/experiences?businessId=${businessId}`)
    } else {
      response = await fetch(`${BACKEND_URL}/api/experiences`)
    }
    const data = await response.json()
    // Support both array and object responses from backend
    const experiences = Array.isArray(data.data) ? data : []
    return NextResponse.json(experiences)
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
