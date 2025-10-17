'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import Hero from './_sections/Hero'
import Benefits from './_sections/Benefits'
import Faq from '../_sections/Faq'
import PartnerFeatureSlider from './_sections/PartnerFeatureSlider'
import LenisProvider from '@/shared/lib/LenisProvider'
import PartnerSteps from './_sections/PartnerSteps'
import MainFooter from '@/shared/components/layout/MainFooter'
import LandingNavbar from '@/shared/components/layout/LandingNavbar'
import ForPartnerIntro from './_sections/ForPartnerIntro'

gsap.registerPlugin(useGSAP)

const ForPartnersPage = () => {
  return (
    <>
      <LenisProvider>
        <LandingNavbar />
        <div className="space-y-4 md:space-y-8">
          <Hero />
          <ForPartnerIntro />
          <Benefits />
          <PartnerFeatureSlider />
          <PartnerSteps />
          <div className="pb-12">
            <Faq />
          </div>
        </div>
        <MainFooter />
      </LenisProvider>
    </>
  )
}

export default ForPartnersPage
