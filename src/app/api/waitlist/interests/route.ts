import { NextRequest, NextResponse } from 'next/server'
import { getInterestWaitlistCollection } from '@/modules/waitlist/lib/mongodb'
import { interestWaitlistSchema } from '@/modules/waitlist/validations/interest-waitlist.schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = interestWaitlistSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      console.log(fieldErrors)
      return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
    }

    const { email } = result.data

    const collection = await getInterestWaitlistCollection()
    await collection.insertOne({
      email,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: 'Email added to interest waitlist' }, { status: 200 })
  } catch (error) {
    console.error('Error adding email to interest waitlist:', error)
    return NextResponse.json({ error: 'Failed to add email to interest waitlist' }, { status: 500 })
  }
}
