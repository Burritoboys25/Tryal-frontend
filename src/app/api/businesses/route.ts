import { NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

// Fetch all businesses from the backend
export async function GET() {
  try {
    const result = await backendFetch(`/api/businesses`)
    const data = await result.json()
    
    return NextResponse.json({ businesses: data.businesses || data })
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return handleBackendError(error)
  }
}
