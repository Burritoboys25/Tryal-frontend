'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import Hero from './_sections/Hero'
import Benefits from './_sections/Benefits'
import Faq from '../../shared/components/ui/faq/Faq'
import FeatureSlider from '@/shared/components/ui/feature-slider/FeatureSlider'
import LenisProvider from '@/shared/lib/LenisProvider'
import PartnerSteps from './_sections/PartnerSteps'
import MainFooter from '@/shared/components/layout/MainFooter'
import LandingNavbar from '@/shared/components/layout/LandingNavbar'

gsap.registerPlugin(useGSAP)

const ForPartnersPage = () => {
  return (
    <>
      <LenisProvider>
        <LandingNavbar />
        <div className="space-y-4 md:space-y-8">
          <Hero />
          <Benefits />
          <FeatureSlider audience="partner" />
          <PartnerSteps />
          <div className="pb-12">
            <Faq audience={'partner'} />
          </div>
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}

export default ForPartnersPage
