'use client'

import FilterBar from '@/modules/explore/components/FilterBar'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React, { useState } from 'react'
import BusinessCards from '@/modules/explore/components/BusinessCards'
import { FilterKey } from '@/modules/explore/libs/FilterConstants'

import Map from '@/modules/explore/components/mapbox/Map'

import businesses from '@/shared/mock/business/business.json'
import mockUserBookmarks from '@/shared/mock/user/userBookmarks.json'
import { useSession } from 'next-auth/react'
// import {
//   getUserBookmarks,
//   addUserBookmark,
//   removeUserBookmark,
// } from '@/modules/explore/services/bookmark'

interface MockUserBookmark {
  userId: string
  businessIds: string[]
}

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

const ExplorePage = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  // Find the mock user's bookmarked business IDs
  const mockUserId = 'user1'
  const initialBookmarkedIds =
    (mockUserBookmarks as MockUserBookmark[]).find(u => u.userId === mockUserId)?.businessIds || []
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(initialBookmarkedIds)

  // Uncomment when backend integration is ready
  const { data: session } = useSession()
  console.log('Session info:')
  console.log(session)

  // const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  // useEffect(() => {
  //   if (!session?.user?.id) return
  //   getUserBookmarks(session.user.id)
  //     .then(ids => setBookmarkedIds(ids))
  //     .catch(() => setBookmarkedIds([]))
  // }, [session?.user?.id])

  // Update bookmarks in local state only
  const handleToggleBookmark = (business_id: string) => {
    // if (!session?.user?.id) return
    setBookmarkedIds(prev => {
      const isBookmarked = prev.includes(business_id)
      if (isBookmarked) {
        // removeUserBookmark(session.user.id, business_id)
        const updated = prev.filter(id => id !== business_id)
        console.log('Unbookmarked:', business_id, 'Current bookmarks:', updated)
        return updated
      } else {
        // addUserBookmark(session.user.id, business_id)
        const updated = [...prev, business_id]
        console.log('Bookmarked:', business_id, 'Current bookmarks:', updated)
        return updated
      }
    })
  }

  const handleFilterChange = <K extends FilterKey>(key: K, value: Filters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }
  const resetFilters = () => {
    setFilters(defaultFilters)
  }
  return (
    <ViewLayout type="explore">
      <Container>
        <div className="screen-minus-navbar-explore mt-[1.3125rem] flex flex-col space-y-[2rem]">
          <FilterBar filters={filters} onChange={handleFilterChange} onReset={resetFilters} />
          <div className="mb-[6rem] flex min-h-0 flex-1 gap-[2rem]">
            {/* Left: Scrollable business list */}
            <div className="flex min-h-0 w-[41.5625rem] flex-1 flex-col">
              <ScrollArea className="bg-background h-full min-h-0 flex-1 rounded-xl">
                <BusinessCards
                  items={businesses}
                  onSelect={setSelectedId}
                  selectedId={selectedId ?? ''}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                  bookmarkedIds={bookmarkedIds}
                  onToggleBookmark={handleToggleBookmark}
                />
              </ScrollArea>
            </div>
            {/* Right: Mapbox placeholder */}
            <div className="border-border flex-1 overflow-hidden rounded-xl border">
              <Map items={businesses} selectedId={selectedId} hoveredId={hoveredId} />
            </div>
          </div>
        </div>
      </Container>
    </ViewLayout>
  )
}

export default ExplorePage
