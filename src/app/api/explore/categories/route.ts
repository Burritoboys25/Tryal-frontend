// app/api/categories/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error(`Backend returned ${res.status}`)
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('Failed to fetch categories from backend:', err)
    return NextResponse.json({ error: 'Failed to fetch categories from backend' }, { status: 500 })
  }
}
