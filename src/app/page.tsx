'use client'

import Hero from '@/app/_sections/Hero'
import Faq from './_sections/Faq'
import Intro from './_sections/Intro'
import LenisProvider from '@/shared/lib/LenisProvider'
import MainFooter from '@/shared/components/layout/MainFooter'
import Features from './_sections/Features'
import StickySteps from './_sections/StickySteps'
import Stats from './_sections/Stats'
import FunMarquee from './_sections/FunMarquee'
import FeatureSlider from './_sections/FeatureSlider'

export default function Home() {
  return (
    <>
      <LenisProvider>
        <div className="space-y-4 md:space-y-8">
          <Hero />
          <Intro />
          <FeatureSlider />
          <FunMarquee />
          <Stats />
          <StickySteps />
          {/* Features will be the laptop gif */}
          <Features />
          <div className="py-12">
            <Faq />
          </div>
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}
