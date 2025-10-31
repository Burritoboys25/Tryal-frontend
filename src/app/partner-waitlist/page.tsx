import PartnerWaitlist from '@/modules/waitlist/components/PartnerWaitlist'
import Section from '@/shared/components/layout/Section'
import MainFooter from '@/shared/components/layout/MainFooter'
import Image from 'next/image'

const BecomePartnerForm = () => {
  return (
    <>
      <Section
        className="m-6 flex h-[calc(100dvh-3rem)] flex-row items-center rounded-2xl p-4"
        background="white"
        full
      >
        <div className="flex flex-2/5 items-center justify-center 2xl:flex-1/2">
          <PartnerWaitlist />
        </div>
        <div className="relative flex-3/5 self-stretch overflow-hidden rounded-2xl 2xl:flex-1/2">
          <Image src="/thank_you.png" alt="Thank you" fill className="object-cover" />
        </div>
      </Section>
      <MainFooter />
    </>
  )
}

export default BecomePartnerForm
