import { z } from 'zod'

export const userLoginFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters'),
  password: z
    .string()
    .min(1, 'Password is required')
})

export type UserLoginFormData = z.infer<typeof userLoginFormSchema>
