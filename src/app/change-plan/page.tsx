'use client'

import React, { useEffect, useState } from 'react'
import PlansPage from '@/modules/plan/components/PlansPage'
import { useSubscriptionRedirect } from '@/modules/plan/hooks/useSubscriptionRedirect'

export default function ChangePlan() {
  const { userData, shouldRender } = useSubscriptionRedirect(true)
  const [currentPlanId, setCurrentPlanId] = useState<string>('')

  useEffect(() => {
    if (userData?.activeSubscription?.planId) {
      setCurrentPlanId(userData.activeSubscription.planId)
    }
  }, [userData])

  if (!shouldRender) {
    return null
  }

  return <PlansPage mode="change" currentPlanId={currentPlanId} />
}
