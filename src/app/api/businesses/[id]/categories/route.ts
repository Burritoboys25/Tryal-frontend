import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/businesses/${params.id}/categories`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.status === 204 || res.status === 404) {
      // No Content or Not Found, return empty categories array
      return NextResponse.json({ categories: [] }, { status: res.status })
    }
    if (!res.ok) {
      throw new Error(`Backend returned ${res.status}`)
    }

    const data = await res.json()
    console.log('Backend categories response:', data)

    return NextResponse.json({ categories: data })
  } catch (err) {
    console.error('Failed to fetch business categories:', err)
    return NextResponse.json({ error: 'Failed to fetch business categories' }, { status: 500 })
  }
}
