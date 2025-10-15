'use client'
import LenisProvider from '@/shared/lib/LenisProvider'
import Hero from '../_sections/Hero'

import Intro from '../_sections/Intro'
import StickySteps from '../_sections/StickySteps'
import Faq from '../_sections/Faq'
import MainFooter from '@/shared/components/layout/MainFooter'
import FunMarquee from '../_sections/ExploreMarquee'
import ExploreMore from '../for-partners/_sections/ExploreMore'
import Stats from '../_sections/Stats'
import PathScrollSteps from '../for-partners/_sections/PartnerSteps'
import Benefits from '../for-partners/_sections/Benefits'
import FeatureSlider from '../_sections/UserFeatureSlider'

export default function GSAPPage() {
  return (
    <>
      <LenisProvider>
        <div className="space-y-4 md:space-y-8">
          <Hero />
          <FunMarquee />
          <Intro />
          <Benefits />
          <ExploreMore />
          <Stats />
          <StickySteps />
          <FeatureSlider />
          <Faq />
          <PathScrollSteps />
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}
