'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/base/button'
import FormField from '@/shared/components/ui/forms/FormField'
import { useState } from 'react'
import { SignupFormData, signupFormSchema } from '../validations/signup.schema'
import CheckboxField from '@/shared/components/ui/forms/CheckboxField'
import { signIn } from 'next-auth/react'
import { APIFieldError } from '../lib/errors'
import { useRouter } from 'next/navigation'
import { SignupPayload } from '../types/authTypes'

const SignupForm = () => {
  const router = useRouter()
  const [form, setForm] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFieldErrors({})

    try {
      const result = signupFormSchema.safeParse(form)

      if (!result.success) {
        setFieldErrors(result.error.flatten().fieldErrors)
        return
      }

      const signupPayload: SignupPayload = {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        password: result.data.password,
      }

      const res = await fetch('/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupPayload),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors)
        } else {
          setFieldErrors({ backend: [data.error || 'Signup failed'] })
        }
        return
      }

      await signIn('credentials', {
        email: result.data.email,
        password: result.data.password,
        redirect: false,
      })

      setSuccess(true)
      router.push('/explore')
    } catch (error: unknown) {
      if (error instanceof APIFieldError) {
        setFieldErrors(error.fieldErrors)
      } else if (error instanceof Error) {
        setFieldErrors({ backend: [error.message] })
      } else {
        setFieldErrors({ backend: ['An unexpected error occurred'] })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="-mt-[4.5rem] flex min-h-screen w-full items-center bg-white px-[1rem] py-[4rem] md:px-[3rem] md:py-0">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-[4rem] md:flex-row">
        <div className="max-w-lg">
          <div className="mb-[2rem] space-y-[0.75rem]">
            <h1 className="text-h1">Let&apos;s get started!</h1>
            <p className="text-muted-foreground text-body2">
              Fill out your information below to create an account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-[22.8125rem] space-y-[0.5rem] text-left"
            noValidate
          >
            <FormField
              label="First name"
              name="firstName"
              placeholder=""
              required
              error={fieldErrors.firstName?.[0]}
              value={form.firstName}
              onChange={e => setForm({ ...form, firstName: e.target.value })}
            />
            <FormField
              label="Last name"
              name="lastName"
              placeholder=""
              required
              error={fieldErrors.lastName?.[0]}
              value={form.lastName}
              onChange={e => setForm({ ...form, lastName: e.target.value })}
            />
            <FormField
              label="Email address"
              name="email"
              type="email"
              placeholder=""
              required
              error={fieldErrors.email?.[0]}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder=""
              required
              error={fieldErrors.password?.[0]}
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <FormField
              label="Re-enter password"
              name="confirmPassword"
              type="password"
              placeholder=""
              required
              error={fieldErrors.confirmPassword?.[0]}
              value={form.confirmPassword}
              onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
            />
            <CheckboxField
              label={
                <p className="text-caption2">
                  By signing up, you agree to our{' '}
                  <Link href="/terms" className="text-info text-caption1">
                    terms and conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-info text-caption1">
                    privacy policy
                  </Link>
                  .<span className="text-error text-caption1">*</span>
                </p>
              }
              name="agreement"
              value={form.agreement}
              checked={form.agreement}
              error={fieldErrors.agreement?.[0]}
              required
              onChange={() => setForm({ ...form, agreement: !form.agreement })}
            />

            <Button
              type="submit"
              className="mt-[1.5rem] w-full cursor-pointer rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create My Account'}
            </Button>
          </form>
          <div className="mt-[0.75rem]">
            <p className="text-caption2">
              Already have an account?{' '}
              <Link href="/login" className="text-info">
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className="relative z-0 flex h-[28.125rem] w-full justify-center bg-gray-200 md:w-1/2"></div>
      </div>
    </section>
  )
}

export default SignupForm
