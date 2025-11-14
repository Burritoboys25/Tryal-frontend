import { NextRequest, NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

// Takes the query params and fetches the businesses from the backend
export async function GET(req: NextRequest) {
  const query = req.url?.split('?')[1] ?? ''

  try {
    const result = await backendFetch(`/api/businesses/filter?${query}`)
    
    const data = await result.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return handleBackendError(error)
  }
}
