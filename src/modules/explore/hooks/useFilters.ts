import { useEffect, useState } from 'react'
import { FilterOptionMap, FilterOption, Categories } from '../types/filterTypes'

// Grab filter options from the backend. Sets up the filter options for the filter bar
export const useFilters = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [filterOptions, setFilterOptions] = useState<FilterOptionMap>({
    type: [],
    // skillLevel enum: BEGINNER, INTERMEDIATE, ADVANCED, EXPERT
    skillLevel: [
      { label: 'Beginner', value: 'BEGINNER' },
      { label: 'Intermediate', value: 'INTERMEDIATE' },
      { label: 'Advanced', value: 'ADVANCED' },
      { label: 'Expert', value: 'EXPERT' },
    ],
    // TODO: add groupType enum: SOLO, COUPLES, FAMILY, GROUP
    groupType: [
      { label: 'Any', value: 'ANY' },
      { label: 'Solo Friendly', value: 'SOLO' },
      { label: 'Couples & Date Night', value: 'COUPLES' },
      { label: 'Family-Friendly', value: 'FAMILY' },
      { label: 'Group & Team-Building', value: 'GROUP' },
    ],
    duration: [
      { label: 'Any', value: Infinity },
      { label: '30 mins', value: 30 },
      { label: '45 mins', value: 45 },
      { label: '1 hour', value: 60 },
      { label: '1.5 hours', value: 90 },
      { label: '2+ hours', value: 120 },
    ],
    credits: [0, 50],
    distance: [
      { label: 'Auto', value: Infinity },
      { label: '1/2 mile', value: 0.5 },
      { label: '1 mile', value: 1 },
      { label: '5 miles', value: 5 },
      { label: '10 miles', value: 10 },
      { label: '25+ miles', value: 25 },
    ],
  })

  // Fetch categories from backend and set type options
  // Map Categories backend to Type in frontend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('/api/categories')
        const categories = await res.json()

        // Map the Categories response to lavel and value for front end
        const categoryOptions: FilterOption[] = categories.map((cat: Categories) => ({
          label: cat.name,
          value: cat.categoryId,
        }))

        setFilterOptions(prev => ({
          ...prev,
          type: categoryOptions,
        }))
      } catch (err) {
        console.error('Failed to fetch categories:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { filterOptions, isLoading }
}
