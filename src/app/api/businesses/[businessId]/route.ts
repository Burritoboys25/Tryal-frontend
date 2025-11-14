import { NextRequest, NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

// Fetch a single business by id from the backend
export async function GET(req: NextRequest, props: { params: Promise<{ businessId: string }> }) {
  const params = await props.params
  try {
    const result = await backendFetch(`$/api/businesses/${params.businessId}`)
    const data = await result.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching business:', error)
    return handleBackendError(error)
  }
}
