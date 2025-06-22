'use client'

import React from 'react'
import Image from 'next/image'
import { Business } from '@/modules/explore/types/businessTypes'
import { Button } from '@/shared/components/ui/base/button'
import BookmarkedIcon from '@/shared/assets/icons/bookmarked.svg'
import UnBookMarkedIcon from '@/shared/assets/icons/unbookmarked.svg'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { Badge } from '@/shared/components/ui/base/badge'
import { StarDisplay } from '@/shared/components/ui/base/rating'

const ExploreCard = ({
  name,
  type,
  address,
  rating = 0,
  imageUrl = '/landing_page_img_1.png',
  minCredits,
  maxCredits,
  businessId,
  selected,
  onSelect,
  onHover,
  onHoverEnd,
  bookmarked,
  onToggleBookmark,
}: {
  name: string
  type: string[]
  address: string
  rating?: number
  imageUrl?: string
  minCredits?: number
  maxCredits?: number
  businessId: string
  hovered: boolean
  onSelect: (id: string) => void
  selected: boolean
  onHover: () => void
  onHoverEnd: () => void
  bookmarked: boolean
  onToggleBookmark: () => void
}) => {
  return (
    <div
      className={`mb-4 flex h-[135px] w-full items-center rounded-xl border-2 p-4 shadow-md transition-all duration-300 hover:cursor-pointer ${
        selected ? 'border-primary font-bold' : 'hover:bg-muted/50 border-transparent bg-white'
      } `}
      onClick={() => onSelect(businessId)} // when clicked sends up the business_id to the parent
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      {/* Business image, full height on the left */}
      <Image
        src={imageUrl || '/default-business.png'}
        alt={name + ' business'}
        width={130}
        height={135}
        className="mr-5 h-full flex-shrink-0 rounded-lg bg-gray-200 object-cover"
      />{' '}
      {/* Business info stacked vertically */}
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <h3 className="text-sub3 mb-0.5 truncate">{name}</h3>
        <div className="text-caption2 mb-0.5 truncate">{type.join(' | ')}</div>
        <div className="text-body2 mb-0.5 truncate">{address}</div>
        <div className="flex items-center gap-2">
          <StarDisplay rating={rating} size={16} />
        </div>
      </div>
      <div className="ml-auto flex h-full flex-col items-center justify-between p-0">
        <Button
          variant="link"
          size="icon"
          className="ml-auto cursor-pointer p-0"
          onClick={e => {
            console.log('Bookmark clicked for business:', businessId)
            e.stopPropagation() // Prevents card click event
            onToggleBookmark()
          }}
        >
          {bookmarked ? (
            <BookmarkedIcon className="h-6 w-6" />
          ) : (
            <UnBookMarkedIcon className="h-6 w-6" />
          )}
        </Button>
        <Badge className="bg-accent flex h-[36px] w-[93px] items-center">
          <span className="text-sub4 text-foreground flex items-center gap-1.5">
            <CreditIcon className="!h-6 !w-6" />
            {minCredits === maxCredits ? `${minCredits}` : `${minCredits}-${maxCredits}`}
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
  hoveredId: string | null
  onHover: (id: string | null) => void
  bookmarkedIds: string[]
  onToggleBookmark: (business_id: string) => void
}> = ({ items, onSelect, selectedId, hoveredId, onHover, bookmarkedIds, onToggleBookmark }) => (
  <div className="px-2">
    {items.map(item => (
      <ExploreCard
        key={item.businessId}
        {...item}
        imageUrl={'/landing_page_img_1.png'}
        // flatten and remove display unique types that a business might have
        type={[...new Set(item.categories.map(c => c.split('&')[0]))]}
        selected={selectedId === item.businessId}
        onSelect={onSelect}
        hovered={hoveredId === item.businessId}
        onHover={() => onHover(item.businessId)}
        onHoverEnd={() => onHover(null)}
        bookmarked={bookmarkedIds.includes(item.businessId)}
        onToggleBookmark={() => onToggleBookmark(item.businessId)}
      />
    ))}
  </div>
)

export default BusinessCards
