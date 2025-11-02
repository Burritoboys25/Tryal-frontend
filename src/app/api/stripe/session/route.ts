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
