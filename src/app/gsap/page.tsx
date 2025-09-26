'use client'
import LenisProvider from '@/shared/lib/LenisProvider'
import Hero from '../_sections/Hero'

import Intro from '../_sections/Intro'
import Features from '../_sections/Features'
import StickySteps from '../_sections/StickySteps'
import Faq from '../_sections/Faq'
import MainFooter from '@/shared/components/layout/MainFooter'
import FunMarquee from '../_sections/FunMarquee'
import ExploreMore from '../_sections/ExploreMore'
import Stats from '../_sections/Stats'
import PathScrollSteps from '../_sections/PathScrollSteps'
import Benefits from '../_sections/Benefits'

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
          <Features />
          <Faq />
          <PathScrollSteps />
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}
