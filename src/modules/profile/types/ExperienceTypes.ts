export type ExperienceType = {
  userId: string
  bookingId: string
  timeslotId: string
  experienceId: string
  bookingStatus: string
  businessName: string
  address: string
  creditPrice: number
  party: number
  timeslotDate: string
  startTime: string
}

export type SavedExperienceType = {
  userId: string
  businessId: string
  businessName: string
  address: string
  isBookmarked: boolean
}
