'use client'

import { Business } from '@/modules/explore/types/businessTypes'
import { Badge } from '@/shared/components/ui/base/badge'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { Button } from '@/shared/components/ui/base/button'
import { useState } from 'react'
import BookmarkedIcon from '@/shared/assets/icons/bookmarked.svg'
import UnBookMarkedIcon from '@/shared/assets/icons/unbookmarked.svg'

const BusinessInfo = ({ business }: { business: Business }) => {
  const { minCredits, maxCredits } = business
  const [bookmarked, setBookmarked] = useState(false)

  const handleToggleBookmark = () => {
    setBookmarked(prev => !prev)
    // Add logic to persist bookmark state (API call, etc.)
  }

  console.log('BusinessInfo received:', business)

  return (
    <div className="mr-auto flex w-full">
      <div className="flex w-full flex-row items-center gap-4">
        <div className="text-h2">{business.name}</div>
        <Badge className="bg-accent flex h-[3.1875rem] w-[11.8125rem] items-center gap-1">
          <span className="text-sub2 text-foreground flex items-center gap-[0.375rem]">
            <CreditIcon className="!h-[1.5rem] !w-[1.5rem]" />
            {minCredits === maxCredits ? `${minCredits}` : `${minCredits}-${maxCredits}`} credits
          </span>
        </Badge>
        <Button variant="outline" className="ml-auto cursor-pointer" onClick={handleToggleBookmark}>
          {bookmarked ? (
            <BookmarkedIcon className="h-[1.5rem] w-[1.5rem]" />
          ) : (
            <UnBookMarkedIcon className="h-[1.5rem] w-[1.5rem]" />
          )}
          <span className="text-button ml-1">Save experience</span>
        </Button>
      </div>
    </div>
  )
}

export default BusinessInfo
