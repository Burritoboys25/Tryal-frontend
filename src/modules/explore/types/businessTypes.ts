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
  categories: string[]
  skillLevels: string[]
  minCredits: number
  maxCredits: number
  phoneNumber: string
  website: string
}

export type CreditRange = {
  min: number
  max: number
}
