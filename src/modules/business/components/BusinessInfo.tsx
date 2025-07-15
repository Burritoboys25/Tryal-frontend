'use client'

import { Business } from '@/modules/explore/types/businessTypes'
import { Badge } from '@/shared/components/ui/base/badge'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { Button } from '@/shared/components/ui/base/button'
import { useState } from 'react'
import Image from 'next/image'
import BookmarkedIcon from '@/shared/assets/icons/bookmarked.svg'
import UnBookMarkedIcon from '@/shared/assets/icons/unbookmarked.svg'
import { StarDisplay } from '@/shared/components/ui/base/rating'
import LocationOnIcon from '@/shared/assets/icons/location_on.svg'
import PhoneIcon from '@/shared/assets/icons/phone.svg'
import WebsiteIcon from '@/shared/assets/icons/website.svg'

const BusinessInfo = ({ business }: { business: Business }) => {
  const minCredits = business.minCredits
  const maxCredits = business.maxCredits
  const name = business.name
  const images = [
    '/mock_business_img_1.png',
    '/mock_business_img_2.png',
    '/landing_page_img_1.png',
    '/landing_page_img_2.png',
    '/landing_page_img_3.png',
  ]
  const categories = business.categories ?? []
  // const address = business.address ?? ''
  // const phone = business.phoneNumber ?? ''
  // const website = business.website ?? ''
  const rating = 4.5
  const [bookmarked, setBookmarked] = useState(false)

  const handleToggleBookmark = () => {
    setBookmarked(prev => !prev)
    // TODO: Implement Bookmark per user similar to explore page
  }

  console.log('Business info:', business)

  return (
    <div className="flex flex-col gap-4">
      {/* Header: Name, credits, bookmark */}
      <div className="flex w-full items-center">
        <div className="text-h2">{name}</div>
        <Badge className="bg-accent ml-6 flex h-[3.1875rem] w-[11.8125rem] items-center gap-1">
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

      {/* Main content grid: 2 columns, left is 1 big image, right is 2x2 grid of 4 images */}
      <div className="grid w-full grid-cols-2 gap-2">
        {/* Left: Large main image */}
        <div>
          <Image
            src={images[0] || '/default-business.png'}
            alt="Main"
            width={560}
            height={560}
            className="h-[560px] w-full rounded-lg object-cover"
          />
        </div>
        {/* Right: 2x2 grid of 4 images */}
        <div className="grid h-[560px] grid-cols-2 grid-rows-2 gap-2">
          {images.slice(1, 5).map((img: string, idx: number) => (
            <Image
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              width={270}
              height={270}
              className="h-full w-full rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
      {/* Categories Tags */}
      <div className="flex gap-4">
        {categories.map((category, idx) => (
          <Badge
            key={idx}
            className="bg-accent flex h-[38px] min-w-[126px] items-center gap-1 px-4"
          >
            <span className="text-sub4 text-foreground">{category}</span>
          </Badge>
        ))}
      </div>

      {/* Right: Business Info */}
      <div className="flex w-full flex-col gap-3.5">
        {/* Top row: Star and Business Info title aligned horizontally */}
        <div className="flex w-full flex-row items-center justify-between">
          <StarDisplay rating={rating} size={16} />
          <div className="w-[257px] text-left text-lg font-semibold">Business Info</div>
        </div>
        {/* Bottom row: Description and info rows aligned horizontally */}
        <div className="flex w-full flex-row items-start justify-between gap-x-8">
          <p className="text-sub4 text-foreground flex-1 pr-8">
            Discover the joy of pottery in a warm, welcoming studio where creativity meets clay. Our
            hands-on classes are perfect for beginners and experienced artists alike, offering
            guided instruction in wheel throwing and hand-building techniques. Whether you&apos;re
            looking to unwind, learn a new skill, or make something meaningful, our studio provides
            the perfect space to create.
          </p>
          <div className="text-body2 flex w-[257px] flex-shrink-0 flex-col gap-3.5">
            <div className="flex items-center gap-2">
              <LocationOnIcon />
              <span>{business.address ?? ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon />
              <span>{business.phoneNumber ?? ''}</span>
            </div>
            <div className="flex items-center gap-2">
              <WebsiteIcon />
              <a
                href={business.website ?? ''}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                {business.website ?? ''}
              </a>
            </div>
            {/* Instagram row placeholder */}
            {/* <div className="flex items-center gap-2">
              <span className="material-icons text-base">photo_camera</span>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                @{instagram?.replace('https://instagram.com/', '')}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessInfo
