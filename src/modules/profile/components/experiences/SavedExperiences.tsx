import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import { StarDisplay } from '@/shared/components/ui/base/rating'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { SavedExperienceType } from '../../types/ExperienceTypes'

type Props = {
  data: SavedExperienceType[]
}

const ExperienceCard = (data: SavedExperienceType) => {
  return (
    <div className="flex h-[8.625rem] cursor-pointer gap-7 rounded-md border border-[#CBCBCB] px-5 py-3">
      <div className="h-[6.875rem] w-[8.313rem] rounded-md bg-gray-300"></div>

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-[1rem] leading-5 font-bold">{data.name}</h3>
        <div className="flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
          <CreditIcon />
          <p className="text-body1">{data.price_credits} credits</p>
        </div>
        <div className="mb-1">
          <StarDisplay rating={data.rating} size={16} />
        </div>
      </div>

      <Button type="button" variant={'solid'} className="cursor-pointer px-6 py-2">
        <span className="text-button">Book now</span>
      </Button>
    </div>
  )
}

const SavedExperiences = ({ data }: Props) => {
  return (
    <>
      {data.map(card => (
        <ExperienceCard key={card.user_bookmarks_id} {...card} />
      ))}
    </>
  )
}

export default SavedExperiences
