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
  user_bookmarks_id: string
  user_id: string
  business_name: string
  credit_price: number
  rating: number
  isBookmarked: boolean
}
