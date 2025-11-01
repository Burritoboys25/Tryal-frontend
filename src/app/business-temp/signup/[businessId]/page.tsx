import React from 'react'
import BusinessAuthHeader from '@/modules/auth/business/components/BusinessAuthHeader'
import BusinessSignupForm from '@/modules/auth/business/components/BusinessSignupForm'

export default async function BusinessSignupPage(props: {
  params: Promise<{ businessId: string }>
}) {
  const { businessId } = await props.params

  return (
    <>
      <BusinessAuthHeader />
      <BusinessSignupForm businessId={businessId} />
    </>
  )
}
