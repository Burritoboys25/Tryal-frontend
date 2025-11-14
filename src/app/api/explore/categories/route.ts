// app/api/categories/route.ts
import { NextResponse } from 'next/server'
import { backendFetch } from '@/shared/lib/backendFetch'
import { handleBackendError } from '@/shared/lib/handleBackendError'

export async function GET() {
  try {
    const res = await backendFetch(`/api/categories`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to fetch categories from backend:', error)
    return handleBackendError(error)
  }
}
