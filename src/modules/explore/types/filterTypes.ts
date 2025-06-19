export type Categories = {
  categoryId: number
  name: string
}

export type FilterOption = {
  label: string
  value: string | number
}

export type FilterType = 'multi' | 'single' | 'range'

export type FilterKey = 'type' | 'skillLevel' | 'groupType' | 'duration' | 'distance' | 'credits'

export type FilterOptionMap = {
  type: FilterOption[] // category IDs (number[])
  skillLevel: FilterOption[] // enums: 'BEGINNER', etc.
  groupType: FilterOption[] // enums: 'SOLO', etc.
  duration: FilterOption[] // number values like 30, 60, etc.
  distance: FilterOption[] // strings like '5'
  credits: [number, number] // slider range
}

export type FilterConfigItem = {
  key: keyof FilterOptionMap
  label: string
  type: FilterType
}

export type Filters = {
  type: string[]
  skillLevel: string[]
  groupType: string
  duration: number
  credits: [number, number]
  distance: number
}
