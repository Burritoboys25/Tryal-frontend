import { Experience } from '@/shared/types/experienceTypes'
import { Timeslot } from '@/shared/types/timeslotTypes'
import { formatDate, formatTime } from '@/shared/utils/TimeFormatter'
import React from 'react'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { Button } from '@/shared/components/ui/base/button'

interface BookingDetail {
  experience: Experience
  timeslot: Timeslot
}

interface BookingReviewProps {
  bookingDetail: BookingDetail | null
  party: string
}

const BookingReview: React.FC<BookingReviewProps> = ({ bookingDetail, party }) => {
  if (!bookingDetail) {
    return <div>No booking selected</div>
  }

  const { experience, timeslot } = bookingDetail

  return (
    <section className="flex flex-col w-[370px] mx-auto gap-[2rem]">

      <div className="flex gap-[2rem]">
        <div className="h-[132px] w-[160px] bg-gray-300"></div>
        <div className="flex flex-col justify-between">
          <h2>{experience.experienceName}</h2>
          <div className="flex gap-2">
            <PersonIcon /> <p>{party}</p>
          </div>
          <div className="flex gap-2">
            <CalendarIcon />
            <p>{formatDate(timeslot.timeslotDate)}</p>
          </div>
          <div className="flex gap-2">
            <ClockIcon />
            <p> {formatTime(timeslot.startTime)}</p>
          </div>
        </div>
      </div>

      {/* credits */}
      <div className="mx-auto flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
        <CreditIcon />
        <p className="text-body1">{experience.creditPrice} credits</p>
      </div>

      {/* invite friends */}
      <div className="flex items-center justify-between">
        <p>Want to split credits?</p>
        <Button
          type="button"
          variant={'outline'}
          className="cursor-pointer border-2 px-4 py-2 hover:bg-[#FADDD5]"
        >
          Invite Friends
        </Button>
      </div>

      <Button
        variant="solid"
        size="lg"
        className="bg-primary w-full cursor-pointer rounded-full text-white"
      >
        Confirm booking
      </Button>
    </section>
  )
}

export default BookingReview
