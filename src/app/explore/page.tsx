'use client'

import FilterBar from '@/modules/explore/components/FilterBar'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import ExploreHeader from '@/modules/explore/components/layout/ExploreHeader'
import Container from '@/shared/components/layout/Container'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React, { useEffect, useState } from 'react'
import BusinessCards from '@/modules/explore/components/BusinessCards'
import { FilterKey } from '@/modules/explore/libs/FilterConstants'

import Map from '@/modules/explore/components/mapbox/Map'

import businesses from '@/shared/mock/business.json'
import { useSession } from 'next-auth/react'
import {
  getUserBookmarks,
  addUserBookmark,
  removeUserBookmark,
} from '@/modules/explore/services/bookmark'

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
  const { data: session } = useSession()
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])

  // Fetch bookmarks for the logged-in user
  useEffect(() => {
    if (!session?.user?.id) return
    getUserBookmarks(session.user.id)
      .then(ids => setBookmarkedIds(ids))
      .catch(() => setBookmarkedIds([]))
  }, [session?.user?.id])

  // Update bookmarks in backend and local state
  const handleToggleBookmark = (business_id: string) => {
    if (!session?.user?.id) return
    setBookmarkedIds(prev => {
      const isBookmarked = prev.includes(business_id)
      if (isBookmarked) {
        removeUserBookmark(session.user.id, business_id)
        return prev.filter(id => id !== business_id)
      } else {
        addUserBookmark(session.user.id, business_id)
        return [...prev, business_id]
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
    <ViewLayout header={<ExploreHeader />}>
      <Container>
        <div className="screen-minus-navbar-explore mt-[21px] flex flex-col space-y-8">
          <FilterBar filters={filters} onChange={handleFilterChange} onReset={resetFilters} />
          <div className="mb-24 flex min-h-0 flex-1 gap-8">
            {/* Left: Scrollable business list */}
            <div className="flex min-h-0 w-[665px] flex-1 flex-col">
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
