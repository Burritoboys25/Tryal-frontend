'use client'

import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import { useSearchParams } from 'next/navigation'
import CheckboxField from '@/shared/components/ui/forms/CheckboxField'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { showToast } from '@/shared/components/ui/notifications/Toast'

const referralOptions = [
  'Network / Friend',
  'Email / Newsletter',
  'Social Media',
  'Google / Search Engine',
  'Other',
]


const ReferralForm = ({email}: {email: string}) => {
  const [selectedReferrals, setSelectedReferrals] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const searchParams = useSearchParams()
  // const email = searchParams.get('email')
  const type = searchParams.get('type')

  const handleReferralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        showToast({ type: 'waitlist', description: "You're awesome – thanks for sharing!" })
        router.push('/')
      }
    } catch (error) {
      showToast({ type: 'error' })
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
    <form className="max-w-sm" onSubmit={handleReferralSubmit}>
      <h1 className="text-h1">Thank you for your interest!</h1>
      <div className="mt-2 flex flex-col gap-5 text-[0.875rem] leading-[1.25rem]">
        <p className="">
          We&apos;re excited to have you on board. We&apos;ll be sending you updates via email as we
          get closer to launch, so keep an eye on your inbox!{' '}
        </p>
        <p>Before you go, could you let us know how you heard about us? It really helps us out!</p>
      </div>
      <div className='mt-8 flex flex-col gap-4'>
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
      </div>
      <Button type="submit" variant="solid" className="mt-7 w-full cursor-pointer">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

export default ReferralForm
