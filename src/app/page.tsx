'use client'

import Hero from '@/app/_sections/Hero'
import Faq from './_sections/Faq'
import Intro from './_sections/Intro'
import LenisProvider from '@/shared/lib/LenisProvider'
import MainFooter from '@/shared/components/layout/MainFooter'
import StickySteps from './_sections/StickySteps'
import Stats from './_sections/Stats'
import ExploreMarquee from './_sections/ExploreMarquee'
import { FeatureSlider } from '@/shared/components/ui/FeatureSlider'
import LandingNavbar from '@/shared/components/layout/LandingNavbar'
import LaptopGif from './_sections/LaptopGif'

export default function Home() {
  return (
    <>
      <LenisProvider>
        <LandingNavbar />
        <div className="space-y-4 md:space-y-8">
          <Hero />
          <Intro />
          <FeatureSlider />
          <ExploreMarquee />
          <Stats />
          <StickySteps />
          <LaptopGif />
          <div className="py-12">
            <Faq />
          </div>
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}
