import ReferralForm from '@/modules/waitlist/components/ReferralForm'
import MainFooter from '@/shared/components/layout/MainFooter'
import Section from '@/shared/components/layout/Section'
import { Suspense } from 'react'

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ email: string | undefined }>
}) {
  const email = (await searchParams).email
  return (
    <>
      <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
        <Section 
          className="m-6 p-6 h-[calc(100dvh-3rem)] flex flex-row items-center rounded-2xl"
          background='white'
          full
        >
          <div className="flex flex-2/5 items-center justify-center 2xl:flex-1/2">
            <ReferralForm email={email} />
          </div>
          <div className="flex-3/5 self-stretch rounded-2xl bg-[#D9D9D9] 2xl:flex-1/2"></div>
        </Section>
      </Suspense>
      <MainFooter />
    </>

  )
}