'use client'
import { Button } from '@/shared/components/ui/base/button'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/shared/components/ui/base/input'
import { showToast } from '@/shared/components/ui/notifications/Toast'

const InterestWaitlistForm = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/waitlist/interests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        showToast({ type: 'error' })
        throw new Error('Failed to join waitlist')
      }
      
      showToast({ type: 'waitlist', description: "You're in! We'll keep you posted." })
      setIsSubmitting(false)
      setEmail('')
      router.push(`/thank-you?email=${encodeURIComponent(email)}&type=interest`)
    } catch (error) {
      showToast({ type: 'error' })
      console.error(error)
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-6 md:flex-row 2xl:max-w-[506px] 2xl:gap-3"
    >
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-grow sm:w-auto"
        required
      />
      <Button type="submit" disabled={isSubmitting} className="min-w-[112px] cursor-pointer">
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </Button>
    </form>
  )
}

export default InterestWaitlistForm
