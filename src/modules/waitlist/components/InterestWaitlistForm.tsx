'use client'
import { Button } from '@/shared/components/ui/base/button'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/shared/components/ui/base/input'

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
        throw new Error('Failed to join waitlist')
      }

      setIsSubmitting(false)
      setEmail('')
      router.push(`/thank-you?email=${encodeURIComponent(email)}&type=interest`)
    } catch (error) {
      console.error(error)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-grow sm:w-auto"
        required
      />
      <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </Button>
    </form>
  )
}

export default InterestWaitlistForm
