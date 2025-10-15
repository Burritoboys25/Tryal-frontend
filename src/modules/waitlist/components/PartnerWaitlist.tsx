'use client'

import React from 'react'
import PartnerWaitlistForm from './PartnerWaitlistForm'
import { useState } from 'react'
import {
  partnerWaitlistSchema,
  PartnerWaitlistFormData,
} from '@/modules/waitlist/validations/partners-waitlist.schema'
import { showToast } from '@/shared/components/ui/notifications/Toast'
import ReferralForm from './ReferralForm'

const PartnerWaitlist = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false)
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
        showToast({ type: 'waitlist', description: 'We’ll be in touch soon!' })
        setIsSubmitted(true)
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
    <>
      {isSubmitted ? (
        <ReferralForm
          email={form.email}
        />
      ) : (
        <PartnerWaitlistForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          form={form}
          fieldErrors={fieldErrors}
          handleSelectChange={handleSelectChange}
          setForm={setForm}
          isSubmitting={isSubmitting}
          error={error}
        />
      )}
    </>
  )
}

export default PartnerWaitlist
