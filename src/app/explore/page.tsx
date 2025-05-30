'use client'

import FilterBar from '@/modules/explore/components/FilterBar'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import ExploreHeader from '@/modules/explore/components/layout/ExploreHeader'
import Container from '@/shared/components/layout/Container'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React, { useEffect, useState } from 'react'
import BusinessCards from '@/modules/explore/components/BusinessCards'
import { FilterKey } from '@/modules/explore/libs/FilterConstants'
import { useSession } from 'next-auth/react'
// will need to import currentUser and updateUser from the user service as well as add bookmarkId to the User type

type Filters = {
  type: string[]
  skillLevel: string[]
  groupType: string
  duration: string
  credits: [number, number]
  distance: string
}

const defaultFilters: Filters = {
  type: [],
  skillLevel: [],
  groupType: '',
  duration: '',
  credits: [0, 50],
  distance: '',
}

// Dummy fallback for getCurrentUser and updateUser if not available
// Remove these when your real endpoints are in dev.
type DummyUser = { id: string; bookmarkedBusinessIds: string[] }

async function getCurrentUser(userId: string): Promise<DummyUser> {
  // Simulate a user with no bookmarks
  return Promise.resolve({ id: userId, bookmarkedBusinessIds: [] })
}

async function updateUser(userId: string, data: Partial<DummyUser>): Promise<DummyUser> {
  return Promise.resolve({ id: userId, bookmarkedBusinessIds: data.bookmarkedBusinessIds ?? [] })
}

const ExplorePage = () => {
  const { data: session } = useSession()
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])

  // Fetch bookmarks for the logged-in user
  useEffect(() => {
    if (!session?.user?.id) return
    getCurrentUser(session.user.id)
      .then((user: DummyUser) => setBookmarkedIds(user.bookmarkedBusinessIds || []))
      .catch(() => setBookmarkedIds([]))
  }, [session?.user?.id])

  // Update bookmarks in backend and local state
  const handleToggleBookmark = (business_id: string) => {
    if (!session?.user?.id) return
    setBookmarkedIds(prev => {
      const updated = prev.includes(business_id)
        ? prev.filter(id => id !== business_id)
        : [...prev, business_id]
      updateUser(session.user.id, { bookmarkedBusinessIds: updated })
      console.log('Updated bookmarks:', updated)
      return updated
    })
  }

  const handleFilterChange = <K extends FilterKey>(key: K, value: Filters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <ViewLayout header={<ExploreHeader />}>
      <Container>
        <div className="screen-minus-navbar-explore mt-[21px] flex flex-col space-y-8">
          <FilterBar filters={filters} onChange={handleFilterChange} onReset={resetFilters} />
          <div className="mb-24 flex min-h-0 flex-1 gap-8">
            {/* Left: Scrollable business list */}
            <div className="flex min-h-0 w-[665px] flex-1 flex-col">
              <ScrollArea className="bg-background h-full min-h-0 flex-1 rounded-xl">
                <BusinessCards
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              </ScrollArea>
            </div>
            {/* Right: Mapbox placeholder */}
            <div className="border-border flex flex-1 items-center justify-center rounded-xl border bg-[var(--muted)] text-2xl font-semibold text-[var(--muted-foreground)]">
              Mapbox
            </div>
          </div>
        </div>
      </Container>
    </ViewLayout>
  )
}

export default ExplorePage
