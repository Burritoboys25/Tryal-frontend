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
          className="rounded-2xl m-2 px-4 py-6 xl:m-8 xl:p-8 2xl:gap-10 2xl:p-9 flex flex-col-reverse xl:flex-row items-center xl:justify-between"
          background='white'
          full
        >
          {/*  xl:flex-2/5 3xl:flex-1/2 */}
          <div className="flex items-center xl:justify-center xl:flex-1">
            <ReferralForm email={email} />
          </div>
          {/* xl:self-stretch xl:flex-3/5 3xl:flex-1/2 */}
          <div className="rounded-2xl bg-[#D9D9D9] max-sm:mb-5 w-[18.75rem] h-[22.688rem] md:w-[23.438rem] md:h-[29rem] xl:min-w-[46rem] xl:h-[55.5rem] xl:flex-1 xl:my-2 2xl:max-w-[48.188rem] 2xl:h-[58.125rem]"></div>
        </Section>
      </Suspense>
      <MainFooter />
    </>

  )
}