'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link'
import ExperienceCards from './ExperienceCards'
import BookingFilters from './BookingFilters'
import BookingTimes from './BookingTimes'
import { Experience } from '@/shared/types/experienceTypes'
import { Timeslot } from '@/shared/types/timeslotTypes'
import { Button } from '@/shared/components/ui/base/button'

const BookingMain = ({ experiences }: { experiences: Experience[] }) => {
  // const [experiences, setExperiences] = useState<Experience[]>(experienceList)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [selectedTimeslot, setSelectedTimeslot] = useState<string | null>(null)
  const [timeslots, setTimeslots] = useState<Timeslot[]>([])

  const params = useParams();
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
      <BookingFilters />
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
          query: { businessId: businessId, timeslotId: selectedTimeslot },
        }}
        className="w-[29.625rem]"
      >
        <Button
          variant="solid"
          size="lg"
          className="bg-primary w-full rounded-full text-white"
          disabled={!selectedTimeslot}
        >
          Reserve booking
        </Button>
      </Link>
    </div>
  )
}

export default BookingMain
