'use client'

import React, { useEffect, useState } from 'react'
import ExperienceCards from './ExperienceCards'
import BookingFilters from './BookingFilters'
import BookingTimes from './BookingTimes'
import { Experience } from '@/shared/types/experienceTypes'
import { getBusinessExperiences } from '@/modules/business/services/business'

const BookingMain = ({ businessId }: { businessId: string }) => {
  const [experiences, setExperiences] = useState<Experience[]>([])

  useEffect(() => {
    const fetchExperiences = async () => {
      const data = await getBusinessExperiences(businessId)
      setExperiences(data)
      console.log('Fetched experiences:', data)
    }
    fetchExperiences()
  }, [businessId])

  // We need to add and pass booking times down with experiences

  return (
    <div className="flex flex-col gap-[36px]">
      <BookingFilters />
      <ExperienceCards experiences={experiences} />
      <BookingTimes />
    </div>
  )
}

export default BookingMain
