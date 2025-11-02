import { z } from 'zod'

export const businessSignupFormSchema = z
  .object({
    email: z
      .string()
      .email('Please enter a valid email address')
      .min(1, 'Email is required')
      .max(100, 'Email must be less than 100 characters'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be less than 100 characters'),
    confirmPassword: z.string().min(1, 'Please re-enter your password')
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type BusinessSignupFormData = z.infer<typeof businessSignupFormSchema>
