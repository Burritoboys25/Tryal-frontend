import { Experience } from '@/shared/types/experienceTypes'
import { Timeslot } from '@/shared/types/timeslotTypes'
import { formatDate, formatTime } from '@/shared/utils/TimeFormatter'
import React from 'react'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { Button } from '@/shared/components/ui/base/button'
import { Plus } from 'lucide-react'

interface BookingDetail {
  experience: Experience
  timeslot: Timeslot
}

interface BookingReviewProps {
  bookingDetail: BookingDetail | null
  businessName: string
  party: string
}

const BookingReview: React.FC<BookingReviewProps> = ({ bookingDetail, businessName, party }) => {
  if (!bookingDetail) {
    return <div>No booking selected</div>
  }

  const { experience, timeslot } = bookingDetail

  return (
    <section className="mx-auto flex w-[370px] flex-col gap-[2rem]">
      <div className="flex gap-[2rem]">
        <div className="h-[132px] w-[160px] rounded-xl bg-gray-300"></div>
        <div className="flex flex-col gap-2">
          {/* {businessName} - {experience.experienceName} */}
          <h2 className="text-[1.25rem] leading-[1.5rem] font-semibold">{businessName}</h2>
          <div className="text-body1 flex items-center gap-2">
            <PersonIcon /> <p>{party}</p>
          </div>
          <div className="text-body1 flex items-center gap-2">
            <CalendarIcon />
            <p>{formatDate(timeslot.timeslotDate)}</p>
          </div>
          <div className="text-body1 flex items-center gap-2">
            <ClockIcon />
            <p> {formatTime(timeslot.startTime)}</p>
          </div>
        </div>
      </div>

      {/* credits */}
      <div className="flex justify-end items-center gap-[2rem]">
        <div className='mx-auto'>
          <div className="flex items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-4 py-3">
            <CreditIcon />
            <p className="text-sub2 text-primary">{experience.creditPrice} credits</p>
          </div>
        </div>
        {/* TODO: Implement credit validaiton logic */}
        {/* <div>
          <p className='text-body1'>You need <span className='text-primary font-bold'>5</span> more credits</p>
          <Button
            type="button"
            variant={'text'}
            className="cursor-pointer px-6 py-2 hover:bg-[#FADDD5]"
          >
            <Plus color='black' />
            <span className='font-bold ml-2'>Add More</span>
          </Button>
        </div> */}
      </div>

      {/* invite friends */}
      <div className="flex items-center justify-between">
        <p className="text-sub4">Want to split credits?</p>
        <Button
          type="button"
          variant={'outline'}
          className="cursor-pointer border-2 px-6 py-2 hover:bg-[#FADDD5]"
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
