'use client'

import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import PlanCards from '@/modules/plan/components/PlanCards'
import { Plan } from '@/shared/types/planTypes'
import React, { useState } from 'react'

export const examplePlans: Plan[] = [
  {
    planId: 'starter-uuid',
    name: 'Starter',
    description: 'Perfect for casual explorers who want to dip their toes into new experiences.',
    price: 25.0,
    credits: 8,
    rolloverCreditsAllowed: true,
    isActive: true,
    planType: 'SUBSCRIPTION',
  },
  {
    planId: 'explorer-uuid',
    name: 'Explorer',
    description: 'A flexible option for those looking to try a couple of experiences monthly.',
    price: 45.0,
    credits: 14,
    rolloverCreditsAllowed: true,
    isActive: true,
    planType: 'SUBSCRIPTION',
  },
  {
    planId: 'balance-uuid',
    name: 'Balance',
    description: 'Ideal for regular activity-goers who love variety.',
    price: 75.0,
    credits: 28,
    rolloverCreditsAllowed: true,
    isActive: true,
    planType: 'SUBSCRIPTION',
  },
  {
    planId: 'premium-uuid',
    name: 'Premium',
    description: 'For adventurers who want the most out of every month.',
    price: 110.0,
    credits: 46,
    rolloverCreditsAllowed: true,
    isActive: true,
    planType: 'SUBSCRIPTION',
  },
  {
    planId: 'elite-uuid',
    name: 'Elite',
    description: 'Premium access for true experience seekers.',
    price: 150.0,
    credits: 66,
    rolloverCreditsAllowed: true,
    isActive: true,
    planType: 'SUBSCRIPTION',
  },
]

export default function ChangePlan() {
  const [plans] = useState<Plan[]>(examplePlans)

  const currentPlanId = 'explorer-uuid'

  return (
    <ViewLayout type="default">
      <Container className="h-[calc(100vh-69px)] py-[3rem] max-w-full">
        <div className="mx-[12rem]">
          <h3 className="mb-2 text-3xl font-bold">Change Plan</h3>
          <p className="text-muted-foreground mb-6">
            Switch to a different plan that best fits your needs.
          </p>
        </div>
        <div>
          <PlanCards plans={plans} currentPlanId={currentPlanId} />
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
