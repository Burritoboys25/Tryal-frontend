'use client'

import { Business } from '@/modules/explore/types/businessTypes'

type BusinessInfoProps = {
  business: Business
}

const BusinessInfo = ({ business }: BusinessInfoProps) => {
  return (
    <div className="mr-auto">
      <h1 className="mb-4 text-4xl font-bold">{business.name}</h1>
      <p className="text-lg">{business.address}</p>
      <div className="mt-2 text-base">Categories: {business.categories.join(', ')}</div>
      <div className="mt-2 text-base">Skill Levels: {business.skillLevels.join(', ')}</div>
      <div className="mt-2 text-base">
        Credits: {business.minCredits} - {business.maxCredits}
      </div>
      {/* Add more content or components as needed */}
    </div>
  )
}

export default BusinessInfo
