import React from 'react'
import ExperiencePage from '@/modules/profile/components/experiences/ExperiencePage'

const Page = async () => {
  // TODO: get userid from session -- currently hardcoded
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/profile/${userId}/bookings`)
  const bookingsData = await data.json()

  return (
    <div className="">
      <h1 className="text-h3">Experiences</h1>
      <p className="text-body2 mt-1">View and/or manage your experiences.</p>

      <ExperiencePage bookings={bookingsData} />
    </div>
  )
}

export default Page