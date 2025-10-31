import PartnerWaitlist from '@/modules/waitlist/components/PartnerWaitlist'
import Section from '@/shared/components/layout/Section'
import MainFooter from '@/shared/components/layout/MainFooter'
import Image from 'next/image'

const BecomePartnerForm = () => {
  return (
    <>
      <Section
        className="m-2 flex flex-col-reverse items-center rounded-2xl px-4 py-6 xl:m-4 xl:flex-row xl:justify-between xl:p-8 2xl:m-8 2xl:gap-10 2xl:p-9"
        background="white"
        full
      >
        <div className="flex items-center xl:flex-1 2xl:justify-center">
          <PartnerWaitlist />
        </div>
        <div className="relative overflow-hidden h-[22.688rem] w-[18.75rem] rounded-2xl max-sm:mb-5 md:h-[29rem] md:w-[23.438rem] xl:my-2 xl:h-[55.5rem] xl:min-w-[46rem] xl:flex-1 2xl:h-[58.125rem] 2xl:min-w-[48.188rem]">
          <Image src="/thank_you.png"  alt="Thank you" fill={true} className="object-cover" />
        </div>
      </Section>
      <MainFooter />
    </>
  )
}

export default BecomePartnerForm
