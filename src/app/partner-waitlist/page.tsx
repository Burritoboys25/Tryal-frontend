import ViewLayout from '@/shared/components/layout/ViewLayout'
import PartnerWaitlist from '@/modules/waitlist/components/PartnerWaitlist'
import Image from 'next/image'

const BecomePartnerForm = () => {
  return (
    <ViewLayout type={'partner'}>
      <section className="flex h-full flex-row items-center rounded-2xl bg-[#F5F5F5] px-[1rem] py-[1rem]">
        <div className="flex flex-2/5 items-center justify-center 2xl:flex-1/2">
          <PartnerWaitlist />
        </div>
        <div className="relative flex-3/5 self-stretch overflow-hidden rounded-2xl bg-[#D9D9D9] 2xl:flex-1/2">
          <Image src="/thank_you.png" alt="Thank you" fill className="object-cover" />
        </div>
      </section>
    </ViewLayout>
  )
}

export default BecomePartnerForm
