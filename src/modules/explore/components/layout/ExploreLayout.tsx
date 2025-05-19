import React from 'react'
import ExploreHeader from './ExploreHeader'

const ExploreLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ExploreHeader />
      <main className="mt-[90px] flex-grow">{children}</main>
    </div>
  )
}

export default ExploreLayout
