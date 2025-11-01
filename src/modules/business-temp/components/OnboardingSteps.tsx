'use client'
import React from 'react'
import BusinessInfoStep from './BusinessInfoStep'
import AddExperiencesStep from './AddExperiencesStep'
import ReviewSubmitStep from './ReviewSubmitStep'
import { useOnboardingContext } from './OnboardingContextProvider'

export default function OnboardingSteps() {
  const { currentStep } = useOnboardingContext()

  switch (currentStep) {
    case 'BUSINESS_INFO':
      return <BusinessInfoStep />
    case 'EXPERIENCES':
      return <AddExperiencesStep />
    case 'REVIEW':
      return <ReviewSubmitStep />
    default:
      return <BusinessInfoStep />
  }
}
