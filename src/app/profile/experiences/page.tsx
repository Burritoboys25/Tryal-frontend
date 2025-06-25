'use client'

import React, { useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import { StarDisplay } from '@/shared/components/ui/base/rating'

const Page = () => {
  const [tab, setTab] = useState('upcoming')

  const renderActiveTab = () => {
    switch (tab) {
      case 'upcoming':
        return <UpcomingExperiences />
      case 'saved':
        return <SavedExperiences />
      case 'past':
        return <PastExperiences />
      default:
        return <UpcomingExperiences />
    }
  }

  return (
    <div className="">
      <h1 className="text-h3">Experiences</h1>
      <p className="text-body2 mt-1">View and/or manage your experiences.</p>

      <div>
        {/* Experience Tabs */}
        <div className="flex gap-2.5 mt-2">
          <Button
            type="button"
            variant={'text'}
            name="upcoming"
            onClick={e => setTab(e.currentTarget.name)}
            className={`cursor-pointer rounded-none px-3 ${tab == 'upcoming' ? 'border-b-2 border-black' : 'hover:border-muted-foreground hover:border-b-2'}`}
          >
            {/* text-muted-foreground */}
            <span
              className={`text-button hover:text-foreground ${tab == 'upcoming' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Upcoming
            </span>
          </Button>
          <Button
            type="button"
            variant={'text'}
            name="saved"
            onClick={e => setTab(e.currentTarget.name)}
            className={`cursor-pointer rounded-none px-3 ${tab == 'saved' ? 'border-b-2 border-black' : 'hover:border-muted-foreground hover:border-b-2'}`}
          >
            <span
              className={`text-button hover:text-foreground ${tab == 'saved' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Saved
            </span>
          </Button>
          <Button
            type="button"
            variant={'text'}
            name="past"
            onClick={e => setTab(e.currentTarget.name)}
            className={`cursor-pointer rounded-none px-3 ${tab == 'past' ? 'border-b-2 border-black' : 'hover:border-muted-foreground hover:border-b-2'}`}
          >
            <span
              className={`text-button hover:text-foreground ${tab == 'past' ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              Past
            </span>
          </Button>
        </div>

        {/* Experience List Container */}
        <div className="flex flex-col gap-3">{renderActiveTab()}</div>
      </div>
    </div>
  )
}

export default Page

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

const SavedExperiences = () => {
  return (
    <div className="mt-2 flex h-[8.625rem] cursor-pointer gap-7 rounded-md border border-[#CBCBCB] px-5 py-3">
      <div className="h-[6.875rem] w-[8.313rem] rounded-md bg-gray-300"></div>

      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-[1rem] leading-5 font-bold">SoulScape Wellness</h3>
        <div className="flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
          <CreditIcon />
          <p className="text-body1">35 credits</p>
        </div>
        <div className="mb-1">
          <StarDisplay rating={4} size={16} />
        </div>
      </div>

      <Button type="button" variant={'solid'} className="cursor-pointer px-6 py-2">
        <span className="text-button">Book now</span>
      </Button>
    </div>
  )
}
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
