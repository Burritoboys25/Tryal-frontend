import { Suspense } from 'react'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import ExploreMain from '@/modules/explore/components/ExploreMain'

export default async function ExplorePage() {
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${userId}/bookmarks`, {
    cache: 'no-store',
  })
  const data = await res.json();

  const bookmarks = data.data.map((item: { businessId: string }) => item.businessId)

  return (
    <ViewLayout type="explore">
      <Container>
        <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
          <ExploreMain bookmarks={bookmarks} />
        </Suspense>
      </Container>
    </ViewLayout>
  )
}
