'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(SplitText, ScrollTrigger)

export function useRevealSplit(scope: React.RefObject<HTMLElement>) {
  useGSAP(
    () => {
      const q = gsap.utils.selector(scope)
      const elements = q('[data-reveal-split]') // all marked children
      elements.forEach(el => {
        const split = SplitText.create(el, { type: 'lines', mask: 'lines' })
        gsap.from(split.lines, {
          y: '100%',
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 65%', once: true },
          onComplete: () => split.revert(),
        })
      })
    },
    { scope },
  )
}
