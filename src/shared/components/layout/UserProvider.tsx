'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getCurrentUser } from '@/shared/services/user'
import { User } from '@/shared/types/userTypes'

interface UserContextType {
  userData: User | null
  setUserData: React.Dispatch<React.SetStateAction<User | null>>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

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
    if (session?.user?.id) {
      getCurrentUser(session.user.id)
        .then(data => {
          setUserData(data)
          localStorage.setItem(USER_DATA_KEY, JSON.stringify(data))
        })
        .catch(err => {
          console.error('Failed to fetch user data:', err)
        })
    } else {
      setUserData(null)
      localStorage.removeItem(USER_DATA_KEY)
    }
  }, [session?.user?.id])

  return <UserContext.Provider value={{ userData, setUserData }}>{children}</UserContext.Provider>
}

export default UserProvider
