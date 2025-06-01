import { UserBookmark } from '@/shared/types/userTypes'

// Get all bookmarks for a user
export async function getUserBookmarks(userId: string): Promise<string[]> {
  const res = await fetch(`/api/user-bookmarks?userId=${userId}`)
  if (!res.ok) throw new Error('Failed to fetch user bookmarks')
  const data = await res.json()
  return data.bookmarkedBusinessIds || []
}

// Add a bookmark (user_id, business_id)
export async function addUserBookmark(userId: string, businessId: string): Promise<UserBookmark> {
  const res = await fetch('/api/user-bookmarks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, businessId }),
  })
  if (!res.ok) throw new Error('Failed to add bookmark')
  return res.json()
}

// Remove a bookmark (user_id, business_id)
export async function removeUserBookmark(userId: string, businessId: string): Promise<void> {
  const res = await fetch('/api/user-bookmarks', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, businessId }),
  })
  if (!res.ok) throw new Error('Failed to remove bookmark')
}
