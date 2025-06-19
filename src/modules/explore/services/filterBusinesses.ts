import { Business } from '../types/businessTypes'
import { Filters } from '../types/filterTypes'

// Input filter state and gets businesses from the backend
export async function fetchFilteredBusinesses(filters: Filters): Promise<Business[]> {
  try {
    const res = await fetch('api/explore/businesses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filters),
    })

    const data = await res.json()

    return data.businesses as Business[]
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return []
  }
}
