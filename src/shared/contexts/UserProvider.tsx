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
    console.log('UserProvider session:', session)

    if (!session?.userId) {
      console.log('No session userId found, clearing userData')
      setUserData(null)
      if (typeof window !== 'undefined') {
        localStorage.removeItem(USER_DATA_KEY)
      }
      return
    }

    const fetchUser = async () => {
      try {
        console.log('Fetching user data for userId:', session.userId)

        const [userRes, subRes] = await Promise.all([
          fetch(`/api/users/${session.userId}`, { credentials: 'include' }),
          fetch(`/api/users/${session.userId}/subscriptions?active=true`),
        ])

        console.log('User Response:', session.userId)
        console.log('userRes.ok:', userRes.ok, 'subRes.ok:', subRes.ok)

        if (!userRes.ok || !subRes.ok) throw new Error('Failed to fetch data')

        const { data } = await userRes.json()

        const subscriptionData = await subRes.json()
        const activeSubscription = subscriptionData.data[0] || null

        const user: User = {
          userId: data.userId,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          activeSubscription,
        }

        console.log('Setting user data:', user)
        setUserData(user)

        if (typeof window !== 'undefined') {
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
          console.log('Saved to localStorage with key:', USER_DATA_KEY)
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
