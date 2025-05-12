'use client'

import { useState } from 'react'
import Container from '@/shared/components/layout/Container'
import { Button } from '@/shared/components/ui/button'
import FormField from '@/shared/components/ui/form-field'
import { waitlistSchema, type WaitlistFormData } from '@/shared/lib/validation/waitlist.schema'

const Waitlist = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccess(false)
    setFieldErrors({})

    const form = e.currentTarget
    const formData = new FormData(form)

    const raw = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
    }

    const parsed = waitlistSchema.safeParse(raw)
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors)
      setIsSubmitting(false)
      return
    }

    const data: WaitlistFormData = parsed.data

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors)
        } else {
          console.error(result.error || 'Unexpected error')
        }
        return
      }

      form.reset()
      setSuccess(true)
    } catch (error) {
      console.error('Waitlist submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="-mt-[72px] flex min-h-screen items-center justify-center">
      <Container className="max-w-lg">
        <div className="mb-4 space-y-3">
          <h1 className="text-h1">Get early access!</h1>
          <p className="text-muted-foreground">
            We&apos;re building something exciting — the ultimate platform for discovering
            experiences and activities. Be the first to know when we launch and get exclusive early
            updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
          <FormField
            label="First name"
            name="firstName"
            placeholder="Jane"
            required
            error={fieldErrors.firstName?.[0]}
          />
          <FormField
            label="Last name"
            name="lastName"
            placeholder="Doe"
            required
            error={fieldErrors.lastName?.[0]}
          />
          <FormField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            error={fieldErrors.email?.[0]}
          />

          {success && (
            <div className="rounded-md bg-green-50 p-4 text-green-800">
              Successfully joined the waitlist! We&apos;ll keep you updated.
            </div>
          )}

          <Button type="submit" className="mt-2 w-full rounded-full" disabled={isSubmitting}>
            {isSubmitting ? 'Joining...' : 'Join Waitlist'}
          </Button>
        </form>
      </Container>
    </section>
  )
}

export default Waitlist
