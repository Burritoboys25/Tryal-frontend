import React from 'react'
import SimpleHeader from '@/shared/components/layout/SimpleHeader'
import BusinessSignupForm from '@/modules/auth/business/components/BusinessSignupForm'

export default async function BusinessSignupPage({ params }: { params: { businessId: string } }) {
  const { businessId } = await params

  return (
    <>
      <SimpleHeader />
      <BusinessSignupForm businessId={businessId} />
    </>
  )
}
