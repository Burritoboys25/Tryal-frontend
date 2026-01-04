'use client'
import Section from '@/shared/components/layout/Section'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'
import { useRef } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'

const FPHero = () => {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText)
      const heroSplit = new SplitText('.title', {
        type: 'lines',
        mask: 'lines',
      })
      const subSplit = new SplitText('.sub-text', {
        type: 'lines',
        mask: 'lines',
      })
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.add('start')
        .from(
          heroSplit.lines,
          { yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.12 },
          'start+=0.6',
        )
        .from(subSplit.lines, { yPercent: 100, opacity: 0, duration: 1.2 }, 'start+=1.2')
        .from('.cta-form', { yPercent: 100, opacity: 0, duration: 1.2 }, 'start+=1.4')
      return () => {
        heroSplit.revert()
        subSplit.revert()
      }
    },
    { scope },
  )

  return (
    <Section
      id="fphero"
      ref={scope}
      className="grid min-h-screen grid-cols-1 overflow-x-hidden md:grid-cols-12 2xl:px-24"
      background="light-teal"
    >
      {/* Left Side */}
      <div className="row-start-2 self-start px-4 md:col-span-6 md:row-start-1 md:self-center md:px-4 lg:col-span-5">
        <div data-reveal-split>
          <h1 className="hero-text title text-[#09272E]">
            Grow.
            <br />
            Reach.
            <br />
            Repeat.
          </h1>
          <p className="text-sub2 sub-text mt-2 mb-4 text-[#09272E] md:max-w-xl">
            Tryal helps you showcase your experiences, maximize bookings, and connect with the right
            audience.{' '}
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="cta-form">
            <Button variant="solid">
              <Link href="/partner-waitlist">Become a partner</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="mask-fade-y h-[50vh] py-16 md:col-span-6 md:h-[90vh] lg:col-span-7">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <video
            src="/BusinessHeroVid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-110 object-cover object-center md:scale-125"
          />
        </div>
      </div>
    </Section>
  )
}

export default FPHero
