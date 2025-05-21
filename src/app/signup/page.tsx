import React from 'react'
import SignupForm from '@/modules/auth/components/SignupForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import AuthHeader from '@/modules/auth/components/AuthHeader'

const SignupPage = () => {
  return (
    <ViewLayout header={<AuthHeader />}>
      <SignupForm />
    </ViewLayout>
  )
}

export default SignupPage
