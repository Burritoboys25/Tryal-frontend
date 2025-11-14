import ReferralForm from '@/modules/waitlist/components/ReferralForm'
import MainFooter from '@/shared/components/layout/MainFooter'
import Section from '@/shared/components/layout/Section'
import { Suspense } from 'react'
import Image from 'next/image'

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
          className="m-6 flex h-[calc(100dvh-3rem)] flex-col-reverse items-center gap-8 rounded-2xl p-4 md:flex-row"
          background="white"
          full
        >
          <div className="flex flex-2/5 items-center justify-center 2xl:flex-1/2">
            <ReferralForm email={email} />
          </div>
          <div className="relative flex-3/5 self-stretch overflow-hidden rounded-2xl 2xl:flex-1/2">
            <Image src="/thank_you.png" alt="Thank you" fill className="object-cover" />
          </div>
        </Section>
      </Suspense>
      <MainFooter />
    </>
  )
}
