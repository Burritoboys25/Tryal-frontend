import React from 'react'
import Container from '@/shared/components/layout/Container'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/button'
import { useState } from 'react'

const SignupConfirmPage = () => {
  return (
    <>
      {/* Simple navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-white">
        <div className="flex items-center justify-between px-4 py-4 md:px-12">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Tryal
          </Link>
        </div>
      </nav>
      <section className="-mt-[72px] flex min-h-screen items-center justify-center ">
        {/* Signup form */}
        <Container className="text-center flex flex-col justify-center items-center max-w-[680px]">
          <div className="mb-4 h-[250px] w-full rounded-lg bg-gray-200" />

          <div className="space-y-4 w-full">
            <h1 className="text-h3">Welcome to Tryal! Let the adventure begin!</h1>
            <p className="text-muted-foreground text-body2">
              Get ready to discover and book unique activities that match your interests. Whether
              you&apos;re seeking thrilling adventures or hidden gems, we&apos; got something
              special for you!
            </p>
          </div>

          <Button type="submit" className="mt-8 w-[270px] h-[40px] rounded-full">
            Start Exploring Now
          </Button>
        </Container>
      </section>
    </>
  )
}

export default SignupConfirmPage
