'use client'

import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import PlanCards from '@/modules/plan/components/PlanCards'
import { Plan } from '@/shared/types/planTypes'
import React, { useEffect, useState } from 'react'
import { plansPageContent } from '@/modules/plan/config/plansPageContent'

interface PlansPageProps {
  mode: 'select' | 'change'
  currentPlanId?: string
}

export default function PlansPage({ mode, currentPlanId }: PlansPageProps) {
  const [activePlans, setActivePlans] = useState<Plan[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const content = plansPageContent[mode]

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const res = await fetch(`/api/plans/`)
        if (!res.ok) throw new Error('Failed to fetch plans')

        const plans = await res.json()
        setActivePlans(plans.data)
      } catch (err) {
        console.error('Error fetching plans:', err)
        setError('Unable to load plans. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchPlans()
  }, [])

  return (
    <ViewLayout type="default">
      <Container className="h-[calc(100vh-69px)] max-w-full py-[3rem]">
        <div className="mx-[12rem]">
          <h3 className="mb-2 text-3xl font-bold">{content.title}</h3>
          <p className="text-muted-foreground mb-6">{content.description}</p>
        </div>

        <div>
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="text-muted-foreground">Loading plans...</div>
            </div>
          ) : error ? (
            <div className="flex justify-center py-12">
              <div className="text-destructive">{error}</div>
            </div>
          ) : (
            <PlanCards plans={activePlans} currentPlanId={currentPlanId} />
          )}
        </div>

        <div className="mx-[12rem]">
          <p className="text-muted-foreground mt-6 text-sm">{content.disclaimer}</p>
        </div>
      </Container>
    </ViewLayout>
  )
}
