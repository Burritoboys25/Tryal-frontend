import React from 'react'
import UserLoginForm from '@/modules/auth/user/components/UserLoginForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import AuthHeader from '@/modules/auth/user/components/AuthHeader'

const LoginPage = () => {
  return (
    <ViewLayout header={<AuthHeader />}>
      <UserLoginForm />
    </ViewLayout>
  )
}

export default LoginPage
