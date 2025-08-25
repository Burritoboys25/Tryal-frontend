import { NextRequest, NextResponse } from 'next/server'
import { getBusinessExperiences, getAllExperiences } from '@/modules/business/services/business'

// GET /api/experiences or /api/experiences?businessId=...
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const businessId = searchParams.get('businessId')
    let experiences
    if (businessId) {
      experiences = await getBusinessExperiences(businessId)
    } else {
      experiences = await getAllExperiences()
    }
    if (!experiences || experiences.length === 0) {
      return NextResponse.json({ experiences: [] }, { status: 200 })
    }
    return NextResponse.json({ experiences }, { status: 200 })
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
