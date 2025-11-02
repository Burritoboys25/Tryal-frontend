export type OnboardingStatus = 'ACCOUNT_CREATED' | 'BUSINESS_INFO_COMPLETED' | 'EXPERIENCES_ADDED' | 'SUBMITTED_FOR_REVIEW' | 'APPROVED' | 'REJECTED'
export type CurrentOnboardingStep = 'BUSINESS_INFO' | 'EXPERIENCES' | 'REVIEW' | 'AWAITING_APPROVAL' | null

export type OnboardingContextType = {
  currentStep: CurrentOnboardingStep
  setCurrentStep: (currentStep: CurrentOnboardingStep) => void
  businessId: string
}