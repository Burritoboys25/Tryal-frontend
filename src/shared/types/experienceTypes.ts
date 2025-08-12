export type Experience = {
  experienceId: string 
  businessId: string 
  experienceName: string
  description: string
  skillLevel: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT'
  maxCapacity: number
  remainingCapacity: number
  duration: number
  creditPrice: number
  isActive: boolean
}
