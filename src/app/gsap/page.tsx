'use client'
import { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import Hero from '../_sections/Hero'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

import Intro from '../_sections/Intro'
import Features from '../_sections/Features'
import StickySteps from '../_sections/StickySteps'
import Faq from '../_sections/Faq'
import MainFooter from '@/shared/components/layout/MainFooter'
import FunMarquee from '../_sections/FunMarquee'

gsap.registerPlugin(useGSAP)

export default function GSAPPage() {
  const scrollContainer = useRef(null)

  return (
    <>
      <ReactLenis root>
        <div ref={scrollContainer}>
          <Hero />
          <Intro />
          <FunMarquee />
          <Features />
          <StickySteps />
          <Faq />
        </div>
        <MainFooter />
      </ReactLenis>
    </>
  )
}
