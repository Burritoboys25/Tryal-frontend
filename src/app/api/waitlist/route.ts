import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'
import { waitlistSchema } from '@/shared/lib/validation/waitlist.schema'

const uri = process.env.MONGODB_URI!
let client: MongoClient | null = null

if(!uri){
  console.warn('Missing MONGODB_URI - skipping DB setup.')
}else{
  client = new MongoClient(uri)
}

export async function POST(request: Request) {
  try {
    if (!client) {
      return NextResponse.json({ error: 'Server misconfiguration - MongoDB' }, { status: 500 })
    }

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
    if(client){
      await client.close()
    }
  }
}
