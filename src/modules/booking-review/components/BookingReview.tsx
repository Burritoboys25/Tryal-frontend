import { Experience } from '@/shared/types/experienceTypes'
import { Timeslot } from '@/shared/types/timeslotTypes'
import React from 'react'

interface BookingDetail {
  experience: Experience
  timeslot: Timeslot
}

interface BookingReviewProps {
  bookingDetail: BookingDetail | null
}

const BookingReview: React.FC<BookingReviewProps> = ({ bookingDetail }) => {
  if (!bookingDetail) {
    return <div>No booking selected</div>
  }

  const { experience, timeslot } = bookingDetail

  return (
    <div>
      <h2>{experience.experienceName}</h2>
      <p>Timeslot: {timeslot.startTime} on {timeslot.timeslotDate}</p>
    </div>
  )
}

export default BookingReview