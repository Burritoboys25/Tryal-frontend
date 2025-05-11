import { getPartnerWaitlistCollection } from '@/modules/waitlist/lib/mongodb'
import { partnerWaitlistSchema } from '@/modules/waitlist/validations/partners-waitlist.schema'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = partnerWaitlistSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
    }

    const data = result.data

    const collection = await getPartnerWaitlistCollection()

    const existing = await collection.findOne({ email: data.email })

    if (existing) {
      return NextResponse.json({ error: 'Email already exists on the waitlist.' }, { status: 400 })
    }

    const entry = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    })

    return NextResponse.json(
      { message: 'Partner waitlist submitted successfully', entry },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error adding partner:', error)
    return NextResponse.json({ error: 'Failed to add partner to waitlist' }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, referrals } = body

    const collection = await getPartnerWaitlistCollection()
    const partner = await collection.findOne({ email })

    if (!partner) {
      return NextResponse.json({ error: 'Partner not found on the waitlist.' }, { status: 400 })
    }

    await collection.updateOne({ email }, { $set: { referrals } })

    return NextResponse.json({ message: 'Partner referrals updated successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error updating partner:', error)
    return NextResponse.json({ error: 'Failed to update partner' }, { status: 500 })
  }
}
