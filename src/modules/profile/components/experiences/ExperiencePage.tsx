'use client'

import React, { useState } from 'react'
import ExperienceTabs from './ExperienceTabs'
import UpcomingExperiences from './UpcomingExperiences'
import SavedExperiences from './SavedExperiences'
import PastExperiences from './PastExperiences'
// import UpcomingExperiencesData from '../../mock/upcomingExperiences.json'
// import SavedExperiencesData from '../../mock/savedExperiences.json'
// import PastExperiencesData from '../../mock/pastExperiences.json'
import { ExperienceType, SavedExperienceType } from '../../types/ExperienceTypes'

const ExperiencePage = ({ bookings, bookmarks }: { bookings: ExperienceType[], bookmarks: SavedExperienceType[] }) => {
  const [tab, setTab] = useState('upcoming')

  const upcomingExperiences = bookings?.filter(booking => booking.bookingStatus === 'BOOKED') || []

  const pastExperiences = bookings?.filter(booking => booking.bookingStatus !== 'BOOKED') || []

  const [savedExperiences, setSavedExperiences] = useState(
    bookmarks.map(experience => ({
      ...experience,
      isBookmarked: true,
    })),
  )

  const handleBookmarkClick = (businessId: string) => {
    setSavedExperiences(prevItems =>
      prevItems.map(item =>
        item.businessId === businessId ? { ...item, isBookmarked: !item.isBookmarked } : item,
      ),
    )
  }

  return (
    <div>
      {/* Experience Tabs */}
      <ExperienceTabs tab={tab} setTab={setTab} />

      {/* Experience List Container */}
      <div className="mt-2 flex flex-col gap-3 max-h-[28rem] overflow-y-auto">
        {tab === 'upcoming' && <UpcomingExperiences items={upcomingExperiences} />}
        {tab === 'saved' && (
          <SavedExperiences data={savedExperiences} handleBookmarkClick={handleBookmarkClick} />
        )}
        {tab === 'past' && <PastExperiences data={pastExperiences} />}
      </div>
    </div>
  )
}

export default ExperiencePage
