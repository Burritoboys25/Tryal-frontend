// Business type
export interface Business {
  business_id: string
  name: string
  email: string
  website: string
  address: string
  phone_number: string
  stripe_account_id: string
  rating: number
  image_url: string
  credits: number
}

// Experience type
export interface Experience {
  exp_id: string
  business_id: string
  name: string
  description: string
  skill_level: string
  capacity: number
  duration_minutes: number
  price_credits: number
  is_active: boolean
}

// Category type
export interface Category {
  cat_id: string
  name: string
  description: string
}

// ExperienceCategory type
// Links an experience to a category.
export interface ExperienceCategory {
  exp_cat_id: string
  exp_id: string
  cat_id: string
}
