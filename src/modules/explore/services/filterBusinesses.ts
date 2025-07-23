import { Business } from '../types/businessTypes'
import { Filters } from '../types/filterTypes'
import { buildQueryParams } from '../libs/buildQueryParams'

// Takes filters and builds the query params, then fetches the businesses from the backend
export async function fetchFilteredBusinesses(filters: Filters): Promise<{
  businesses: Business[]
}> {
  try {
    const query = buildQueryParams(filters)
    const url = query ? `/api/explore/businesses?${query}` : '/api/explore/businesses'
    const res = await fetch(url)
    const data = await res.json()
    return { businesses: data.businesses as Business[] }
  } catch (error) {
    console.error('Error fetching businesses:', error)
    return { businesses: [] }
  }
}

// Takes the search params and returns the filter object for state. Sets default values if not present.
export function getFiltersFromSearchParams(searchParams: URLSearchParams): Filters {
  return {
    type: searchParams.get('categoryIds')?.split(',') || [],
    skillLevel: searchParams.get('skillLevel')?.split(',') || [],
    duration: searchParams.get('duration') ? Number(searchParams.get('duration')) : Infinity,
    distance: searchParams.get('distance') ? Number(searchParams.get('distance')) : Infinity,
    groupType: searchParams.get('groupTypeIds') || '',
    credits: [
      Number(searchParams.get('creditsMin')) || 0,
      Number(searchParams.get('creditsMax')) || 100,
    ],
  }
}
