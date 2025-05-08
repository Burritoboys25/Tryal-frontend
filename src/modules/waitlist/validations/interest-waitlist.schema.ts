import { z } from 'zod'

export const interestWaitlistSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(100, 'Email must be less than 100 characters'),
})

export type InterestWaitlistFormData = z.infer<typeof interestWaitlistSchema>
