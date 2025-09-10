'use client'

import Section from '@/shared/components/layout/Section'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { registerGSAPScrollTrigger } from '@/shared/lib/registerGSAPScrollTrigger'

import SignupIcon from '@/shared/assets/icons/signup.svg'
import DiscoverIcon from '@/shared/assets/icons/discover.svg'
import BookIcon from '@/shared/assets/icons/book.svg'

const steps = [
  {
    title: 'Apply & Get Verified',
    icon: SignupIcon,
    description:
      'We carefully verify each partner to ensure a safe and high-quality experience for customers.',
  },
  {
    title: 'Register Experiences & Set Prices',
    icon: DiscoverIcon,
    description: 'Quickly list your activities, set pricing, and manage availability.',
  },
  {
    title: 'Manage & Optimize',
    icon: BookIcon,
    description:
      'Explain dynamic pricing & flexible scheduling: adjust class sizes, times, or prices based on demand.',
  },
]

const FPHowItWorks = () => {
  useGSAP(() => {
    registerGSAPScrollTrigger()
    gsap.registerPlugin(SplitText)
    const titleSplit = new SplitText('#howitworks-title', {
      type: 'lines',
      mask: 'lines',
    })

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      scrollTrigger: {
        trigger: '#howitworks',
        start: 'top 65%',
        markers: true,
      },
    })

    tl.add('start')
      .from(titleSplit.lines, {
        yPercent: 100,
        duration: 1,
        stagger: 0.12,
      })
      .from(
        '#howitworks-grid',
        {
          opacity: 0,
          duration: 1,
          stagger: 0.12,
        },
        'start+=1',
      )

    return () => {
      titleSplit.revert()
    }
  }, [])

  return (
    <Section id="howitworks" className="flex min-h-[70dvh] snap-center flex-col justify-center">
      <h3 id="howitworks-title" className="text-h2 mb-12 text-center">
        How it works for partners: Grow your business by joining Tryal in just a few simple steps.
      </h3>
      <div id="howitworks-grid" className="flex w-full flex-col gap-y-12">
        {steps.map(({ title, icon: Icon, description }, idx) => (
          <div key={title} className="grid w-full grid-cols-1 items-center gap-x-8 md:grid-cols-2">
            {/* Image/Icon left */}
            <div className="mb-4 flex items-center justify-center md:mb-0 md:justify-end">
              <Icon className="h-[7rem] w-[7rem] rounded-xl shadow-lg" aria-hidden="true" />
            </div>
            {/* Text right */}
            <div className="flex flex-col justify-center" id={`howitworks-text-${idx}`}>
              <h4 className="text-sub1 howitworks-step-title mb-2">{title}</h4>
              <p className="text-body2 howitworks-step-desc max-w-md">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default FPHowItWorks
