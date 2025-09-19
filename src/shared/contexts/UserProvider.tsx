'use client'

import React, { createContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { User } from '@/shared/types/userTypes'

interface UserContextType {
  userData: User | null
  setUserData: React.Dispatch<React.SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

const USER_DATA_KEY = 'userData'

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession()
  const [userData, setUserData] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem(USER_DATA_KEY)
      return cached ? (JSON.parse(cached) as User) : null
    }
    return null
  })

  useEffect(() => {
    if (!session?.user?.id) {
      setUserData(null)
      if (typeof window !== 'undefined') {
        localStorage.removeItem(USER_DATA_KEY)
      }
      return
    }

    const fetchUser = async () => {
      try {
        const [userRes, subRes] = await Promise.all([
          fetch(`/api/users/${session.user.id}`, { credentials: 'include' }),
          fetch(`/api/users/${session.user.id}/subscriptions?active=true`),
        ])

        if (!userRes.ok || !subRes.ok) throw new Error('Failed to fetch data')

        const userData = await userRes.json()
        const subscriptionData = await subRes.json()
        const activeSubscription = subscriptionData[0]

        setUserData({ ...userData, activeSubscription })

        if (typeof window !== 'undefined') {
          localStorage.setItem(USER_DATA_KEY, JSON.stringify({ ...userData, activeSubscription }))
        }
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('Failed to fetch user data:', err)
        }
        setUserData(null)
        if (typeof window !== 'undefined') {
          localStorage.removeItem(USER_DATA_KEY)
        }
      }
    }

    fetchUser()
  }, [session])

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>
}

export default UserProvider
