import { z } from 'zod'

export const partnerWaitlistSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters'),
  businessName: z
    .string()
    .min(1, 'Business name is required')
    .max(100, 'Business name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(255, 'Email must be less than 255 characters'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[0-9+\-() ]*$/, 'Please enter a valid phone number'),
  city: z.string().min(1, 'City is required').max(100, 'City must be less than 100 characters'),
  state: z.string().min(2, 'State is required').max(2, 'State must be 2 characters'),
  businessCategory: z
    .string()
    .min(1, 'Business category is required')
    .max(100, 'Business category must be less than 100 characters'),
  receiveNewsLetter: z.boolean().default(false),
})

export type PartnerWaitlistFormData = z.infer<typeof partnerWaitlistSchema>
