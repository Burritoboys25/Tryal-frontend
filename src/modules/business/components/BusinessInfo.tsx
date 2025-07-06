'use client'

import { Business } from '@/modules/explore/types/businessTypes'

type BusinessInfoProps = {
  business: Business
}

const BusinessInfo = ({ business }: BusinessInfoProps) => {
  console.log('BusinessInfo received:', business)

  return (
    <div className="mr-auto">
      <div className="text-h2">{business.name}</div>
      <div className="text-h3 text-gray-500">{business.maxCredits} credits</div>
    </div>
  )
}

export default BusinessInfo
