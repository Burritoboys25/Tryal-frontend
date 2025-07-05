export type ExperienceType = {
  user_id: string
  booking_id: string
  exp_schedule_id: string
  booking_status: string
  exp_id: string
  name: string
  image_url: string | null
  address: string
  price_credits: number
  party: number
  exp_date: string
  start_time: string
}

export type SavedExperienceType = {
  user_bookmarks_id: string
  user_id: string
  name: string
  image_url: string
  price_credits: number
  rating: number
  isBookmarked: boolean
}
