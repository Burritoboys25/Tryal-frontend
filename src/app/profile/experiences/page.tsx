import React from 'react'
import ExperiencePage from '@/modules/profile/components/experiences/ExperiencePage'

const Page = () => {

  return (
    <div className="">
      <h1 className="text-h3">Experiences</h1>
      <p className="text-body2 mt-1">View and/or manage your experiences.</p>

      <ExperiencePage />
    </div>
  )
}

export default Page