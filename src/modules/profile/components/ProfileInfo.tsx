'use client'

import React from 'react'
import { useUser } from '@/shared/hooks/useUser'

const ProfileInfo = () => {
  const { userData } = useUser()

  const userFirstName = userData?.firstName || 'Loading...'
  const userLastName = userData?.lastName || ''
  const fullName = `${userFirstName} ${userLastName}`.trim()
  const memberSince = userData?.createdAtYear ?? ''

  return (
    <div className="flex items-center gap-7">
      {/* Profile Image */}
      <div className="h-[5.438rem] w-[5.438rem] rounded-full bg-gray-500"></div>
      {/* Header Text Container */}
      <div className="">
        <h1 className="text-h3" suppressHydrationWarning>
          {fullName}
        </h1>
        <p className="text-body2">Location</p>
        <p className="text-body2" suppressHydrationWarning>
          {memberSince && `Member since ${memberSince}`}
        </p>
      </div>
    </div>
  )
}

export default ProfileInfo
