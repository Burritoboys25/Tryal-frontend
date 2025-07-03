import { Suspense } from 'react'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import ExploreMain from '@/modules/explore/components/ExploreMain'

export default function ExplorePage() {
  return (
    <ViewLayout type="explore">
      <Container>
        <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
          <ExploreMain />
        </Suspense>
      </Container>
    </ViewLayout>
  )
}
