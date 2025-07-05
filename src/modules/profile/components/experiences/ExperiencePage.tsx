'use client'

import React, { useState } from 'react'
import ExperienceTabs from './ExperienceTabs'
import UpcomingExperiences from './UpcomingExperiences'
import SavedExperiences from './SavedExperiences'
import PastExperiences from './PastExperiences'

import UpcomingExperiencesData from '../../mock/upcomingExperiences.json';

const savedExperiences = [
  {
    user_id: '',
    business_id: '',
    user_bookmarks_id: '',
    name: '',
    image_url: '',
    price_credits: '',
    rating: '',
  },
]

const pastExperiences = [
  {
    user_id: '',
    booking_id: '',
    exp_schedule_id: '',
    // past experiences will have a 'attended / cancelled / no-show' status
    booking_status: '',
    exp_id: '',
    name: '',
    image_url: '',
    address: '',
    price_credits: '',
    party: '',
    exp_date: '',
    start_time: '',
  },
]

// const tabComponents: Record<string, React.ReactNode> = {
//   upcoming: <UpcomingExperiences />,
//   saved: <SavedExperiences />,
//   past: <PastExperiences />,
// }

const ExperiencePage = () => {
  const [tab, setTab] = useState('upcoming')

  return (
    <div>
      {/* Experience Tabs */}
      <ExperienceTabs tab={tab} setTab={setTab} />

      {/* Experience List Container */}
      <div className="mt-2 flex flex-col gap-3">
        {/* {tabComponents[tab] ?? tabComponents['upcoming']} */}
        {tab === 'upcoming' && <UpcomingExperiences data={UpcomingExperiencesData} />}
        {tab === 'saved' && <SavedExperiences />}
        {tab === 'past' && <PastExperiences />}
      </div>
    </div>
  )
}

export default ExperiencePage
