import Container from '@/shared/components/layout/Container'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import ProfileInfo from '@/modules/profile/components/ProfileInfo'
import ProfileTabs from '@/modules/profile/components/ProfileTabs'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewLayout type="profile">
      <Container className="py-[3rem] h-[calc(100vh-69px)]">
        <div className="px-[6rem]">
          <ProfileInfo />

          {/* Line border */}
          <hr className="mt-5" />

          {/* Main Container */}
          <div className="mt-12 flex">
            {/* Navigation Tabs  */}
            <div className="flex-1 mt-2">
              <ProfileTabs />
            </div>
            {/* Main Content */}
            <div className="flex-[2.7]">{children}</div>
          </div>
        </div>
      </Container>
    </ViewLayout>
  )
}
