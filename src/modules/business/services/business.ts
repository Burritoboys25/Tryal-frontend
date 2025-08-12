import { Business } from '@/modules/explore/types/businessTypes'
import { Experience } from '@/shared/types/experienceTypes'

const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'

async function fetcher<T>(url: string): Promise<T | undefined> {
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) return undefined
  return res.json()
}

export async function getBusinessById(id: string): Promise<Business | undefined> {
  const data = await fetcher<{ businessDTO: Business }>(`${baseUrl}/api/businesses/${id}`)
  if (!data?.businessDTO) return undefined
  return data.businessDTO
}

export async function getBusinessCategories(id: string): Promise<string[]> {
  const data = await fetcher<{ categories: string[] }>(`${baseUrl}/api/businesses/${id}/categories`)
  return data?.categories || []
}

// Helper to fetch business and categories using the API routes
export async function getBusinessWithCategoriesFromApi(id: string): Promise<Business | undefined> {
  // Fetch business data from your own API route
  const business = await getBusinessById(id)
  if (!business) return undefined
  // Fetch categories from your own API route
  const categories = await getBusinessCategories(id)
  // Combine and return
  return { ...business, categories }
}

export async function getBusinessExperiences(businessId: string): Promise<Experience[]> {
  try {
    const response = await fetch(
      `${baseUrl}/api/experiences/by-business?businessId=${businessId}`,
      {
        next: { revalidate: 60 },
      },
    )
    if (!response.ok) {
      console.log(
        'Fetching experiences from:',
        `${baseUrl}/api/experiences/by-business?businessId=${businessId}`,
      )
      return []
    }
    const data = await response.json()
    return data.experiences || []
  } catch (error) {
    console.error('Network error fetching experiences:', error)
    return []
  }
}
