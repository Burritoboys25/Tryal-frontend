'use client'

import React, { useState } from 'react'
import ExperienceTabs from './ExperienceTabs'
import UpcomingExperiences from './UpcomingExperiences'
import SavedExperiences from './SavedExperiences'
import PastExperiences from './PastExperiences'
import UpcomingExperiencesData from '../../mock/upcomingExperiences.json'
import SavedExperiencesData from '../../mock/savedExperiences.json'
import PastExperiencesData from '../../mock/pastExperiences.json'

const ExperiencePage = () => {
  const [tab, setTab] = useState('upcoming')
  const [savedExperiences, setSavedExperiences] = useState(
    SavedExperiencesData.map(experience => ({
      ...experience,
      isBookmarked: true,
    })),
  )

  const handleBookmarkClick = (user_bookmarks_id: string) => {
    setSavedExperiences(prevItems =>
      prevItems.map(item =>
        item.user_bookmarks_id === user_bookmarks_id
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item,
      ),
    )
  }

  return (
    <div>
      {/* Experience Tabs */}
      <ExperienceTabs tab={tab} setTab={setTab} />

      {/* Experience List Container */}
      <div className="mt-2 flex flex-col gap-3">
        {/* {tabComponents[tab] ?? tabComponents['upcoming']} */}
        {tab === 'upcoming' && <UpcomingExperiences data={UpcomingExperiencesData} />}
        {tab === 'saved' && (
          <SavedExperiences data={savedExperiences} handleBookmarkClick={handleBookmarkClick} />
        )}
        {tab === 'past' && <PastExperiences data={PastExperiencesData} />}
      </div>
    </div>
  )
}

export default ExperiencePage
