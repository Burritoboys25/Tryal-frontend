'use client'

import React from 'react'
import Image from 'next/image'
import businesses from 'src/shared/mock/business.json'
import experiences from 'src/shared/mock/experiences.json'
import categories from 'src/shared/mock/categories.json'
import experienceCategories from 'src/shared/mock/experience_categories.json'
import { Business, Experience, Category, ExperienceCategory } from 'src/shared/mock/MockTypes'
import { Button } from '@/shared/components/ui/base/button'
import BookmarkedIcon from '@/shared/assets/icons/bookmarked.svg'
import UnbookMarkedIcon from '@/shared/assets/icons/unbookmarked.svg'
import BcreditIcon from '@/shared/assets/icons/bcredit.svg'
import { Badge } from '@/shared/components/ui/base/badge'

// Helper to get categories for an experience
const getCategoriesForExp = (exp_id: string) => {
  const catIds = (experienceCategories as ExperienceCategory[])
    .filter(ec => ec.exp_id === exp_id)
    .map(ec => ec.cat_id)
  return (categories as Category[]).filter(cat => catIds.includes(cat.cat_id)).map(cat => cat.name)
}

// Helper to get categories for a business (aggregate all categories from its experiences)
const getCategoriesForBusiness = (business_id: string) => {
  // Find all experiences for this business
  const bizExps = (experiences as Experience[]).filter(exp => exp.business_id === business_id)
  // Collect all category names from those experiences
  const catNames = new Set<string>()
  bizExps.forEach(exp => {
    getCategoriesForExp(exp.exp_id).forEach(name => catNames.add(name))
  })
  return Array.from(catNames)
}

// Mock: join experiences with business and categories
const exploreData = (businesses as Business[]).map(business => {
  return {
    name: business.name,
    type: getCategoriesForBusiness(business.business_id),
    address: business.address,
    //This rating will be replaced with google api rating. We are not storing ratings.
    rating: business.rating,
    //Just hardcoding image right now.
    imageUrl: '/landing_page_img_1.png',
    credits: business.credits,
  }
})

const ExploreCard = ({
  name,
  type,
  address,
  rating,
  imageUrl,
  credits,
}: {
  name: string
  type: string[]
  address: string
  rating: number
  imageUrl?: string
  credits: number
}) => {
  const [bookmarked, setBookmarked] = React.useState(false)
  return (
    <div className="mb-4 flex h-[135px] w-full items-center rounded-xl bg-white p-4 shadow-md">
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
            <UnbookMarkedIcon className="h-6 w-6" />
          )}
        </Button>
        <Badge className="bg-badge-color flex h-[36px] w-[67px] items-center justify-start">
          <BcreditIcon className="!h-6 !w-6" />
          <span className="text-sub4 text-foreground ml-1">{credits ?? 0}</span>
        </Badge>
      </div>
    </div>
  )
}

const BusinessList: React.FC = () => (
  <div className="px-2">
    {exploreData.map((biz, idx) => (
      <ExploreCard key={idx} {...biz} />
    ))}
  </div>
)

export default BusinessList
