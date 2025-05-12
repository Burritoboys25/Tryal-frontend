/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Container from '@/shared/components/layout/Container'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import FormField from '@/shared/components/ui/form-field'
import { useState } from 'react'

const SignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

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
          <Container className="max-w-lg">
            <div className="mb-4 space-y-3">
              <h1 className="text-h1">Let&apos;s get started!</h1>
              <p className="text-muted-foreground">
                Fill out your information below to create an account.
              </p>
            </div>

            <form onSubmit={undefined} className="space-y-4 text-left" noValidate>
              <FormField
                label="First name"
                name="firstName"
                placeholder=""
                required
                error={fieldErrors.firstName?.[0]}
              />
              <FormField
                label="Last name"
                name="lastName"
                placeholder=""
                required
                error={fieldErrors.lastName?.[0]}
              />
              <FormField
                label="Email address"
                name="email"
                type="email"
                placeholder=""
                required
                error={fieldErrors.email?.[0]}
              />
              <FormField
                label="Password"
                name="password"
                placeholder=""
                required
                error={fieldErrors.password?.[0]}
              />
              <FormField
                label="Re-enter password"
                name="password2"
                placeholder=""
                required
                error={fieldErrors.password2?.[0]}
              />

              <Button type="submit" className="mt-2 w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create My Account'}
              </Button>
            </form>
          </Container>

          {/* Right image */}
          <div className="relative z-0 flex h-[450px] w-full justify-center bg-gray-200 md:w-1/2"></div>
        </div>
      </section>
    </>
  )
}

export default SignupForm
