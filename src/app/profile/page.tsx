import React from 'react'
import ProfilePage from '@/modules/profile/components/ProfilePage'

const Profile = async () => {
  // TODO: get userid from session -- currently hardcoded
  const userId = '96204bc2-ddf9-4708-b841-ead5a153b308'
  const data = await fetch(`${process.env.BACKEND_URL}/api/users/${userId}`)
  const profileData = await data.json()

  return (
    <div>
      <h1 className="text-h3">Profile</h1>
      <p className="text-body2">
        Your information here will be shared with the business when you make a booking.
      </p>
      <ProfilePage {...profileData.userDTO} />
    </div>
  )
}

export default Profile
