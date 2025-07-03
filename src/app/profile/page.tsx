import React from 'react'
import ProfilePage from '@/modules/profile/components/ProfilePage'

const Profile = () => {
  return (
    <div>
      <h1 className="text-h3">Profile</h1>
      <p className="text-body2">
        Your information here will be shared with the business when you make a booking.
      </p>

      <ProfilePage />
    </div>
  )
}

export default Profile
