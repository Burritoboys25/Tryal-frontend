import { Suspense } from 'react'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import BusinessInfo from '@/modules/business/components/BusinessInfo'
import { getBusinessById } from '@/modules/business/services/business'

export default async function BusinessListingPage(props: { params: Promise<{ businessId: string }> }) {
  const params = await props.params;
  const { businessId } = params
  const business = await getBusinessById(businessId)

  return (
    <ViewLayout type="default">
      <Container>
        <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
          <div className="screen-minus-navbar-explore mt-[1.3125rem] flex flex-col space-y-8">
            {business ? (
              <BusinessInfo business={business} />
            ) : (
              <div className="py-10 text-center text-2xl">Business not found</div>
            )}
          </div>
        </Suspense>
      </Container>
    </ViewLayout>
  )
}
