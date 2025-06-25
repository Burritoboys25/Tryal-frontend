import { Button } from '@/shared/components/ui/base/button'
import FormField from '@/shared/components/ui/forms/FormField'
import React from 'react'

const Profile = () => {
  return (
    <div>
      <h1 className="text-h3">Profile</h1>
      <p className="text-body2">
        Your information here will be shared with the business when you make a booking.
      </p>

      <form className="mt-6 w-[85%]">
        <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
          <FormField
            label="First name"
            name="firstName"
            // value={editForm.firstName}
            // onChange={handleInputChange}
            // disabled={!isEditing}
            required
          />
          <FormField
            label="Last name"
            name="lastName"
            // value={editForm.lastName}
            // onChange={handleInputChange}
            // disabled={!isEditing}
            required
          />
          <FormField
            label="Email address"
            name="email"
            type="email"
            // value={editForm.email}
            // onChange={handleInputChange}
            // disabled={!isEditing}
            required
          />
          <FormField
            label="Phone number"
            name="phoneNumber"
            // value={editForm.email}
            // onChange={handleInputChange}
            // disabled={!isEditing}
            required
          />
          {/* Date of birth field (read-only) */}
          <FormField label="Date of birth" name="dateOfBirth" value="09/16/1990" disabled={true} />
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <Button
            type="button"
            variant="outline"
            // onClick={handleEditToggle}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Profile
