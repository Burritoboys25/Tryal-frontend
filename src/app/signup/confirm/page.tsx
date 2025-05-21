import React from 'react'
import Container from '@/shared/components/layout/Container'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import { Button } from '@/shared/components/ui/base/button'
import AuthHeader from '@/modules/auth/components/AuthHeader'

const SignupConfirmPage = () => {
  return (
      <ViewLayout header={<AuthHeader />}>
        <section className="-mt-[72px] flex min-h-screen items-center justify-center">
          {/* Signup form */}
          <Container className="flex max-w-[680px] flex-col items-center justify-center text-center">
            <div className="mb-4 h-[250px] w-full rounded-lg bg-gray-200" />

            <div className="w-full space-y-4">
              <h1 className="text-h3">Welcome to Tryal! Let the adventure begin!</h1>
              <p className="text-muted-foreground text-body2">
                Get ready to discover and book unique activities that match your interests. Whether
                you&apos;re seeking thrilling adventures or hidden gems, we&apos; got something
                special for you!
              </p>
            </div>

            <Button type="submit" className="mt-8 h-[40px] w-[270px] cursor-pointer rounded-full">
              Start Exploring Now
            </Button>
          </Container>
        </section>
      </ViewLayout>
  )
}

export default SignupConfirmPage
