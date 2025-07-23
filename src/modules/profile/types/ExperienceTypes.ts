export type ExperienceType = {
  user_id: string
  booking_id: string
  timeslot_id: string
  booking_status: string
  experience_id: string
  business_name: string
  address: string
  credit_price: number
  party: number
  timeslot_date: string
  start_time: string
}

export type SavedExperienceType = {
  user_id: string
  business_id: string
  business_name: string
  address: string
  isBookmarked: boolean
}
