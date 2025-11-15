import React from 'react'
import UserLoginForm from '@/modules/auth/components/UserLoginForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import AuthHeader from '@/modules/auth/components/AuthHeader'

const LoginPage = () => {
  return (
    <ViewLayout header={<AuthHeader />}>
      <UserLoginForm />
    </ViewLayout>
  )
}

export default LoginPage
