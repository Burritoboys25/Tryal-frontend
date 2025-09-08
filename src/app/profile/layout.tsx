'use client'

import Container from '@/shared/components/layout/Container'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import ProfileInfo from '@/modules/profile/components/ProfileInfo'
import ProfileTabs from '@/modules/profile/components/ProfileTabs'
import { usePathname } from 'next/navigation'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (!pathname.startsWith('/profile/experiences/view-edit/')) {
    return (
      <ViewLayout type="default">
        <Container className="h-[calc(100vh-69px)] py-[3rem]">
          <div className="px-[6rem]">
            <ProfileInfo />

            {/* Line border */}
            <hr className="mt-5" />

            {/* Main Container */}
            <div className="mt-12 flex">
              {/* Navigation Tabs  */}
              <div className="mt-2 flex-1">
                <ProfileTabs />
              </div>
              {/* Main Content */}
              <div className="flex-[2.7]">{children}</div>
            </div>
          </div>
        </Container>
      </ViewLayout>
    )
  } else {
    return (
      <ViewLayout type="default">
        <Container className="h-[calc(100vh-69px)] py-[3rem]">
          {children}
        </Container>
      </ViewLayout>
    )
  }
}
