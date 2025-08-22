import React from 'react'
import ViewEditPage from '@/modules/profile/components/view-edit/ViewEditPage'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/base/button'
import { ArrowLeft } from 'lucide-react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // TODO: Fetch Experience details from backend
  const { id } = await params
  // TODO: call backend get Booking details by booking id

  // DUMMY DATA
  const bookingDetails = {
    userId: '272d2788-ee1e-4056-ae09-4829aff17909',
    bookingId: '4e934f72-cc98-4eaa-9f55-715a7bcb1020',
    timeslotId: 'b080741a-9d41-47d4-a4c7-7d29eb4b3240',
    experienceId: '1676081d-f345-4d0e-af47-57abfec8a658',
    bookingStatus: 'BOOKED',
    businessName: 'Tryal Experience',
    address: '123 Tryal Way, Austin, TX 78701',
    phoneNumber: '(541) 456-4356',
    website: 'terrastudios.com',
    creditPrice: 2,
    //! Business socials are not stored in database -- are we getting it from CMS??
    instagramHandle: '@terrastudio',
    party: 2,
    timeslotDate: '2025-03-08',
    startTime: '12:00:00',
  }

  return (
    <div>
      <Link href={'/profile/experiences'}>
        <Button
          type="button"
          variant={'outline'}
          className="cursor-pointer border-2 px-4 py-2 hover:bg-[#FADDD5]"
        >
          <ArrowLeft />
          <span className="text-button ml-1">Back</span>
        </Button>
      </Link>

      <ViewEditPage {...bookingDetails} />
    </div>
  )
}

export default page
