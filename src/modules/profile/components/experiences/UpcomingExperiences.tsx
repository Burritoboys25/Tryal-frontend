import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import { ExperienceType } from '../../types/ExperienceTypes'
import { formatDate, formatTime } from '../../utils/TimeFormatter'
import Image from 'next/image'
import DefaultImage from '../../../../../public/default_experience_image.png'

const ExperienceCard = (data: ExperienceType) => {
  return (
    <div className="flex min-h-[8.625rem] cursor-pointer gap-7 rounded-md border border-[#CBCBCB] px-5 py-3">
      <div>
        <Image
          src={DefaultImage}
          alt="Business Photo"
          // width={133}
          // height={110}
          // remove background color when we have a default pic --> currently using as placeholder
          className="rounded-md bg-gray-300"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-[1rem] leading-5 font-bold">{data.businessName}</h3>
        <div className="flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
          <CreditIcon />
          <p className="text-body1">{data.creditPrice} credits</p>
        </div>
        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <PersonIcon />
            <p className="text-body1">{data.party}</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <p className="text-body1">{formatDate(data.timeslotDate)}</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p className="text-body1">{formatTime(data.startTime)}</p>
          </div>
        </div>
      </div>

      <Button
        type="button"
        variant={'outline'}
        className="cursor-pointer border-2 px-6 py-2 hover:bg-[#FADDD5]"
      >
        <span className="text-button">Get Directions</span>
      </Button>
    </div>
  )
}

const UpcomingExperiences: React.FC<{
  items: ExperienceType[]
}> = ({ items }) => {
  return (
    <>
      {Array.isArray(items) && items.map(card => <ExperienceCard key={card.bookingId} {...card} />)}
    </>
  )
}

export default UpcomingExperiences
