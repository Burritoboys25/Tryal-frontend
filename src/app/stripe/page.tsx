'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import { useRouter } from 'next/navigation'

type Plan = {
  planId: string
  name: string
  description: string
  price: number
  monthlyCredits: number
  rolloverCreditsAllowed: boolean
}

const SubscriptionPage = () => {
  const router = useRouter()
  const [selected, setSelected] = useState<Plan | null>(null)
  const [loading, setLoading] = useState(false)
  const [plans, setPlans] = useState<Plan[]>([])

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/plans`)
        const { data } = await res.json()

        setPlans(data)
      } catch (err) {
        console.error('Failed to fetch plans', err)
      }
    }
    fetchPlans()
  }, [])

  const handleSubmit = () => {
    if (!selected) return
    setLoading(true)

    router.push(`/stripe/checkout?planId=${selected.planId}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Choose a Plan</h1>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map(plan => (
          <div
            key={plan.planId}
            onClick={() => setSelected(plan)}
            className={`cursor-pointer rounded-2xl border-2 p-6 shadow-md transition-all ${
              selected?.planId === plan.planId
                ? 'border-blue-500 bg-white'
                : 'border-transparent bg-white hover:border-gray-300'
            }`}
          >
            <h2 className="mb-2 text-xl font-semibold">{plan.name}</h2>
            <p className="mb-1 text-gray-600">${plan.price}</p>
            <p className="text-gray-500">{plan.monthlyCredits} credits</p>
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
