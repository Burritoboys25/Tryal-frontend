'use client'

import React, { createContext, useContext, useState } from 'react'
import {
  OnboardingContextType,
  CurrentOnboardingStep,
} from '../types/OnboardingTypes'

const OnboardingContext = createContext<OnboardingContextType | null>(null)

export const OnboardingContextProvider = ({
  children,
  initialStatus,
  businessId,
}: {
  children: React.ReactNode
  initialStatus: string
  businessId: string
}) => {
  const getStepFromStatus = (status: string): CurrentOnboardingStep => {
    switch (status) {
      case 'ACCOUNT_CREATED':
        return 'BUSINESS_INFO'
      case 'BUSINESS_INFO_COMPLETED':
        return 'EXPERIENCES'
      case 'EXPERIENCES_ADDED':
        return 'REVIEW'
      case 'SUBMITTED_FOR_REVIEW':
        return 'AWAITING_APPROVAL'
      default:
        return null
    }
  }

  const [currentStep, setCurrentStep] = useState<CurrentOnboardingStep>(getStepFromStatus(initialStatus))

  return (
    <OnboardingContext.Provider value={{ currentStep, setCurrentStep, businessId }}>
      {children}
    </OnboardingContext.Provider>
  )
}

export const useOnboardingContext = () => {
  const ctx = useContext(OnboardingContext)
  if (!ctx) throw new Error('useOnboardingContext must be used within provider')
  return ctx
}
