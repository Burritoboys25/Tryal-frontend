import ReferralForm from '@/modules/waitlist/components/ReferralForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import { Suspense } from 'react'

export default function ThankYouPage() {
  return (
    <ViewLayout type={"partner"}>
      <Suspense fallback={<p className="py-20 text-center">Loading...</p>}>
        <ReferralForm />
      </Suspense>
    </ViewLayout>
  )
}
