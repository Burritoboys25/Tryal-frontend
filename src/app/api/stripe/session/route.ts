import { NextRequest, NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await backendFetch(`/api/stripe/session`, {
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
    return handleBackendError(error)
  }
}
