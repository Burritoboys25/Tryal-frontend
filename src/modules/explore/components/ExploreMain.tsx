'use client'

import FilterBar from '@/modules/explore/components/FilterBar'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import BusinessCards from '@/modules/explore/components/BusinessCards'
import { FilterKey } from '@/modules/explore/types/filterTypes'

import Map from '@/modules/explore/components/mapbox/Map'
import { Business } from '@/modules/explore/types/businessTypes'
import mockUserBookmarks from '@/shared/mock/user/userBookmarks.json'
import { useFilters } from '@/modules/explore/hooks/useFilters'
import { Filters } from '@/modules/explore/types/filterTypes'
import {
  fetchFilteredBusinesses,
  getFiltersFromSearchParams,
} from '@/modules/explore/services/filterBusinesses'
import { buildQueryParams } from '@/modules/explore/libs/buildQueryParams'
import { addUserBookmark, removeUserBookmark } from '../services/bookmark'

// import { useSession } from 'next-auth/react'
// import {
//   getUserBookmarks,
//   addUserBookmark,
//   removeUserBookmark,
// } from '@/modules/explore/services/bookmark'

interface MockUserBookmark {
  userId: string
  businessIds: string[]
}

const ExploreMain = ({ bookmarks }: { bookmarks: string[] }) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  // Find the mock user's bookmarked business IDs
  const mockUserId = 'user1'
  const initialBookmarkedIds =
    (mockUserBookmarks as MockUserBookmark[]).find(u => u.userId === mockUserId)?.businessIds || []
  
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(bookmarks || [])
  const [businesses, setBusinesses] = useState<Business[]>([])

  // Filter state generated from search params.
  const router = useRouter()
  const searchParams = useSearchParams()
  const filters = getFiltersFromSearchParams(searchParams)

  // Hook to get necessary filter options
  const { filterOptions } = useFilters()

  // Changes in search params trigger a fetch of businesses.
  useEffect(() => {
    const filters = getFiltersFromSearchParams(searchParams)
    fetchFilteredBusinesses(filters).then(({ businesses }) => {
      setBusinesses(businesses)
    })
  }, [searchParams])

  // Uncomment when backend integration is ready
  // const { data: session } = useSession()
  // console.log('Session info:')
  // console.log(session)

  // const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])
  // useEffect(() => {
  //   if (!session?.user?.id) return
  //   getUserBookmarks(session.user.id)
  //     .then(ids => setBookmarkedIds(ids))
  //     .catch(() => setBookmarkedIds([]))
  // }, [session?.user?.id])

  const handleToggleBookmark = async (business_id: string) => {
  const isBookmarked = bookmarkedIds.includes(business_id)

  if (isBookmarked) {
    try {
      await removeUserBookmark('272d2788-ee1e-4056-ae09-4829aff17909', business_id) // userId hardcoded -- should use session?.user?.id 
      setBookmarkedIds(prev => prev.filter(id => id !== business_id))
    } catch (err) {
      console.error('Failed to unbookmark:', err)
    }
  } else {
    try {
      await addUserBookmark('272d2788-ee1e-4056-ae09-4829aff17909', business_id) // userId hardcoded -- should use session?.user?.id 
      setBookmarkedIds(prev => [...prev, business_id])
    } catch (err) {
      console.error('Failed to bookmark:', err)
    }
  }
}

  // Update the filter state and push the new search params to the url.
  const handleFilterChange = <K extends FilterKey>(key: K, value: Filters[K]) => {
    const nextFilters = { ...filters, [key]: value }
    const query = buildQueryParams(nextFilters)
    router.push(query ? `/explore?${query}` : '/explore')
  }

  // Navigate to business detail page when a card is selected
  // Now uses businessId for the URL
  const handleSelectBusiness = (business: Business) => {
    router.push(`/business/${business.businessId}`)
  }

  // Reset the filters and push the new search params to the url.
  const resetFilters = () => {
    router.push('/explore')
  }

  return (
    <div className="screen-minus-navbar-explore mt-[1.3125rem] flex flex-col space-y-8">
      <FilterBar
        filters={filters}
        onChange={handleFilterChange}
        onReset={resetFilters}
        filterOptions={filterOptions}
      />
      <div className="mb-24 flex min-h-0 flex-1 gap-8">
        {/* Left: Scrollable business list */}
        <div className="flex min-h-0 w-[41.5625rem] flex-1 flex-col">
          <ScrollArea className="bg-background h-full min-h-0 flex-1 rounded-xl">
            <BusinessCards
              items={businesses}
              onSelect={setSelectedId} // single click just selects
              onDoubleClick={id => {
                const business = businesses.find(b => b.businessId === id)
                if (business) handleSelectBusiness(business)
              }} // double click navigates using businessId
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
  )
}

export default ExploreMain
