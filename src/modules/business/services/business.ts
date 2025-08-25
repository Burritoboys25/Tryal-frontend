import { Business } from '@/modules/explore/types/businessTypes'
import { Experience } from '@/shared/types/experienceTypes'

const baseUrl = process.env.JAVA_BACKEND_URL || 'http://localhost:8080'

async function fetcher<T>(url: string): Promise<T | undefined> {
  const res = await fetch(url)
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
  const business = await getBusinessById(id)
  if (!business) return undefined
  const categories = await getBusinessCategories(id)
  return { ...business, categories }
}

// Fetch all experiences for a specific business from your backend API
export async function getBusinessExperiences(businessId: string): Promise<Experience[]> {
  try {
    const url = `${baseUrl}/api/experiences?businessId=${businessId}`
    const response = await fetch(url, { next: { revalidate: 60 } })
    if (!response.ok) {
      console.log('Fetching experiences from:', url)
      return []
    }
    return await response.json()
  } catch (error) {
    console.error('Network error fetching experiences:', error)
    return []
  }
}

// Fetch all experiences from your backend API
export async function getAllExperiences(): Promise<Experience[]> {
  try {
    const url = `${baseUrl}/api/experiences`
    const response = await fetch(url, { next: { revalidate: 60 } })
    if (!response.ok) {
      console.log('Fetching all experiences from:', url)
      return []
    }
    return await response.json()
  } catch (error) {
    console.error('Network error fetching all experiences:', error)
    return []
  }
}
