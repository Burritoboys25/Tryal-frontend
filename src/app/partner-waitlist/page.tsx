'use client'

import { useState } from 'react'
import FormField from '@/shared/components/ui/form-field'
import { Button } from '@/shared/components/ui/button'

const BecomePartnerForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    category: '',
    agree: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <section className="flex max-h-screen justify-center px-4 py-0 sm:py-16">
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-2">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Get Discovered. Get Booked. Grow with Us!
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Ready to join our growing network? By partnering with us, you’ll be exposed to more
          customers looking to discover and book unique experiences.
        </p>
        <p className="text-sm text-gray-600 sm:text-base">
          Fill out the form below to tell us about your business, and we’ll be in touch to help you
          start connecting with new customers.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="First name"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
            required
          />
          <FormField
            label="Last name"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
            required
          />
        </div>

        <FormField
          label="Business name"
          name="businessName"
          placeholder="Business name"
          onChange={handleChange}
          required
        />
        <FormField
          label="Business email"
          name="email"
          type="email"
          placeholder="Business email"
          onChange={handleChange}
          required
        />
        <FormField
          label="Business phone number"
          name="phone"
          placeholder="Business phone number"
          onChange={handleChange}
          required
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="City" name="city" placeholder="City" onChange={handleChange} required />
          <FormField
            label="State"
            name="state"
            placeholder="State"
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="category" className="text-label">
            Business category
          </label>
          <select
            name="category"
            id="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded border p-2"
          >
            <option value="">Select</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
            <option value="services">Services</option>
          </select>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" name="agree" onChange={handleChange} className="mt-1" />
          <label className="text-sm text-gray-600">
            I agree to receive marketing and other communications from XPASS. *
          </label>
        </div>

        <p className="text-xs text-gray-500">
          You can unsubscribe from these communications at any time. For more information, please
          review our{' '}
          <a href="#" className="text-blue-600 underline">
            Terms and Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>

        <Button
          type="submit"
          className="w-full rounded-full bg-orange-600 py-3 font-semibold text-white hover:bg-orange-700"
        >
          Become a Partner
        </Button>
      </form>
    </section>
  )
}

export default BecomePartnerForm
