import React from 'react'
import ProfilePage from '@/modules/profile/components/ProfilePage'
import ViewLayout from '@/shared/components/layout/ViewLayout'

const Profile = () => {
  return (
    <ViewLayout type="profile">
      <ProfilePage />
    </ViewLayout>
  )
}

export default Profile
