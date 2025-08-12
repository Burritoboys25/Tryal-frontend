import React, { useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'

const times = ['11:00 PM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM']

const BookingTimes = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section>
      <div className="text-sub3 mb-4">Available Times</div>
      <div className="w-[474px]">
        <div className="mb-6 grid grid-cols-4 gap-4">
          {times.map(time => (
            <Button
              key={time}
              variant={selected === time ? 'solid' : 'outline'}
              size="lg"
              style={{
                color: selected === time ? 'white' : 'oklch(0.65 0.22 35.34)',
              }}
              className="text-button text rounded-full"
              onClick={() => setSelected(time)}
            >
              {time}
            </Button>
          ))}
        </div>
        <Button
          variant="solid"
          size="lg"
          className="bg-primary w-full rounded-full text-white"
          disabled={!selected}
        >
          Reserve booking
        </Button>
      </div>
    </section>
  )
}

export default BookingTimes
