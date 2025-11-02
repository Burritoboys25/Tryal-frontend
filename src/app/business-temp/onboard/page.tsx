'use client'

import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import BusinessAuthHeader from '@/modules/auth/components/BusinessAuthHeader'
import { OnboardingContextProvider } from '@/modules/business-temp/components/OnboardingContextProvider'
import OnboardingSteps from '@/modules/business-temp/components/OnboardingSteps'
import { OnboardingStatus } from '@/modules/business-temp/types/OnboardingTypes'

const ONBOARDING_STATUSES: OnboardingStatus[] = [
  'ACCOUNT_CREATED',
  'BUSINESS_INFO_COMPLETED',
  'EXPERIENCES_ADDED',
  'SUBMITTED_FOR_REVIEW',
  'APPROVED',
  'REJECTED'
]

//get businessId from session after business login/authenticates
export default function BusinessOnboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [onboardingStatus, setOnboardingStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status !== 'loading' && !session) {
      router.push('/business-temp/login')
    }
  }, [session, status, router])

  useEffect(() => {
    const fetchStatus = async () => {
      if (!session?.businessId) return

      try {
        const res = await fetch(`/api/businesses/${session.businessId}`)
        if (!res.ok) throw new Error('Failed to fetch business info')

        const business = await res.json()
        const status: string = business.data.onboardingStatus

        if (status === 'APPROVED') {
          router.push('/business-temp/profile')
          return
        }

        if (!ONBOARDING_STATUSES.includes(status as OnboardingStatus)) {
          router.push('/business-temp/login')
          return
        }

        setOnboardingStatus(status)
      } catch (error) {
        console.error(error)
        router.push('/business-temp/login')
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
  }, [router, session])

  if (status === 'loading' || loading) return <p>Loading...</p>
  if (!session || onboardingStatus === null) return null

  return (
    <>
      <OnboardingContextProvider initialStatus={onboardingStatus} businessId={session.businessId}>
        <BusinessAuthHeader />
        <OnboardingSteps />
      </OnboardingContextProvider>
    </>
  )
}
