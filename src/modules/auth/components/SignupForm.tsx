/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import FormField from '@/shared/components/ui/form-field'
import { useState } from 'react'
import { SignupFormData, signupFormSchema } from '../validations/signup.schema'
import CheckboxField from '@/shared/components/ui/CheckboxField'

const SignupForm = () => {
  const [form, setForm] = useState<SignupFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreement: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
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

      console.log('Form Data:', result.data)
      setSuccess(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Simple navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="flex items-center justify-between px-4 py-4 md:px-12">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Tryal
          </Link>
        </div>
      </nav>
      <section className="-mt-[72px] flex min-h-screen w-full items-center bg-white px-4 py-16 md:px-12 md:py-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 md:flex-row">
          <div className="max-w-lg">
            <div className="mb-8 space-y-3">
              <h1 className="text-h1">Let&apos;s get started!</h1>
              <p className="text-muted-foreground text-body2">
                Fill out your information below to create an account.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-[365px] space-y-2 text-left" noValidate>
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
                  <p className='text-caption2'>
                    By signing up, you agree to our{' '}
                    <Link href="/terms" className="text-info text-caption1">
                      terms and conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-info text-caption1">
                      privacy policy
                    </Link>
                    .
                    <span className="text-error text-caption1">*</span>
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
                className="mt-[24px] w-full cursor-pointer rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create My Account'}
              </Button>
            </form>
            <div className='mt-3'>
              <p className="text-caption2">
                Already have an account?{' '}
                <Link href="/login" className="text-info">
                  Log in
                </Link>
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative z-0 flex h-[450px] w-full justify-center bg-gray-200 md:w-1/2"></div>
        </div>
      </section>
    </>
  )
}

export default SignupForm
