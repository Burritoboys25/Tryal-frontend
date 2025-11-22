import React from 'react'
import FormField from '@/shared/components/ui/forms/FormField'
import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { Checkbox } from '@/shared/components/ui/base/checkbox'
import { FormSelect } from '@/shared/components/ui/forms/FormSelect'
import { PartnerWaitlistFormData } from '../validations/partners-waitlist.schema'

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

const PartnerWaitlistForm = ({
  handleSubmit,
  handleChange,
  form,
  fieldErrors,
  handleSelectChange,
  setForm,
  isSubmitting,
  error,
}: {
  handleSubmit: (e: React.FormEvent<Element>) => Promise<void>
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  form: PartnerWaitlistFormData
  fieldErrors: Record<string, string[]>
  handleSelectChange: (value: string) => void
  setForm: React.Dispatch<React.SetStateAction<PartnerWaitlistFormData>>
  isSubmitting: boolean
  error: string | null
}) => {
  return (
    <form onSubmit={handleSubmit} className="md:w-[30.625rem] xl:w-[25.188rem] 2xl:w-[27.188rem]">
      <div className="flex flex-col mx-auto xl:text-pretty max-xl:min-w-full max-2xl:max-w-[23.563rem]">
        <h1 className="text-h1 text-foreground-teal">Get Discovered. Get Booked. Grow with Us!</h1>
        <p className="text-muted-foreground text-[0.875rem] leading-[1.25rem] mt-2">
          Ready to join our growing network? By partnering with us, you&apos;ll be exposed to more
          customers looking to discover and book unique experiences.
        </p>
        <p className="text-muted-foreground text-[0.875rem] leading-[1.25rem] mt-4">
          Fill out the form below to tell us about your business, and we&apos;ll be in touch to help
          you start connecting with new customers.
        </p>
      </div>

      <div className='mt-8 flex flex-col gap-2'>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <FormField
            label="First name"
            name="firstName"
            placeholder='Enter first name'
            onChange={handleChange}
            value={form.firstName}
            error={fieldErrors.firstName?.[0]}
            required
          />

          <FormField
            label="Last name"
            name="lastName"
            placeholder='Enter last name'
            onChange={handleChange}
            value={form.lastName}
            error={fieldErrors.lastName?.[0]}
            required
          />
        </div>

        <FormField
          label="Business name"
          name="businessName"
          placeholder='Enter business name'
          onChange={handleChange}
          value={form.businessName}
          required
          error={fieldErrors.businessName?.[0]}
        />

        <FormField
          label="Business email"
          name="email"
          placeholder='Enter business email'
          type="email"
          onChange={handleChange}
          value={form.email}
          required
          error={fieldErrors.email?.[0]}
        />

        <FormField
          label="Business phone number"
          name="phone"
          placeholder='Enter business phone number'
          onChange={handleChange}
          value={form.phone}
          required
          error={fieldErrors.phone?.[0]}
        />

        <div className="grid grid-cols-2 gap-2">
          <FormField
            label="City"
            name="city"
            placeholder='Enter city'
            onChange={handleChange}
            value={form.city}
            required
            error={fieldErrors.city?.[0]}
          />

          <FormField
            label="State"
            name="state"
            placeholder='Select state'
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
            placeholder='Select business category'
            value={form.businessCategory}
            onChange={handleSelectChange}
            options={categories}
          />
        </div>

        <div className="flex items-start gap-2 ">
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

          <label className="text-[0.75rem] font-semibold text-black xl:text-nowrap">
            I agree to receive marketing and other communications from Tryal. *
          </label>
        </div>

        <p className="text-[0.75rem] text-muted-foreground">
          You can unsubscribe from these communications at any time. For more information, please
          review our{' '}
          <Link href="/terms" className="text-link text-[#1d58fa]">
            Terms and Conditions
          </Link>
          {' and '}
          <Link href="/privacy" className="text-link text-[#1d58fa]">
            Privacy Policy
          </Link>
          .
        </p>

        {error && <p className="text-destructive text-sm">{error}</p>}

        <Button type="submit" variant="solid" className="mt-2 w-full cursor-pointer">
          {isSubmitting ? 'Submitting...' : 'Become a Partner'}
        </Button>
      </div>
    </form>
  )
}

export default PartnerWaitlistForm
