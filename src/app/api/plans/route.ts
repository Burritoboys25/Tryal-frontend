import { NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

// GET /api/plans
// All active plans
export async function GET() {
  try {
    const result = await backendFetch(`/api/plans`)
    const data = await result.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching plans:', error)
    return handleBackendError(error)
  }
}
