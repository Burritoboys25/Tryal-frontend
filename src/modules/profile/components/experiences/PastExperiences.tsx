import React from 'react'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'

const PastExperiences = () => {
  return (
    <div className="mt-2 flex h-[8.625rem] cursor-pointer gap-7 rounded-md border border-[#CBCBCB] px-5 py-3">
      <div className="h-[6.875rem] w-[8.313rem] rounded-md bg-gray-300"></div>

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-[1rem] leading-5 font-bold">The Flavor Lab</h3>
        <div className="flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
          <CreditIcon />
          <p className="text-body1">50 credits used</p>
        </div>
        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <PersonIcon />
            <p className="text-body1">2</p>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon />
            <p className="text-body1">February 20, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <p className="text-body1">5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastExperiences
