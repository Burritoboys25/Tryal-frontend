import { NextRequest, NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

export async function GET(req: NextRequest, props: { params: Promise<{ businessId: string }> }) {
  const params = await props.params

  try {
    const res = await backendFetch(`/api/businesses/${params.businessId}/categories`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.status === 204 || res.status === 404) {
      // No Content or Not Found, return empty categories array
      return NextResponse.json({ categories: [] }, { status: res.status })
    }

    const data = await res.json()
    console.log('Backend categories response:', data)

    return NextResponse.json({ categories: data })
  } catch (error) {
    console.error('Failed to fetch business categories:', error)
    return handleBackendError(error)
  }
}
