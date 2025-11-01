'use client'

import React, { useEffect } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import FormField from '@/shared/components/ui/forms/FormField'
import { useState } from 'react'
import {
  BusinessSignupFormData,
  businessSignupFormSchema,
} from '../validations/businessSignup.schema'
import { signIn } from 'next-auth/react'
import { APIFieldError } from '../lib/errors'
import { useRouter } from 'next/navigation'
import { BusinessSignupPayload } from '../types/authTypes'

type BusinessSignupFormProps = {
  businessId: string
}

const BusinessSignupForm = ({ businessId }: BusinessSignupFormProps) => {
  const router = useRouter()
  const [form, setForm] = useState<BusinessSignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await fetch(`/api/businesses/${businessId}`)

        if (!res.ok) throw new Error('Failed to fetch business')

        const business = await res.json()
        setForm(prev => ({ ...prev, email: business.data.email }))
      } catch (error) {
        console.error(error)
      }
    }

    if (businessId) fetchBusiness()
  }, [businessId])

  const [isSubmitting, setIsSubmitting] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFieldErrors({})

    try {
      const result = businessSignupFormSchema.safeParse(form)

      if (!result.success) {
        setFieldErrors(result.error.flatten().fieldErrors)
        return
      }

      const signupPayload: BusinessSignupPayload = {
        email: result.data.email,
        password: result.data.password,
      }

      //TODO: create new api
      //TODO: add role to business and users
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

      await signIn(
        'credentials',
        {
          email: result.data.email,
          password: result.data.password,
          redirect: false,
        },
        { basePath: '/api/auth/business' },
      )

      setSuccess(true)
      router.push('/business-temp/onboard')
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
    <section className="flex min-h-screen w-full flex-col bg-white">
      <div className="flex flex-1 items-center justify-center px-[1rem] py-[4rem] md:px-[3rem] md:py-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-[2rem] md:flex-row">
          <div className="max-w-lg">
            <div className="mb-[2rem] space-y-[0.75rem]">
              <h1 className="text-h1">Welcome to Tryal!</h1>
              <p className="text-muted-foreground text-body2">
                Create a new password to log into your business account.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-[22.8125rem] space-y-[0.5rem] text-left"
              noValidate
            >
              <FormField
                label="Email address"
                name="email"
                type="email"
                value={form.email}
                disabled
              />
              <FormField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                required
                error={fieldErrors.password?.[0]}
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
              <FormField
                label="Re-enter password"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                required
                error={fieldErrors.confirmPassword?.[0]}
                value={form.confirmPassword}
                onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
              />

              <Button
                type="submit"
                className="mt-[1.5rem] w-full cursor-pointer rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create My Account'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessSignupForm
