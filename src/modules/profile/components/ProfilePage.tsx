'use client'

import React, { useState } from 'react'
import FormField from '@/shared/components/ui/forms/FormField'
import { Button } from '@/shared/components/ui/base/button'

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dataOfBirth: '',
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      console.log(formData)
    } catch (error) {
      console.error('Error updating profile:', error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitForm} className="mt-6 w-[85%]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
          <FormField
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            // disabled={!isEditing}
            required
          />
          <FormField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            // disabled={!isEditing}
            required
          />
          <FormField
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            // disabled={!isEditing}
            required
          />
          <FormField
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleFormChange}
            // disabled={!isEditing}
            required
          />
          {/* Date of birth field (read-only) */}
          <FormField label="Date of birth" name="dateOfBirth" value="09/16/1990" disabled={true} />
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer hover:bg-[#FADDD5]"
            // onClick={handleEditToggle}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  )
}

export default ProfilePage
