'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FormField from '@/shared/components/ui/forms/FormField'
import { Button } from '@/shared/components/ui/base/button'
import {
  partnerWaitlistSchema,
  PartnerWaitlistFormData,
} from '@/modules/waitlist/validations/partners-waitlist.schema'
import Link from 'next/link'
import { Checkbox } from '@/shared/components/ui/base/checkbox'
import { FormSelect } from '@/shared/components/ui/forms/FormSelect'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import { showToast } from '@/shared/components/ui/notifications/Toast'

const categories = [
  'Arts & Crafts',
  'Culinary Experiences',
  'Music & Dance',
  'Outdoor & Adventure',
  'Cultural & Educational',
  'DIY & Hands-on Skills',
  'Social & Networking Events',
  'Wellness & Mindfulness',
  'Other',
]

const BecomePartnerForm = () => {
  const [form, setForm] = useState<PartnerWaitlistFormData>({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    businessCategory: '',
    receiveNewsLetter: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement
    const { name, type, value, checked } = target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setFieldErrors({})
    const result = partnerWaitlistSchema.safeParse({
      ...form,
    })

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      setFieldErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/waitlist/partners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...result.data,
        }),
      })

      if (res.ok) {
        showToast({ type: 'waitlist', description: "We’ll be in touch soon!" })
        router.push(`/thank-you?email=${encodeURIComponent(form.email)}&type=partner`)
      } else {
        showToast({ type: 'error' })
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
      }
    } catch (err) {
      showToast({ type: 'error' })
      console.error(err)
      setError('Network error.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSelectChange = (value: string) => {
    setForm(prev => ({
      ...prev,
      businessCategory: value,
    }))
  }

  return (
    <ViewLayout type={"partner"}>
      <Container>
        <section className="flex justify-center pb-[120px] pt-[81px]">
          <form onSubmit={handleSubmit} className="w-full max-w-[432px] space-y-2">
            <div className="space-y-1.5">
              <h2 className="text-h2">
                Get Discovered. Get <br />
                Booked. Grow with Us!
              </h2>
              <p className="text-body2">
                Ready to join our growing network? By partnering with us, you&apos;ll be exposed to
                more customers looking to discover and book unique experiences.
              </p>
              <p className="text-body2">
                Fill out the form below to tell us about your business, and we&apos;ll be in touch
                to help you start connecting with new customers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <FormField
                label="First name"
                name="firstName"
                onChange={handleChange}
                value={form.firstName}
                error={fieldErrors.firstName?.[0]}
                required
              />

              <FormField
                label="Last name"
                name="lastName"
                onChange={handleChange}
                value={form.lastName}
                error={fieldErrors.lastName?.[0]}
                required
              />
            </div>

            <FormField
              label="Business name"
              name="businessName"
              onChange={handleChange}
              value={form.businessName}
              required
              error={fieldErrors.businessName?.[0]}
            />

            <FormField
              label="Business email"
              name="email"
              type="email"
              onChange={handleChange}
              value={form.email}
              required
              error={fieldErrors.email?.[0]}
            />

            <FormField
              label="Business phone number"
              name="phone"
              onChange={handleChange}
              value={form.phone}
              required
              error={fieldErrors.phone?.[0]}
            />

            <div className="grid grid-cols-2 gap-2">
              <FormField
                label="City"
                name="city"
                onChange={handleChange}
                value={form.city}
                required
                error={fieldErrors.city?.[0]}
              />

              <FormField
                label="State"
                name="state"
                onChange={handleChange}
                value={form.state}
                required
                error={fieldErrors.state?.[0]}
              />
            </div>

            <div className="space-y-1.5">
              <FormSelect
                label="Business category"
                name="businessCategory"
                value={form.businessCategory}
                onChange={handleSelectChange}
                options={categories}
              />
            </div>

            <div className="flex items-start gap-2 text-center">
              <Checkbox
                id="receiveNewsLetter"
                checked={form.receiveNewsLetter}
                onCheckedChange={checked => {
                  setForm(prev => ({
                    ...prev,
                    receiveNewsLetter: checked === true,
                  }))
                }}
              />

              <label className="text-caption2 text-muted-foreground">
                I agree to receive marketing and other communications from XPASS. *
              </label>
            </div>

            <p className="text-caption2 text-muted-foreground">
              You can unsubscribe from these communications at any time. For more information,
              please review our{' '}
              <Link href="#" className="text-link">
                Terms and Conditions
              </Link>
              {' and '}
              <Link href="#" className="text-link">
                Privacy Policy
              </Link>
              .
            </p>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <Button type="submit" variant="solid" className="mt-2 w-full cursor-pointer">
              {isSubmitting ? 'Submitting...' : 'Become a Partner'}
            </Button>
          </form>
        </section>
      </Container>
    </ViewLayout>
  )
}

export default BecomePartnerForm
