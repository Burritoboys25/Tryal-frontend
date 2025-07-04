'use client'

import React, { useState } from 'react'
import ExperienceTabs from './ExperienceTabs'
import UpcomingExperiences from './UpcomingExperiences'
import SavedExperiences from './SavedExperiences'
import PastExperiences from './PastExperiences'

const upcomingExperiences = [
  {
    bookingId: '',
    userId: '',
    exp_schedule_id: '',
    // upcoming experiences will have a 'booked' status
    booking_status: '', 
    exp_id: '',
    name: '',
    image_url: '',
    address: '',
    price_credits: '',
    party: '',
    start_time: '',
  },
]

const savedExperiences = [
  {
    userId: '',
    businessId: '',
    name: '',
    image_url: '',
    price_credits: '',
    rating: '',
  }
]

const pastExperiences = [
  {
    bookingId: '',
    userId: '',
    exp_schedule_id: '',
    // past experiences will have a 'attended / cancelled / no-show' status
    booking_status: '', 
    exp_id: '',
    name: '',
    image_url: '',
    address: '',
    price_credits: '',
    party: '',
    start_time: '',
  }
]

const tabComponents: Record<string, React.ReactNode> = {
  upcoming: <UpcomingExperiences />,
  saved: <SavedExperiences />,
  past: <PastExperiences />,
};

const ExperiencePage = () => {
  const [tab, setTab] = useState('upcoming')

  return (
    <div>
      {/* Experience Tabs */}
      <ExperienceTabs tab={tab} setTab={setTab} />

      {/* Experience List Container */}
      <div className="flex flex-col gap-3">{tabComponents[tab] ?? tabComponents['upcoming']}</div>
    </div>
  )
}

export default ExperiencePage
