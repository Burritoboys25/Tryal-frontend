import React from 'react'
import LoginForm from '@/modules/auth/components/LoginForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import AuthHeader from '@/modules/auth/components/AuthHeader'

const LoginPage = () => {
  return (
    <ViewLayout header={<AuthHeader />}>
      <LoginForm />
    </ViewLayout>
  )
}

export default LoginPage
