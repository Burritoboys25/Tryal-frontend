'use client'

import Section from '@/shared/components/layout/Section'
import ReactLenis from 'lenis/react'
import { useRef } from 'react'
import FPHero from '../_sections/FPHero'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import HowItWorks from '../_sections/FPHowItWorks'
import Benefits from '../_sections/FPBenefits'

gsap.registerPlugin(useGSAP)

const HowItWorksPage = () => {
  const scrollContainer = useRef(null)

  return (
    <>
      <ReactLenis root>
        <div ref={scrollContainer}>
          <Section className="relative overflow-hidden rounded-2xl border px-2">
            <div className="absolute inset-0 z-0 bg-[url('/FPWelcome.png')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 z-10 bg-black/40" />
            <div className="relative z-20">
              <FPHero />
            </div>
          </Section>
          <HowItWorks />
          <Benefits />
          <div className="h-[100dvh]" />
        </div>
      </ReactLenis>
    </>
  )
}

export default HowItWorksPage
