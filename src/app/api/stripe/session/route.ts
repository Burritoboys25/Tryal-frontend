import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await fetch(`${process.env.BACKEND_URL}/api/stripe/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const stripeSession = await response.json()

    return NextResponse.json({ clientSecret: stripeSession.data.clientSecret })
  } catch (error) {
    console.error('Error creating Stripe session:', error)
    return NextResponse.json({ error: 'Failed to create Stripe session' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('session_id')

    if (!sessionId) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 })
    }

    const response = await fetch(
      `${process.env.BACKEND_URL}/api/stripe/session?session_id=${sessionId}`,
      {
        method: 'GET',
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to retrieve session from backend' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error retrieving Stripe session:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve Stripe session' },
      { status: 500 }
    )
  }
}