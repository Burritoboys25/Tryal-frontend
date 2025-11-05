'use client'

import React from 'react'
import PlansPage from '@/modules/plan/components/PlansPage'
import { useSubscriptionRedirect } from '@/modules/plan/hooks/useSubscriptionRedirect'

export default function SelectPlan() {
  const { shouldRender } = useSubscriptionRedirect(false)

  if (!shouldRender) {
    return null
  }

  return <PlansPage mode="select" />
}
