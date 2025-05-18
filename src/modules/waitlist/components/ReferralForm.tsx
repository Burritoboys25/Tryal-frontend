'use client'

import { Button } from '@/shared/components/ui/base/button'
import { useSearchParams } from 'next/navigation'
import CheckboxField from '@/shared/components/ui/forms/CheckboxField'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const referralOptions = [
  'Network / Friend',
  'Email / Newsletter',
  'Social Media',
  'Google / Search Engine',
  'Other',
]

import React from 'react'

const ReferralForm = () => {
  const [selectedReferrals, setSelectedReferrals] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const type = searchParams.get('type')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !type) return

    const endpoint = type === 'partner' ? '/api/waitlist/partners' : '/api/waitlist/interests'

    try {
      const res = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          referrals: selectedReferrals,
        }),
      })

      if (res.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReferralChange = (checked: boolean, value: string | boolean) => {
    if (typeof value !== 'string') return

    setSelectedReferrals(prev => {
      if (checked) {
        return [...prev, value]
      } else {
        return prev.filter(v => v !== value)
      }
    })
  }

  return (
    <section className="-mt-[72px] flex min-h-screen items-center justify-center px-4">
      <form className="max-w-md space-y-6" onSubmit={handleSubmit}>
        <h1 className="text-h3">Thank you for your interest!</h1>
        <div className="text-body2 space-y-4">
          <p className="">
            We&apos;re excited to have you on board. We&apos;ll be sending you updates via email as
            we get closer to launch, so keep an eye on your inbox!{' '}
          </p>
          <p>
            Before you go, could you let us know how you heard about us? It really helps us out!
          </p>
        </div>
        {referralOptions.map(option => (
          <CheckboxField
            key={option}
            label={option}
            name="referrals"
            value={option}
            checked={selectedReferrals.includes(option)}
            onChange={handleReferralChange}
          />
        ))}
        <Button type="submit" variant="solid" className="mt-2 w-full">
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </section>
  )
}

export default ReferralForm
