import ViewLayout from '@/shared/components/layout/ViewLayout'
import PartnerWaitlist from '@/modules/waitlist/components/PartnerWaitlist'
import Section from '@/shared/components/layout/Section'
import MainFooter from '@/shared/components/layout/MainFooter'

const BecomePartnerForm = () => {
  return (
    <>
      <Section
        className="mx-6 my-6 flex h-[calc(100dvh-3rem)] flex-row items-center rounded-2xl px-6 py-6"
        background="white"
        full
      >
        <div className="flex flex-2/5 items-center justify-center 2xl:flex-1/2">
          <PartnerWaitlist />
        </div>
        <div className="flex-3/5 self-stretch rounded-2xl bg-[#D9D9D9] 2xl:flex-1/2"></div>
      </Section>
      <MainFooter />
    </>
  )
}

export default BecomePartnerForm
