import React from 'react'
import ViewEditPage from '@/modules/profile/components/view-edit/ViewEditPage'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/base/button'
import { ArrowLeft } from 'lucide-react'
import API_BASE_URL from '@/shared/lib/apiBaseUrl'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // TODO: get userid from session -- currently hardcoded
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'

  const { id } = await params
  // TODO: call backend get Booking details by booking id
  const getUserBookings = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/profile/${userId}/bookings`, {
        cache: 'no-store', // disables static caching
      })
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
  const bookings = await getUserBookings();
  const bookingDetail = bookings?.find((booking: { bookingId: string }) => booking.bookingId == id);

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

      <ViewEditPage {...bookingDetail} />
    </div>
  )
}

export default page
