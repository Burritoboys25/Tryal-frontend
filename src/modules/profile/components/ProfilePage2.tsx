'use client'

import React, { useState, useEffect, useCallback } from 'react'
// TODO: Enable when backend authentication is ready
// import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Container from '@/shared/components/layout/Container'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/base/avatar'
import { Button } from '@/shared/components/ui/base/button'
import FormField from '@/shared/components/ui/forms/FormField'
// TODO: Enable when backend API is ready
// import { getCurrentUser, updateUser } from '@/shared/services/user'
import { User } from '@/shared/types/userTypes'
import { showToast } from '@/shared/components/ui/notifications/Toast'
import LogoutButton from '@/modules/auth/components/LogoutButton'
// Import mock data for development
import mockUsers from '@/shared/mock/user/user.json'

// Simple loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="border-t-primary h-8 w-8 animate-spin rounded-full border-4 border-gray-300"></div>
  </div>
)

const OldProfilePage = () => {
  // TODO: Enable when backend authentication is ready
  // const { data: session, status } = useSession()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const loadUserData = useCallback(async () => {
    try {
      setIsLoading(true)

      // TODO: Replace with actual API call when backend is ready
      // For now, use mock data regardless of session status
      const mockUser = mockUsers[0] // Use first user as default
      const userData: User = {
        id: mockUser.user_id,
        email: mockUser.email,
        firstName: mockUser.name.split(' ')[0],
        lastName: mockUser.name.split(' ').slice(1).join(' '),
      }

      setUser(userData)
      setEditForm({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      })

      // Future implementation with session:
      // if (session?.user?.id) {
      //   const userData = await getCurrentUser(session.user.id)
      //   setUser(userData)
      //   setEditForm({
      //     firstName: userData.firstName,
      //     lastName: userData.lastName,
      //     email: userData.email,
      //   })
      // }
    } catch (error) {
      console.error('Error loading user data:', error)
      showToast({ type: 'error', description: 'Failed to load profile data' })
    } finally {
      setIsLoading(false)
    }
  }, []) // Remove session dependency for now
  useEffect(() => {
    // TODO: Enable session-based authentication when backend is ready
    // For now, load mock data directly without session checks
    loadUserData()

    // Future implementation with session:
    // if (status === 'loading') return
    // if (status === 'unauthenticated') {
    //   router.push('/login')
    //   return
    // }
    // if (session?.user?.id) {
    //   loadUserData()
    // }
  }, [loadUserData]) // Remove session dependencies for now

  const handleEditToggle = () => {
    if (isEditing) {
      // Reset form to original values
      if (user) {
        setEditForm({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        })
      }
    }
    setIsEditing(!isEditing)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditForm(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    try {
      setIsSubmitting(true)

      const updatedUserData = {
        firstName: editForm.firstName,
        lastName: editForm.lastName,
        email: editForm.email,
      }

      // TODO: Replace with actual API call when backend is ready
      // For now, just update local state
      setUser(prev => (prev ? { ...prev, ...updatedUserData } : null))
      showToast({ type: 'success', description: 'Profile updated successfully!' })

      // Future implementation with API:
      // const updated = await updateUser(user.id, updatedUserData)
      // setUser(updated)
      // showToast({ type: 'success', description: 'Profile updated successfully!' })

      setIsEditing(false)
    } catch (error) {
      console.error('Error updating profile:', error)
      showToast({ type: 'error', description: 'Failed to update profile' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return (
      <Container className="flex max-h-screen items-center justify-center">
        <LoadingSpinner />
      </Container>
    )
  }

  if (!user) {
    return (
      <Container className="flex max-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-h3 mb-4">Profile not found</h2>
          <Button onClick={() => router.push('/explore')}>Return to Explore</Button>
        </div>
      </Container>
    )
  }

  return (
    <div className="max-h-screen bg-gray-50">
      <Container className="py-[2rem]">
        <div className="">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <p className="mt-2 text-gray-600">Account overview</p>
          </div>

          {/* Main Content */}
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            {/* Profile Section */}
            <div className="border-b border-gray-200 p-[1.5rem]">
              <div className="flex items-center gap-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=e46a2e&color=fff`}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {user.firstName} {user.lastName}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
                  <p className="text-sm text-gray-500">Premium user</p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex">
                <button className="border-b-2 border-blue-600 px-[1.5rem] py-[0.75rem] text-sm font-medium text-blue-600">
                  Profile
                </button>
                <button className="px-[1.5rem] py-[0.75rem] text-sm font-medium text-gray-500 hover:text-gray-700">
                  Experiences
                </button>
                <button className="px-[1.5rem] py-[0.75rem] text-sm font-medium text-gray-500 hover:text-gray-700">
                  Team & permissions
                </button>
                <button className="px-[1.5rem] py-[0.75rem] text-sm font-medium text-gray-500 hover:text-gray-700">
                  Settings
                </button>
              </nav>
            </div>

            {/* Profile Form */}
            <div className="p-[1.5rem]">
              <div className="max-w-2xl">
                <h3 className="mb-6 text-lg font-medium text-gray-900">Personal Information</h3>

                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      label="First name"
                      name="firstName"
                      value={editForm.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      required
                    />
                    <FormField
                      label="Last name"
                      name="lastName"
                      value={editForm.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      required
                    />
                  </div>

                  <FormField
                    label="Email address"
                    name="email"
                    type="email"
                    value={editForm.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    required
                  />

                  {/* Date of birth field (read-only) */}
                  <FormField
                    label="Date of birth"
                    name="dateOfBirth"
                    value="09/16/1990"
                    disabled={true}
                  />

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 pt-6">
                    {isEditing ? (
                      <>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleEditToggle}
                          disabled={isSubmitting}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          {isSubmitting ? 'Saving...' : 'Save changes'}
                        </Button>
                      </>
                    ) : (
                      <Button type="button" variant="outline" onClick={handleEditToggle}>
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sign Out Section */}
          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="link"
              onClick={() => router.push('/explore')}
              className="text-blue-600"
            >
              ← Back to Explore
            </Button>
            <LogoutButton
              className="text-red-600 hover:text-red-700"
              redirectUrl="/login"
              label="Sign Out"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default OldProfilePage