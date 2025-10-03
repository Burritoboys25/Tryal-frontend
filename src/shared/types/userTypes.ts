export interface User {
  userId: string
  email: string
  firstName: string
  lastName: string
  remember?: boolean
  activeSubscription?: UserSubscription
}

export interface UserBookmarks {
  userId: string
  businessIds: string[]
}

export interface UserSubscription {
  subscriptionId: string
  userId: string
  planId: string
  subscriptionStatus: string
  autoRenew: boolean
  startAt: string
  endAt?: string
}
