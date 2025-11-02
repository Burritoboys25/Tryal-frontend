'use client'

import React, { useState } from 'react'
import FormField from '@/shared/components/ui/forms/FormField'
import { Button } from '@/shared/components/ui/base/button'
import {
  profileFormSchema,
  ProfileFormData,
} from '@/modules/profile/validations/profile-form.schema'
import { showToast } from '@/shared/components/ui/notifications/Toast'
import { useUser } from '@/shared/hooks/useUser'

type ProfileProp = {
  userId: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  dateOfBirth: string
  gender: string
  profileImageUrl: string
  creditBalance: number
  stripeCustomerId: string
}

const ProfilePage = ({ ...UserData }: ProfileProp) => {
  const { setUserData, userData } = useUser()
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: UserData.firstName || '',
    lastName: UserData.lastName || '',
    email: UserData.email || '',
    phoneNumber: UserData.phoneNumber || '',
    dateOfBirth: UserData.dateOfBirth || '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({})

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setError(null)
    setFieldErrors({})

    const result = profileFormSchema.safeParse({
      ...formData,
    })

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors
      setFieldErrors(errors)
      setIsSubmitting(false)
      return
    }

    try {
      const res = await fetch(`/api/profile/${UserData.userId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...result.data,
        }),
      })

      if (res.ok) {
        const { data } = await res.json()
        
        // Update the context with the fresh data from the backend
        if (userData && data) {
          setUserData({
            ...userData,
            userId: data.userId,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
          })
        }
        
        showToast({ type: 'success', description: 'Profile updated successfully!' })
      } else {
        showToast({ type: 'error' })
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
      }
    } catch (err) {
      showToast({ type: 'error' })
      console.error(err)
      setError('Network error.')
    } finally {
      setIsSubmitting(false)
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
            error={fieldErrors.firstName?.[0]}
            onChange={handleFormChange}
            required
          />
          <FormField
            label="Last name"
            name="lastName"
            value={formData.lastName}
            error={fieldErrors.lastName?.[0]}
            onChange={handleFormChange}
            required
          />
          <FormField
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            error={fieldErrors.email?.[0]}
            onChange={handleFormChange}
            required
          />
          <FormField
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            error={fieldErrors.phoneNumber?.[0]}
            onChange={handleFormChange}
            required
          />
          {/* TODO: Need to decide on how users will update their DOB */}
          <FormField
            label="Date of birth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            disabled={true}
          />

          {error && <p className="text-destructive text-sm">{error}</p>}
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer hover:bg-[#FADDD5]"
            // onClick={handleSubmitForm}
            disabled={isSubmitting}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  )
}

export default ProfilePage
