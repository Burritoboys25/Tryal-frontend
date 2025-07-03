import { User } from '../types/userTypes'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function getCurrentUser(userId: string) {
  const res = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
    credentials: 'include',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch user')
  }

  return res.json()
}

export async function updateUser(userId: string, data: Partial<User>) {
  const res = await fetch(`${API_BASE_URL}/api/users/${userId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error('Failed to update user')
  }

  return res.json()
}
