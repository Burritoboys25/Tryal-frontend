import ReferralForm from '@/modules/waitlist/components/ReferralForm'
// Need to readd section and main footer in
// import MainFooter from '@/shared/components/layout/MainFooter'
// import Section from '@/shared/components/layout/Section'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import { Suspense } from 'react'

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ email: string | undefined }>
}) {
  const email = (await searchParams).email
  return (
    <ViewLayout type={'partner'}>
      <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
        <section className="flex h-full flex-row items-center rounded-2xl bg-[#F5F5F5] px-[2rem] py-[2rem]">
          <div className="flex flex-2/5 items-center justify-center 2xl:flex-1/2">
            <ReferralForm email={email} />
          </div>
          <div className="flex-3/5 self-stretch rounded-2xl bg-[#D9D9D9] 2xl:flex-1/2"></div>
        </section>
      </Suspense>
    </ViewLayout>
  )
}
