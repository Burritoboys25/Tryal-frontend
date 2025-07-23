'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js'
import { useSearchParams } from 'next/navigation'

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const CheckoutPage = () => {
  const searchParams = useSearchParams()
  const priceId = searchParams.get('priceId')

  const [user, setUser] = useState<{ id: string; email: string } | null>(null)

  useEffect(() => {
    //TODO: Eventually remove from local storage
    const raw = localStorage.getItem('userData')
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        setUser({
          id: parsed.userDTO.userId,
          email: parsed.userDTO.email,
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
    if (!user || !priceId) {
      return null
    }

    return {
      fetchClientSecret: () => {
        return fetch('http://localhost:8080/api/payments/session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            priceId: priceId,
            email: user.email,
            userId: user.id,
          }),
        })
          .then(res => res.json())
          .then(data => data.clientSecret)
      },
    }
  }, [user, priceId])

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
