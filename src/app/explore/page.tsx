'use client'

import FilterBar from '@/modules/explore/components/FilterBar'
import ExploreLayout from '@/modules/explore/components/layout/ExploreLayout'
import Container from '@/shared/components/layout/Container'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React, { useEffect, useState } from 'react'
import BusinessCards from '@/modules/explore/components/BusinessCards'
import { FilterKey } from '@/modules/explore/libs/FilterConstants'

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

  useEffect(() => {
    console.log(filters)
  }, [filters])

  const handleFilterChange = <K extends FilterKey>(key: K, value: Filters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const resetFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <ExploreLayout>
      <Container>
        <div className="screen-minus-navbar-explore flex flex-col space-y-8">
          <FilterBar filters={filters} onChange={handleFilterChange} onReset={resetFilters} />
          <div className="mb-24 flex min-h-0 flex-1 gap-8">
            {/* Left: Scrollable business list */}
            <div className="flex min-h-0 w-[665px] flex-1 flex-col">
              <ScrollArea className="bg-background h-full min-h-0 flex-1 rounded-xl">
                <BusinessCards />
              </ScrollArea>
            </div>
            {/* Right: Mapbox placeholder */}
            <div className="border-border flex flex-1 items-center justify-center rounded-xl border bg-[var(--muted)] text-2xl font-semibold text-[var(--muted-foreground)]">
              Mapbox
            </div>
          </div>
        </div>
      </Container>
    </ExploreLayout>
  )
}

export default ExplorePage
