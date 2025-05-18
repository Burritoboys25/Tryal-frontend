import FilterBar from '@/modules/explore/components/FilterBar'
import ExploreLayout from '@/modules/explore/components/layout/ExploreLayout'
import Container from '@/shared/components/layout/Container'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React from 'react'
import BusinessList from '@/modules/explore/components/ExploreCard'

const ExplorePage = () => {
  return (
    <ExploreLayout>
      <Container>
        <div className="screen-minus-navbar-explore flex flex-col space-y-8">
          <FilterBar />
          <div className="mb-24 flex min-h-0 flex-1 gap-8">
            {/* Left: Scrollable business list */}
            <div className="flex min-h-0 w-[665px] flex-1 flex-col">
              <ScrollArea className="bg-background h-full min-h-0 flex-1 rounded-xl">
                <BusinessList />
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
