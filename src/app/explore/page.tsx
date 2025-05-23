import FilterBar from '@/modules/explore/components/FilterBar'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import ExploreHeader from '@/modules/explore/components/layout/ExploreHeader'
import Container from '@/shared/components/layout/Container'
import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import React from 'react'
import BusinessCards from '@/modules/explore/components/BusinessCards'

const ExplorePage = () => {
  return (
    <ViewLayout header={<ExploreHeader />}>
      <Container>
        <div className="screen-minus-navbar-explore flex flex-col space-y-8 mt-[21px]">
          <FilterBar />
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
    </ViewLayout>
  )
}

export default ExplorePage
