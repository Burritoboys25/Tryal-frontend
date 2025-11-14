import { NextRequest, NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

export async function PATCH(req: NextRequest, props: { params: Promise<{ businessId: string }> }) {
  const params = await props.params
  const body = await req.json()

  try {
    const result = await backendFetch(`/api/businesses/${params.businessId}/onboarding`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...body,
      }),
    })
    
    const data = await result.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching business:', error)
    return handleBackendError(error)
  }
}