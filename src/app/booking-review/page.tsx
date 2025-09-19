import BookingReview from '@/modules/booking-review/components/BookingReview'
import { getBusinessExperiences, getBusinessById } from '@/modules/business/services/business'
import Container from '@/shared/components/layout/Container'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import React from 'react'
import { Experience } from '@/shared/types/experienceTypes'
import { Timeslot } from '@/shared/types/timeslotTypes'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/base/button'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  searchParams: Promise<{ [key: string]: string }>
}

interface BookingDetail {
  experience: Experience
  timeslot: Timeslot
}

const page = async ({ searchParams }: PageProps) => {
  const sp = await searchParams
  const businessId = sp.businessId ?? ''
  const timeslotId = sp.timeslotId ?? ''
  const party = sp.party ?? ''

  const business = await getBusinessById(businessId)
  const experiences = await getBusinessExperiences(businessId)

  // find matching experience & timeslot
  const bookingDetail: BookingDetail | null = (() => {
    for (const exp of experiences) {
      const slot = exp.timeslots?.find(t => t.timeslotId === timeslotId)
      if (slot) return { experience: exp, timeslot: slot }
    }
    return null
  })()

  return (
    <ViewLayout type="default">
      <Container>
        <div className="mt-12 min-h-[40rem] space-y-8">
          <Link href={`/business/${businessId}`}>
            <Button
              type="button"
              variant={'outline'}
              className="cursor-pointer border-2 px-4 py-2 hover:bg-[#FADDD5]"
            >
              <ArrowLeft />
              <span className="text-button ml-1">Back</span>
            </Button>
          </Link>
          <div className='mt-12'>
            <BookingReview bookingDetail={bookingDetail} party={party} />
          </div>

        </div>
      </Container>
    </ViewLayout>
  )
}

export default page
