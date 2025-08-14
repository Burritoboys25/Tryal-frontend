export type PlanType = 'SUBSCRIPTION' | 'ONE_TIME'

export interface Plan {
  planId: string
  name: string
  description: string
  price: number
  credits: number
  rolloverCreditsAllowed: boolean
  isActive: boolean
  planType: PlanType
}