'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import FPHero from '../_sections/FPHero'
import Benefits from '../_sections/FPBenefits'
import FaqSection from '../_sections/Faq'
import FaFeatures from '../_sections/FaFeatures'
import LenisProvider from '@/shared/lib/LenisProvider'
import ExploreMore from '../_sections/ExploreMore'
import PathScrollSteps from '../_sections/PathScrollSteps'
import MainFooter from '@/shared/components/layout/MainFooter'

gsap.registerPlugin(useGSAP)

const ForPartnersPage = () => {
  return (
    <>
      <LenisProvider>
        <div className="space-y-4 md:space-y-8">
          <FPHero />
          <Benefits />
          <ExploreMore />
          <FaFeatures />
          <PathScrollSteps />
          <div className="pb-12">
            <FaqSection />
          </div>
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}

export default ForPartnersPage
