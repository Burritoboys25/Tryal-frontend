import React from 'react'
import ProfilePage from '@/modules/profile/components/ProfilePage'

const Profile = async () => {
  // TODO: get userid from session -- currently hardcoded
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'
  let profileData;
  if (process.env.NEXT_PUBLIC_ENV === 'dev') {
    const baseUrl = process.env.BACKEND_URL || 'http://localhost:8080';
    const data = await fetch(`${baseUrl}/api/users/${userId}`)
    profileData = await data.json()
    console.log(profileData);
  }

  return (
    <div>
      <h1 className="text-h3">Profile</h1>
      <p className="text-body2">
        Your information here will be shared with the business when you make a booking.
      </p>
      <ProfilePage {...profileData?.data} />
    </div>
  )
}

export default Profile
