'use client'

import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import PlanCards from '@/modules/plan/components/PlanCards'
import { Plan } from '@/shared/types/planTypes'
import React, { useEffect, useState } from 'react'
import { useUser } from '@/shared/hooks/useUser'

export default function ChangePlan() {
  const { userData } = useUser()
  const [activePlans, setActivePlans] = useState<Plan[]>([])
  const [currentPlanId, setCurrentPlanId] = useState<string>('')

  useEffect(() => {
    if (userData?.activeSubscription?.planId) {
      setCurrentPlanId(userData.activeSubscription.planId)
    }
  }, [userData])

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch(`/api/plans/`)
        if (!res.ok) throw new Error('Failed to fetch plans')

        const plans = await res.json()
        setActivePlans(plans.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchPlans()
  }, [])

  return (
    <ViewLayout type="default">
      <Container className="h-[calc(100vh-69px)] max-w-full py-[3rem]">
        <div className="mx-[12rem]">
          <h3 className="mb-2 text-3xl font-bold">Change Plan</h3>
          <p className="text-muted-foreground mb-6">
            Switch to a different plan that best fits your needs.
          </p>
        </div>
        <div>
          <PlanCards plans={activePlans} currentPlanId={currentPlanId} />
        </div>
        <div className="mx-[12rem]">
          <p className="text-muted-foreground mt-6 text-sm">
            Your subscription will automatically renew at the end of each billing cycle unless
            canceled prior to the renewal date. You may cancel your subscription at any time through
            your account settings. Cancellation will take effect at the end of the current billing
            period. We do not offer refunds for unused credits or partial billing periods. See our
            terms and conditions for more information.
          </p>
        </div>
      </Container>
    </ViewLayout>
  )
}
