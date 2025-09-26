import ReferralForm from '@/modules/waitlist/components/ReferralForm'
import MainFooter from '@/shared/components/layout/MainFooter'
import Section from '@/shared/components/layout/Section'
import { Suspense } from 'react'

export default function ThankYouPage() {
  return (
    <>
      <Section
        id="thank-you"
        background="light-teal"
        className="flex justify-center pt-[5.0625rem] pb-[7.5rem]"
      >
        <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
          <ReferralForm />
        </Suspense>
      </Section>
      <div className="pt-12">
        <MainFooter />
      </div>
    </>
  )
}
