import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import PartnerWaitlist from '@/modules/waitlist/components/PartnerWaitlist'

const BecomePartnerForm = () => {
  return (
    <ViewLayout type={'partner'}>
      <section className="h-full flex flex-row  items-center rounded-2xl bg-[#F5F5F5] py-[2rem] px-[2rem]">
        <div className='2xl:flex-1/2 flex-2/5 flex justify-center items-center '>
          <PartnerWaitlist />
        </div>
        <div className='bg-[#D9D9D9] 2xl:flex-1/2 flex-3/5 self-stretch rounded-2xl'>

        </div>
      </section>
    </ViewLayout>
  )
}

export default BecomePartnerForm
