'use client'

import React, { useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import { useRouter } from 'next/navigation'

type Plan = {
  name: string
  price: number
  credits: number
  priceId: string
}

const plans: Plan[] = [
  { name: 'Starter', price: 25, credits: 8, priceId: 'price_1RcwFMClkdHHtOgpUvgC9U0h' },
  { name: 'Basic', price: 45, credits: 16, priceId: 'price_1RcwFrClkdHHtOgpiLgcQ30q' },
  { name: 'Standard', price: 75, credits: 30, priceId: 'price_1RcwG9ClkdHHtOgpslbGXSoq' },
  { name: 'Premium', price: 110, credits: 50, priceId: 'price_1RcwGUClkdHHtOgpyC1YJb9J' },
  { name: 'Elite', price: 150, credits: 72, priceId: 'price_1RcwGgClkdHHtOgpe2g5Tqtl' },
]

const SubscriptionPage = () => {
  const router = useRouter()
  const [selected, setSelected] = useState<Plan | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    if (!selected) return
    setLoading(true)

    router.push(`/stripe/checkout?priceId=${selected.priceId}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Choose a Plan</h1>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map(plan => (
          <div
            key={plan.name}
            onClick={() => setSelected(plan)}
            className={`cursor-pointer rounded-2xl border-2 p-6 shadow-md transition-all ${
              selected?.name === plan.name
                ? 'border-blue-500 bg-white'
                : 'border-transparent bg-white hover:border-gray-300'
            }`}
          >
            <h2 className="mb-2 text-xl font-semibold">{plan.name}</h2>
            <p className="mb-1 text-gray-600">${plan.price}</p>
            <p className="text-gray-500">{plan.credits} credits</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="mt-10 text-center">
          <p className="mb-4 text-lg">
            You selected: <strong>{selected.name}</strong>
          </p>
          <Button
            onClick={() => handleSubmit()}
            disabled={loading}
            className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Continue to Checkout'}
          </Button>
        </div>
      )}
    </div>
  )
}

export default SubscriptionPage
