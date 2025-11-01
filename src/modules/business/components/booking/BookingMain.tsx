'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ExperienceCards from './ExperienceCards'
import BookingFilters from './BookingFilters'
import BookingTimes from './BookingTimes'
import { Experience } from '@/shared/types/experienceTypes'
import { Timeslot } from '@/shared/types/timeslotTypes'
import { Button } from '@/shared/components/ui/base/button'

const BookingMain = ({ experiences }: { experiences: Experience[] }) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null)
  const [timeslots, setTimeslots] = useState<Timeslot[]>([])

  const [selectedPeople, setSelectedPeople] = useState(1)
  const [date, setDate] = useState<Date>(new Date())
  const [month, setMonth] = useState<Date | undefined>(undefined)

  const params = useParams()
  const businessId = params.businessId

  useEffect(() => {
    const activeTimeslots =
      experiences.find(item => item.experienceId === selectedCard)?.timeslots ?? []

    const sortedTimeslots = [...activeTimeslots].sort((a, b) =>
      a.startTime.localeCompare(b.startTime),
    )
    setTimeslots(sortedTimeslots)
  }, [selectedCard, experiences])

  return (
    <div className="flex flex-col gap-[2.25rem]">
      <BookingFilters
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
        date={date}
        setDate={setDate}
        month={month}
        setMonth={setMonth}
      />
      <ExperienceCards
        experiences={experiences}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
      <BookingTimes
        timeslots={timeslots}
        selectedTimeslot={selectedTimeslot}
        setSelectedTimeslot={setSelectedTimeslot}
      />
      <Link
        href={{
          pathname: '/booking-review',
          query: { businessId: businessId, timeslotId: selectedTimeslot, party: selectedPeople },
        }}
        className="w-[29.625rem]"
      >
        <Button
          variant="solid"
          className="bg-primary w-full cursor-pointer rounded-full text-white"
          disabled={!selectedTimeslot}
        >
          Reserve booking
        </Button>
      </Link>
    </div>
  )
}

export default BookingMain
