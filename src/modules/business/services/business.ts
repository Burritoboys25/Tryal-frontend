import { Experience } from '@/shared/types/experienceTypes'
import { Business } from '@/modules/explore/types/businessTypes'
import API_BASE_URL from '@/shared/lib/apiBaseUrl'

export async function getBusinessById(id: string): Promise<Business | undefined> {
  const res = await fetch(`${API_BASE_URL}/api/businesses/${id}`)
  if (!res.ok) return undefined
  const data = await res.json()
  return data.businessDTO
}

export async function getBusinessCategories(id: string): Promise<string[]> {
  const res = await fetch(`${API_BASE_URL}/api/businesses/${id}/categories`)
  if (!res.ok) return []
  const data = await res.json()
  return data.categories || []
}

// Helper to fetch business and categories using the API routes
export async function getBusinessWithCategoriesFromApi(id: string): Promise<Business | undefined> {
  const business = await getBusinessById(id)
  if (!business) return undefined
  const categories = await getBusinessCategories(id)
  return { ...business, categories }
}

// Fetch all experiences for a specific business from backend API
export async function getBusinessExperiences(businessId: string): Promise<Experience[]> {
  try {
    const url = `${API_BASE_URL}/api/experiences?businessId=${businessId}`
    const response = await fetch(url)
    if (!response.ok) {
      console.log('Fetching experiences from:', url)
      return []
    }
    const data = await response.json()
    return data.experiences || []
  } catch (error) {
    console.error('Network error fetching experiences:', error)
    return []
  }
}

// Fetch all experiences from your backend API
export async function getAllExperiences(): Promise<Experience[]> {
  try {
    const url = `${API_BASE_URL}/api/experiences`
    const response = await fetch(url)
    if (!response.ok) {
      console.log('Fetching all experiences from:', url)
      return []
    }
    const data = await response.json()
    return data.experiences || []
  } catch (error) {
    console.error('Network error fetching all experiences:', error)
    return []
  }
}
