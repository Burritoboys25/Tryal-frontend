'use client'

import React from 'react'
import Image from 'next/image'
import { Business } from 'src/shared/mock/MockTypes'
import { getCategoriesForBusiness } from '../libs/CategoryMapper'
import { Button } from '@/shared/components/ui/base/button'
import BookmarkedIcon from '@/shared/assets/icons/bookmarked.svg'
import UnBookMarkedIcon from '@/shared/assets/icons/unbookmarked.svg'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { Badge } from '@/shared/components/ui/base/badge'

const ExploreCard = ({
  name,
  type,
  address,
  rating,
  imageUrl,
  credits,
  business_id,
  selected,
  onSelect,
}: {
  name: string
  type: string[]
  address: string
  rating: number
  imageUrl?: string
  credits: number
  business_id: string
  onSelect: (id: string) => void
  selected: boolean
}) => {
  const [bookmarked, setBookmarked] = React.useState(false)
  return (
    <div
      className={`mb-4 flex h-[135px] w-full items-center rounded-xl p-4 shadow-md transition-colors duration-300 hover:cursor-pointer ${
        selected ? 'bg-accent hover:bg-accent/80 font-bold' : 'hover:bg-muted/50 bg-white'
      } `}
      onClick={() => onSelect(business_id)} // when clicked sends up the business_id to the parent
    >
      {/* Business image, full height on the left */}
      <Image
        src={imageUrl || '/default-business.png'}
        alt={name + ' business'}
        width={130}
        height={135}
        className="mr-5 h-full flex-shrink-0 rounded-lg bg-gray-200 object-cover"
      />
      {/* Business info stacked vertically */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="text-sub3 mb-1 truncate">{name}</h3>
        <div className="text-caption1 mb-1 truncate">{type.join(' | ')}</div>
        <div className="text-body2 mb-1 truncate">{address}</div>
        <div className="text-sm font-semibold text-yellow-600">Rating: {rating.toFixed(1)}</div>
      </div>
      <div className="ml-auto flex h-full flex-col items-center justify-between p-0">
        <Button
          variant="link"
          size="icon"
          className="ml-auto cursor-pointer p-0"
          onClick={() => setBookmarked(b => !b)}
        >
          {bookmarked ? (
            <BookmarkedIcon className="h-6 w-6" />
          ) : (
            <UnBookMarkedIcon className="h-6 w-6" />
          )}
        </Button>
        <Badge className="bg-accent flex h-[36px] w-[67px] items-center justify-start">
          <span className="text-sub4 text-foreground ml-1 flex items-center gap-1.5">
            <CreditIcon className="!h-6 !w-6" />
            {credits ?? 0}
          </span>
        </Badge>
      </div>
    </div>
  )
}

const BusinessCards: React.FC<{
  items: Business[]
  onSelect: (id: string) => void
  selectedId: string
}> = ({ items, onSelect, selectedId }) => (
  <div className="px-2">
    {items.map(item => (
      <ExploreCard
        key={item.business_id}
        {...item}
        imageUrl={item.image_url}
        type={getCategoriesForBusiness(item.business_id)}
        selected={selectedId === item.business_id}
        onSelect={onSelect}
      />
    ))}
  </div>
)

export default BusinessCards
