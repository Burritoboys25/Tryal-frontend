import { Business } from '@/modules/explore/types/businessTypes'

const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

export async function getBusinessById(id: string): Promise<Business | undefined> {
  const res = await fetch(`${baseUrl}/api/businesses/${id}`, { cache: 'no-store' })
  if (!res.ok) return undefined
  const data = await res.json()
  return data.businessDTO as Business
}
