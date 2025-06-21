import { Filters } from '../types/filterTypes'

export function buildQueryParams(filters: Filters): string {
  const params = new URLSearchParams()

  // If type is selected, add it to the query params
  if (filters.type && filters.type.length > 0) {
    params.append('categoryIds', filters.type.join(','))
  }

  // Convert frontend skillLevel to backend skillLevel
  if (filters.skillLevel && filters.skillLevel.length > 0) {
    params.append('skillLevel', filters.skillLevel.join(','))
  }

  // Convert frontend duration to backend duration
  if (
    filters.duration !== undefined &&
    filters.duration !== null &&
    filters.duration !== Infinity
  ) {
    params.append('duration', String(filters.duration))
  }

  if (filters.groupType !== null) {
    params.append('groupTypeIds', String(filters.groupType))
  }

  if (filters.credits[0] !== 0 || filters.credits[1] !== 100) {
    params.append('creditsMin', String(filters.credits[0]))
    params.append('creditsMax', String(filters.credits[1]))
  }

  return params.toString()
}
