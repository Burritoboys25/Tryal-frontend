import { useEffect, useState } from 'react'
import { FilterOptionMap, FilterOption, Categories, GroupTypes } from '../types/filterTypes'

// Grab filter options from the backend. Sets up the filter options for the filter bar
export const useFilters = () => {
  const [isCategoryLoading, setIsCategoryLoading] = useState(true)
  const [isGroupTypeLoading, setIsGroupTypeLoading] = useState(true)
  const [filterOptions, setFilterOptions] = useState<FilterOptionMap>({
    type: [],
    // skillLevel enum: BEGINNER, INTERMEDIATE, ADVANCED, EXPERT
    skillLevel: [
      { label: 'Beginner', value: 'BEGINNER' },
      { label: 'Intermediate', value: 'INTERMEDIATE' },
      { label: 'Advanced', value: 'ADVANCED' },
      { label: 'Expert', value: 'EXPERT' },
    ],
    groupType: [],
    duration: [
      { label: '30 mins', value: 30 },
      { label: '45 mins', value: 45 },
      { label: '1 hour', value: 60 },
      { label: '1.5 hours', value: 90 },
      { label: '2+ hours', value: 120 },
    ],
    credits: [0, 100],
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
        const res = await fetch('/api/explore/categories')
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
        setIsCategoryLoading(false)
      }
    }

    const fetchGroupTypes = async () => {
      try {
        const res = await fetch('/api/explore/groupTypes')
        const groupTypes = await res.json()

        // Map the GroupTypes response to label and value for front end
        const groupTypeOptions: FilterOption[] = groupTypes.map((groupType: GroupTypes) => ({
          label: groupType.name,
          value: groupType.groupTypeId,
        }))

        setFilterOptions(prev => ({
          ...prev,
          groupType: groupTypeOptions,
        }))
      } catch (err) {
        console.error('Failed to fetch group types:', err)
      } finally {
        setIsGroupTypeLoading(false)
      }
    }

    fetchCategories()
    fetchGroupTypes()
  }, [])

  // Set loading state to true if either category or group type is loading
  const isLoading = isCategoryLoading || isGroupTypeLoading

  return { filterOptions, isLoading }
}
