'use client'

import React, { useState } from 'react'
import FormField from '@/shared/components/ui/forms/FormField'
import { Button } from '@/shared/components/ui/base/button'
import {
  profileFormSchema,
  ProfileFormData,
} from '@/modules/profile/validations/profile-form.schema'

const dummyData: ProfileFormData = {
  firstName: 'Katherine',
  lastName: 'Payton',
  email: 'kpayton@gmail.com',
  phoneNumber: '2226595555',
  dateOfBirth: '2000-01-01',
}

const ProfilePage = () => {
  const [formData, setFormData] = useState<ProfileFormData>(
    dummyData || {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dataOfBirth: '',
    },
  )

  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [error, setError] = useState<string | null>(null)
  // const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

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
            required
          />
          <FormField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            required
          />
          <FormField
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
          <FormField
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleFormChange}
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
            // onClick={handleSubmitForm}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  )
}

export default ProfilePage
