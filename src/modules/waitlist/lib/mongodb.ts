import { MongoClient, Collection } from 'mongodb'
import { PartnerWaitlistFormData } from '../validations/partners-waitlist.schema'
import { InterestWaitlistFormData } from '../validations/interest-waitlist.schema'

// Constants
const uri = process.env.MONGODB_URI!
const dbName = process.env.MONGODB_DB_NAME || 'waitlist'
const PARTNER_COLLECTION = 'partner_waitlist'
const INTEREST_COLLECTION = 'interest_waitlist'

// Cache client in dev or serverless
let cachedClient: MongoClient | null = null

// Connect to MongoDB
export async function connectToDatabase(): Promise<MongoClient> {
  if (cachedClient) return cachedClient

  const client = new MongoClient(uri)
  try {
    await client.connect()
    cachedClient = client
    return client
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
    throw err
  }
}

// Partner collection accessor
export async function getPartnerWaitlistCollection(): Promise<Collection<PartnerWaitlistFormData>> {
  const client = await connectToDatabase()
  return client.db(dbName).collection<PartnerWaitlistFormData>(PARTNER_COLLECTION)
}

// Interest collection accessor
export async function getInterestWaitlistCollection(): Promise<
  Collection<InterestWaitlistFormData>
> {
  const client = await connectToDatabase()
  return client.db(dbName).collection<InterestWaitlistFormData>(INTEREST_COLLECTION)
}

// Optional helper to close the connection (mainly for testing or cleanup)
export async function closeDatabaseConnection() {
  if (cachedClient) {
    await cachedClient.close()
    cachedClient = null
  }
}
