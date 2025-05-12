import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'
import { waitlistSchema } from '@/shared/lib/validation/waitlist.schema'

const uri = process.env.MONGODB_URI!
const client = new MongoClient(uri)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = waitlistSchema.safeParse(body)

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      console.log(fieldErrors)
      return NextResponse.json({ error: 'Validation failed', fieldErrors }, { status: 400 })
    }

    const { firstName, lastName, email } = result.data

    await client.connect()
    const db = client.db('waitlist')
    const collection = db.collection('signups')

    const existingUser = await collection.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 })
    }

    await collection.insertOne({
      firstName,
      lastName,
      email,
      createdAt: new Date(),
    })

    return NextResponse.json({ message: 'Successfully joined waitlist' }, { status: 201 })
  } catch (error) {
    console.error('Error processing waitlist submission:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  } finally {
    await client.close()
  }
}
