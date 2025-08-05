import React from 'react'
import ExperienceCards from './ExperienceCards'
import BookingFilters from './BookingFilters'

const BookingMain = () => {
  return (
    <>
      <div className="mb-12">
        <BookingFilters />
      </div>
      <ExperienceCards />
    </>
  )
}

export default BookingMain
