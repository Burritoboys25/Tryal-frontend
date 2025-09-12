import { UserBookmarks } from '@/shared/types/userTypes'

// Get all bookmarks for a user
export async function getUserBookmarks(userId: string): Promise<string[]> {
  // userId should come from session in the calling component
  const res = await fetch(`/api/user-bookmarks?userId=${userId}`)
  if (!res.ok) throw new Error('Failed to fetch user bookmarks')
  const data = await res.json()
  return data.data || []
}

// Add a businessId to the user's bookmarks
export async function addUserBookmark(userId: string, businessId: string): Promise<UserBookmarks> {
  // userId come from session in the calling component
  const res = await fetch('/api/user-bookmarks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, businessId }),
  })
  if (!res.ok) throw new Error('Failed to add bookmark')
  const response = await res.json()
  return response.data;
}

// Remove a businessId from the user's bookmarks
export async function removeUserBookmark(userId: string, businessId: string): Promise<void> {
  // userId come from session in the calling component
  const res = await fetch('/api/user-bookmarks', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, businessId }),
  })
  if (!res.ok) throw new Error('Failed to remove bookmark')
  const response = await res.json()
  return response.data;
}
