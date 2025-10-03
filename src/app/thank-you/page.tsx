'use client'

import ReferralForm from '@/modules/waitlist/components/ReferralForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import { useSearchParams } from 'next/navigation'

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  return (
    <ViewLayout type={'partner'}>
      <section className="h-full flex flex-row items-center rounded-2xl bg-[#F5F5F5] py-[2rem] px-[2rem]">
        <div className='2xl:flex-1/2 flex-2/5 flex justify-center items-center '>
          <ReferralForm email={email} />
        </div>
        <div className='bg-[#D9D9D9] 2xl:flex-1/2 flex-3/5 self-stretch rounded-2xl'>

        </div>
      </section>
    </ViewLayout>
  )
}
