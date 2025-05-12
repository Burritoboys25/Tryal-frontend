import { z } from 'zod'

export const waitlistSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(30, 'First name must be less than 50 characters'),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(30, 'Last name must be less than 50 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .max(75, 'Email must be less than 100 characters'),
})

export type WaitlistFormData = z.infer<typeof waitlistSchema>
