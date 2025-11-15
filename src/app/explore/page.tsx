'use client'

import { Suspense, useEffect, useState } from 'react'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import ExploreMain from '@/modules/explore/components/ExploreMain'
import API_BASE_URL from '@/shared/lib/apiBaseUrl'
import { useUser } from '@/shared/hooks/useUser'
import SubscriptionModal from '@/modules/plan/components/SubscriptionModal'

export default function ExplorePage() {
  const { userData } = useUser()
  const [bookmarks, setBookmarks] = useState<string[]>([])

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!userData?.userId) return

      try {
        const res = await fetch(`${API_BASE_URL}/api/users/${userData.userId}/bookmarks`, {
          cache: 'no-store',
        })
        const data = await res.json()
        const bookmarkIds = data.data.map((item: { businessId: string }) => item.businessId)
        setBookmarks(bookmarkIds)
      } catch (err) {
        console.error('Failed to fetch bookmarks:', err)
        setBookmarks([])
      }
    }

    fetchBookmarks()
  }, [userData?.userId])

  return (
    <ViewLayout type="explore">
      <Container>
        <SubscriptionModal hasActiveSubscription={!!userData?.activeSubscription} />
        <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
          <ExploreMain bookmarks={bookmarks} />
        </Suspense>
      </Container>
    </ViewLayout>
  )
}
