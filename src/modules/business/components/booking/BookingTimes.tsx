import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import { Timeslot } from '@/shared/types/timeslotTypes'
import { formatTime } from '@/shared/utils/TimeFormatter'

const BookingTimes = ({
  timeslots,
  selectedTimeslot,
  setSelectedTimeslot
}: {
  timeslots: Timeslot[]
  selectedTimeslot: string | null
  setSelectedTimeslot: React.Dispatch<React.SetStateAction<string | null>>
}) => {

  return (
    <section>
      <div className="text-sub3 mb-[1rem]">Available Times</div>
      <div className="w-[29.625rem]">
        <div className="mb-[1.5rem] grid grid-cols-4 gap-3">
          {timeslots.map(time => (
            <Button
              key={time.timeslotId}
              variant={selectedTimeslot === time.timeslotId ? 'solid' : 'outline'}
              size="lg"
              style={{
                color: selectedTimeslot === time.timeslotId ? 'white' : 'oklch(0.65 0.22 35.34)',
              }}
              className="text-button text cursor-pointer rounded-full"
              onClick={() => setSelectedTimeslot(time.timeslotId)}
            >
              {formatTime(time.startTime)}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookingTimes
