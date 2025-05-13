import ReferralForm from '@/modules/waitlist/components/ReferralForm'
import { Suspense } from 'react'

export default function ThankYouPage() {
  return (
    <Suspense fallback={<p className="py-20 text-center">Loading...</p>}>
      <ReferralForm />
    </Suspense>
  )
}
