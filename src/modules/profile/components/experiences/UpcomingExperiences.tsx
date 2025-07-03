import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'

const UpcomingExperiences = () => {
  return (
    <div className="mt-2 flex h-[8.625rem] cursor-pointer gap-7 rounded-md border border-[#CBCBCB] px-5 py-3">
      <div className="h-[6.875rem] w-[8.313rem] rounded-md bg-gray-300"></div>

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-[1rem] leading-5 font-bold">Terra Studio</h3>
        <div className="flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
          <CreditIcon />
          <p className="text-body1">35 credits</p>
        </div>
        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <PersonIcon />
            <p className="text-body1">2</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <p className="text-body1">March 8, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p className="text-body1">12:00 PM</p>
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

export default UpcomingExperiences
