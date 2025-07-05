'use client'

import React, { useState } from 'react'
import ExperienceTabs from './ExperienceTabs'
import UpcomingExperiences from './UpcomingExperiences'
import SavedExperiences from './SavedExperiences'
import PastExperiences from './PastExperiences'
import UpcomingExperiencesData from '../../mock/upcomingExperiences.json';
import SavedExperiencesData from '../../mock/savedExperiences.json'
import PastExperiencesData from '../../mock/pastExperiences.json'

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
        {tab === 'saved' && <SavedExperiences data={SavedExperiencesData} />}
        {tab === 'past' && <PastExperiences data={PastExperiencesData} />}
      </div>
    </div>
  )
}

export default ExperiencePage
