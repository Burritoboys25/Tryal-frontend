import { Suspense } from 'react'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import BusinessInfo from '@/modules/business/components/BusinessInfo'
import { getBusinessWithCategoriesFromApi, getBusinessExperiences } from '@/modules/business/services/business'
import BookingMain from '@/modules/business/components/booking/BookingMain'
import Reviews from '@/modules/business/components/Reviews'

export default async function BusinessListingPage(props: {
  params: Promise<{ businessId: string }>
}) {
  const params = await props.params
  const { businessId } = params

  const business = await getBusinessWithCategoriesFromApi(businessId)
  const experiences = await getBusinessExperiences(businessId)
  console.log(experiences)

  return (
    <ViewLayout type="default">
      <Container>
        <Suspense fallback={<p className="py-[5rem] text-center">Loading...</p>}>
          <div className="screen-minus-navbar-business mt-12 flex flex-col space-y-8">
            {business ? (
              <>
                <div className="mb-12">
                  <BusinessInfo business={business} />
                </div>
                <div className="mb-12">
                  <BookingMain experiences={experiences} />
                </div>
                <Reviews />
              </>
            ) : (
              <div className="py-10 text-center text-2xl">Business not found</div>
            )}
          </div>
        </Suspense>
      </Container>
    </ViewLayout>
  )
}
