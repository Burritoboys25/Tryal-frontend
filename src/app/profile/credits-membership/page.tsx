import React from 'react'
import CreditsPage from '@/modules/profile/components/CreditsPage'

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-h3">Credits & Membership</h1>
        <p className="text-body2">Manage your credits and payment details.</p>
      </div>

      <CreditsPage />
    </div>
  )
}

export default page
