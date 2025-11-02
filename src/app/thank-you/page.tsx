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
          className="m-2 flex flex-col-reverse items-center rounded-2xl px-3 py-4 xl:m-4 xl:flex-row xl:justify-between xl:px-4 xl:py-4 2xl:m-8 2xl:gap-10 2xl:px-6 2xl:py-6"
          background="white"
          full
        >
          <div className="flex items-center xl:flex-1 2xl:justify-center">
            <ReferralForm email={email} />
          </div>
          <div className="relative h-[22.688rem] w-[18.75rem] overflow-hidden rounded-2xl max-sm:mb-5 md:h-[29rem] md:w-[30.625rem] xl:my-2 xl:h-[55.5rem] xl:min-w-[46rem] xl:flex-1 2xl:h-[58.125rem] 2xl:min-w-[48.188rem]">
            <Image src="/thank_you.png" alt="Thank you" fill className="object-cover" />
          </div>
        </Section>
      </Suspense>
      <MainFooter />
    </>
  )
}
