'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { useSearchParams } from 'next/navigation'

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const CheckoutPage = () => {
  const searchParams = useSearchParams()
  const planId = searchParams.get('planId')

  const [user, setUser] = useState<{ id: string; email: string } | null>(null)

  useEffect(() => {
    const raw = localStorage.getItem('userData')

    if (raw) {
      try {
        const parsed = JSON.parse(raw)

        setUser({
          id: parsed.userId,
          email: parsed.email,
        })
      } catch (e) {
        console.error('Failed to fetch userdata:', e)
      }
    }
  }, [])

  useEffect(() => {
    console.log(user?.email, user?.id)
  }, [user])

  const options = useMemo(() => {
    if (!user || !planId) {
      return null
    }

    return {
      fetchClientSecret: () => {
        return fetch('http://localhost:8080/api/payments/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            planId: planId,
            email: user.email,
            userId: user.id,
          }),
        })
          .then(res => res.json())
          .then(data => data.clientSecret)
      },
    }
  }, [user, planId])

  return (
    <div id="checkout">
      {options ? (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default CheckoutPage
