import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/shared/hooks/useUser'

/**
 * Hook to redirect users based on their subscription status
 * @param requiresSubscription - If true, redirects to /select-plan if no subscription. If false, redirects to /change-plan if has subscription
 * @returns Object with userData, hasActiveSubscription, and isLoading state
 */
export const useSubscriptionRedirect = (requiresSubscription: boolean) => {
  const { userData } = useUser()
  const router = useRouter()

  const hasActiveSubscription = !!userData?.activeSubscription
  const isLoading = userData === null

  useEffect(() => {
    // Don't redirect while still loading user data
    if (isLoading) return

    if (requiresSubscription && !hasActiveSubscription) {
      router.replace('/select-plan')
    } else if (!requiresSubscription && hasActiveSubscription) {
      router.replace('/change-plan')
    }
  }, [requiresSubscription, hasActiveSubscription, isLoading, router])

  return {
    userData,
    hasActiveSubscription,
    isLoading,
    shouldRender: isLoading
      ? false
      : requiresSubscription
        ? hasActiveSubscription
        : !hasActiveSubscription,
  }
}
