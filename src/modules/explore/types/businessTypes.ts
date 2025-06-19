export type BusinessCategory = {
  name: string
  description: string
}

export type BusinessExperience = {
  duration: number
  skillLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT'
  categories: BusinessCategory[]
}

export type Business = {
  businessId: string
  name: string
  address: string
  latitude: number
  longitude: number
  filteredExperiences: BusinessExperience[]
}
