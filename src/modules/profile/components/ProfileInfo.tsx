'use client'

import React from 'react'

const ProfileInfo = () => {
  // const { data: session } = useSession()
  // Generate user initials and profile image URL
  // For now using mock data, but this will be replaced with session data when backend is ready
  // const userFirstName = session?.user?.firstName || 'User'
  // const userLastName = session?.user?.lastName || ''
  // const userId = session?.user?.userId || ''

  return (
    <div className="flex items-center gap-7">
      {/* Profile Image */}
      <div className="h-[5.438rem] w-[5.438rem] rounded-full bg-gray-500"></div>
      {/* Header Text Container */}
      <div className="">
        <h1 className="text-h3">Katherine Payton</h1>
        <p className="text-body2">Location</p>
        <p className="text-body2">Member since 2025</p>
      </div>
    </div>
  )
}

export default ProfileInfo
