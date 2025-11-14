import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(req: NextRequest, props: { params: Promise<{ businessId: string }> }) {
  const params = await props.params
  const body = await req.json()

  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/businesses/${params.businessId}/onboarding`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
      }),
    })

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