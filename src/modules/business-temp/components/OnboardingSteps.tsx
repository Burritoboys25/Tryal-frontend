'use client'
import React from 'react'
import AddExperiencesStep from './AddExperiencesStep'
import ReviewStep from './ReviewStep'
import AwaitingApprovalStep from './AwaitingApprovalStep'
import { useOnboardingContext } from './OnboardingContextProvider'
import { CurrentOnboardingStep } from '@/modules/business-temp/types/OnboardingTypes'
import AddBusinessInfoStep from './AddBusinessInfoStep'

export default function OnboardingSteps() {
  const { currentStep } = useOnboardingContext()

  switch (currentStep as CurrentOnboardingStep) {
    case 'BUSINESS_INFO':
      return <AddBusinessInfoStep />
    case 'EXPERIENCES':
      return <AddExperiencesStep />
    case 'REVIEW':
      return <ReviewStep />
    case 'AWAITING_APPROVAL':
      return <AwaitingApprovalStep />
    default:
      return null
  }
}
