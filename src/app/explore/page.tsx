import { Suspense } from 'react'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import ExploreMain from '@/modules/explore/components/ExploreMain'

export default async function ExplorePage() {
  const userId = '272d2788-ee1e-4056-ae09-4829aff17909'

  const bookmarksRes = await fetch(`${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/users/${userId}/bookmarks`, {
    cache: 'no-store',
  });
  const data = await bookmarksRes.json();

  const bookmarks = data.map((item: { businessId: string }) => item.businessId)

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
