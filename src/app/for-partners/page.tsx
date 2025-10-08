'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import FPHero from '../_sections/forPartners/FPHero'
import Benefits from '../_sections/forPartners/Benefits'
import FaqSection from '../_sections/Faq'
import FaFeatures from '../_sections/forPartners/FaFeatures'
import LenisProvider from '@/shared/lib/LenisProvider'
import PathScrollSteps from '../_sections/forPartners/PathScrollSteps'
import MainFooter from '@/shared/components/layout/MainFooter'
import LandingNavbar from '@/shared/components/layout/LandingNavbar'

gsap.registerPlugin(useGSAP)

const ForPartnersPage = () => {
  return (
    <>
      <LenisProvider>
        <LandingNavbar />
        <div className="space-y-4 md:space-y-8">
          <FPHero />
          <Benefits />
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
