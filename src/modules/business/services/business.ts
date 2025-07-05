import { Business } from '@/modules/explore/types/businessTypes'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

export async function getBusinessByNameSlug(slug: string): Promise<Business | undefined> {
  const res = await fetch(`${API_BASE_URL}/api/businesses`, { cache: 'no-store' })
  const data = await res.json()
  const business = (data.businesses as Business[]).find(
    b =>
      b.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') === slug,
  )
  if (!business) return undefined
  // Fetch the full business info by id
  return getBusinessById(business.businessId)
}

export async function getBusinessById(id: string): Promise<Business | undefined> {
  const res = await fetch(`${API_BASE_URL}/api/businesses/${id}`, { cache: 'no-store' })
  if (!res.ok) return undefined
  return (await res.json()) as Business
}
