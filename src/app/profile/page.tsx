import ProfilePage from '@/modules/profile/components/ProfilePage'
import API_BASE_URL from '@/shared/lib/apiBaseUrl'

export const dynamic = 'force-dynamic' // Render this page on every request

export default async function Profile() {
  // TODO: Replace with session-based userId
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'
  let profileData = null

  try {
    const res = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
      cache: 'no-store', // ensures fresh data every request
    })
    if (!res.ok) {
      throw new Error(`Failed to fetch profile: ${res.statusText}`)
    }
    profileData = await res.json()
  } catch (error) {
    console.error('Error fetching profile data:', error)
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
