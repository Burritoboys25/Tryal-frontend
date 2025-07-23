import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import { StarDisplay } from '@/shared/components/ui/base/rating'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { SavedExperienceType } from '../../types/ExperienceTypes'
import { Bookmark } from 'lucide-react'
import Image from 'next/image'
import DefaultImage from '../../../../../public/default_experience_image.png'

type Props = {
  data: SavedExperienceType[]
  handleBookmarkClick: (id: string) => void
}

type CardProps = {
  item: SavedExperienceType
  handleBookmarkClick: (id: string) => void
}

const ExperienceCard = ({ item, handleBookmarkClick }: CardProps) => {
  return (
    <div className="flex min-h-[8.625rem] gap-7 rounded-md border border-[#CBCBCB] px-5 py-3">
      <div>
        <Image
          src={DefaultImage}
          alt="Business Photo"
          // width={'auto'}
          // height={'auto'}
          // remove background color when we have a default pic --> currently using as placeholder
          className="rounded-md bg-gray-300"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-center gap-2">
          <h3 className="mb-1 text-[1rem] leading-5 font-bold">{item.businessName}</h3>
          <Bookmark
            color="#e4572e"
            fill={item.isBookmarked ? '#e4572e' : '#ffffff'}
            className="cursor-pointer"
            onClick={() => handleBookmarkClick(item.businessId)}
          />
        </div>
        {/*  */}
        <div className="mb-2 flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
          <CreditIcon />
          <p className="text-body1">{item.address}</p>
        </div>
        <div className="mb-2">
          <StarDisplay rating={5} size={16} />
        </div>
      </div>

      <Button type="button" variant={'solid'} className="cursor-pointer px-6 py-2">
        <span className="text-button">Book now</span>
      </Button>
    </div>
  )
}

const SavedExperiences = ({ data, handleBookmarkClick }: Props) => {
  return (
    <>
      {data.map(card => (
        <ExperienceCard
          key={card.businessId}
          item={card}
          handleBookmarkClick={handleBookmarkClick}
        />
      ))}
    </>
  )
}

export default SavedExperiences
