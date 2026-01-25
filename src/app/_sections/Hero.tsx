'use client'
import InterestWaitlistForm from '@/modules/waitlist/components/InterestWaitlistForm'
import Section from '@/shared/components/layout/Section'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'
import { useRef } from 'react'

const Hero = () => {
  const scope = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })
      tl.add('start') // label to align cleanly

      SplitText.create('.title', {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: 'power4.out',
            paused: true,
          })
          tl.add(tween.play(), 'start+=0.6')
          return tween
        },
      })

      SplitText.create('.sub-text', {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: 'power4.out',
            paused: true,
          })
          tl.add(tween.play(), 'start+=1.2')
          return tween
        },
      })

      tl.from('.cta-form', { yPercent: 100, opacity: 0, duration: 1.2 }, 'start+=1.4')
    },
    { scope: scope },
  )

  return (
    <Section
      id="hero"
      ref={scope}
      className="grid min-h-screen grid-cols-1 overflow-x-hidden md:grid-cols-12 2xl:px-24"
      background="light-teal"
    >
      {/* Left Side */}
      <div className="row-start-2 self-start px-4 md:col-span-6 md:row-start-1 md:self-center md:px-4 lg:col-span-5">
        <div data-reveal-split>
          <h1 className="hero-text title text-[#09272E]">
            Discover.
            <br />
            Experience.
            <br />
            Repeat.
          </h1>
          <p className="sub-text mt-2 mb-4 text-sm text-[#09272E] md:max-w-xl lg:text-2xl">
            From hidden gems to thrilling adventures—find and book unforgettable experiences all in
            one place.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="cta-form">
            <InterestWaitlistForm inputStyles="text-foreground-teal opacity-100 bg-white/20" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="mask-fade-y h-[50vh] py-16 md:col-span-6 md:h-[90vh] lg:col-span-7">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <video
            src="/UserHeroVid.mp4"
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

export default Hero
