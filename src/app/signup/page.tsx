import React from 'react'
import UserSignupForm from '@/modules/auth/components/UserSignupForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import AuthHeader from '@/modules/auth/components/AuthHeader'

const SignupPage = () => {
  return (
    <ViewLayout header={<AuthHeader />}>
      <UserSignupForm />
    </ViewLayout>
  )
}

export default SignupPage
