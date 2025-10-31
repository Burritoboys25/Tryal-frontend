'use client'

import Hero from '@/app/_sections/Hero'
import Faq from './_sections/Faq'
import Intro from './_sections/Intro'
import LenisProvider from '@/shared/lib/LenisProvider'
import MainFooter from '@/shared/components/layout/MainFooter'
import StickySteps from './_sections/StickySteps'
import Stats from './_sections/Stats'
import ExploreMarquee from './_sections/ExploreMarquee'
import UserFeatureSlider from './_sections/UserFeatureSlider'
import LandingNavbar from '@/shared/components/layout/LandingNavbar'

export default function Home() {
  return (
    <>
      <LenisProvider>
        <LandingNavbar />
        <div className="space-y-4 md:space-y-8">
          <Hero />
          <Intro />
          <UserFeatureSlider />
          <ExploreMarquee />
          <Stats />
          <StickySteps />
          {/* Laptop GIF component goes here */}
          <div className="py-12">
            <Faq audience={'user'} />
          </div>
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}
