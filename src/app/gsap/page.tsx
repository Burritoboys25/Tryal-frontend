'use client'
import Section from '@/shared/components/layout/Section'
import Hero from '../_sections/Hero'

// import RevealWrapper from '@/shared/components/animations/RevealWrapper'

import { useRef } from 'react'

import { ReactLenis } from 'lenis/react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import Intro from '../_sections/Intro'
import Features from '../_sections/Features'
import StickySteps from '../_sections/StickySteps'

gsap.registerPlugin(useGSAP)

export default function GSAPPage() {
  const scrollContainer = useRef(null)

  return (
    <>
      <ReactLenis root>
        <div ref={scrollContainer}>
          <Section>
            <Hero />
          </Section>
          <Intro />
          <Features />
          <StickySteps />
          <div className="h-[100dvh]" />
        </div>
      </ReactLenis>
    </>
  )
}
