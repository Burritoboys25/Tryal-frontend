import { NextRequest, NextResponse } from 'next/server'
import { getInterestWaitlistCollection } from '@/modules/waitlist/lib/mongodb'
import { interestWaitlistSchema } from '@/modules/waitlist/validations/interest-waitlist.schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = interestWaitlistSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
    }

    const { email } = result.data

    const collection = await getInterestWaitlistCollection()
    const existingUser = await collection.findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: 'Email already on the waitlist.' }, { status: 400 })
    }

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

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, referrals } = body

    if (!email || !Array.isArray(referrals)) {
      return NextResponse.json({ error: 'Missing or invalid email/referrals' }, { status: 400 })
    }

    const collection = await getInterestWaitlistCollection()
    const user = await collection.findOne({ email })

    if (!user) {
      return NextResponse.json({ error: 'Email not found on the waitlist.' }, { status: 400 })
    }

    await collection.updateOne({ email }, { $set: { referrals } })

    return NextResponse.json(
      { message: 'Interest referrals updated successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error updating waitlist user:', error)
    return NextResponse.json({ error: 'Failed to update waitlist user' }, { status: 500 })
  }
}
