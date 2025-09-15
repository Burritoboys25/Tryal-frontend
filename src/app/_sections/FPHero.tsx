'use client'

import SplitText from 'gsap/SplitText'
import { gsap, useGSAP } from '@/shared/lib/gsap'
import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { useState } from 'react'

const FPHero = () => {
  const [isOpen, setIsOpen] = useState(false)

  useGSAP(() => {
    gsap.registerPlugin(SplitText)
    const heroSplit = new SplitText('.title', {
      type: 'lines',
      mask: 'lines',
    })
    const subSplit = new SplitText('.sub-text', {
      type: 'lines',
      mask: 'lines',
    })

    gsap.from('.fphero-section', {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: '.fphero-section',
        start: 'top 80%',
      },
    })

    gsap.from(heroSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.06,
      delay: 0.2,
      scrollTrigger: {
        trigger: '.fphero-section',
        start: 'top 80%',
      },
    })
    gsap.from(subSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.06,
      delay: 0.4,
      scrollTrigger: {
        trigger: '.fphero-section',
        start: 'top 80%',
      },
    })
    gsap.from('.cta-container', {
      width: 0,
      opacity: 0,
      duration: 1.2,
      delay: 0.6,
      scrollTrigger: {
        trigger: '.fphero-section',
        start: 'top 80%',
      },
    })

    return () => {
      heroSplit.revert()
      subSplit.revert()
      gsap.killTweensOf('.fphero-section')
      gsap.killTweensOf(heroSplit.words)
      gsap.killTweensOf(subSplit.words)
      gsap.killTweensOf('.cta-container')
    }
  }, [])

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <section className="fphero-section flex h-screen snap-start flex-col items-center justify-center overflow-hidden px-6 text-center">
      <h1 className="hero-text title whitespace-nowrap text-white">
        Grow Your Business.
        <span className="mt-1 block">Reach More Customers.</span>
      </h1>
      <div className="cta-container mt-10 flex flex-col items-center gap-4">
        <p className="text-sub1 sub-text whitespace-nowrap text-white">
          Tryal helps you showcase your experiences, maximize bookings, and connect with the right
          audience.
        </p>
        <Button onClick={handleClick} variant="solid">
          <Link href="/partner-waitlist">Become a partner</Link>
        </Button>
      </div>
    </section>
  )
}

export default FPHero
