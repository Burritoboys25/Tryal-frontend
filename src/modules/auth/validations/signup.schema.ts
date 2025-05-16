import { z } from 'zod'

export const signupFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'First name is required')
      .max(50, 'First name must be less than 50 characters'),
    lastName: z
      .string()
      .min(1, 'Last name is required')
      .max(50, 'Last name must be less than 50 characters'),
    email: z
      .string()
      .email('Please enter a valid email address')
      .min(1, 'Email is required')
      .max(100, 'Email must be less than 100 characters'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(100, 'Password must be less than 100 characters'),
    confirmPassword: z.string().min(1, 'Please re-enter your password'),
    agreement: z.boolean().refine(val => val === true, {
      message: 'You must agree to the terms to continue',
    }),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignupFormData = z.infer<typeof signupFormSchema>
