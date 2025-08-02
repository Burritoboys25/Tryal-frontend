import React from 'react'
import ProfilePage from '@/modules/profile/components/ProfilePage'

const Profile = async () => {
  // TODO: get userid from session -- currently hardcoded
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'
  const baseUrl = process.env.BACKEND_URL || 'http://localhost:8080';
  const data = await fetch(`${baseUrl}/api/users/${userId}`)
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
