'use client'

import React from 'react'
import Section from '@/shared/components/layout/Section'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import SignupIcon from '@/shared/assets/icons/signup.svg'
import DiscoverIcon from '@/shared/assets/icons/discover.svg'
import BookIcon from '@/shared/assets/icons/book.svg'
import ExplorationIcon from '@/shared/assets/icons/exploration.svg'

const benefits = [
  {
    title: 'Boost Your Visibility with the Right Audience',
    icon: SignupIcon,
    description:
      'Get your experiences in front of people actively searching for unique things to do in your city. No wasted ad spend — just direct access to new customers.',
  },
  {
    title: 'Earn More with Flexible Pricing & Scheduling',
    icon: DiscoverIcon,
    description:
      'Fill more seats by adjusting prices, class sizes, and availability based on demand. Our tools give you the flexibility to maximize revenue while keeping control.',
  },
  {
    title: 'Save Time with Seamless Bookings',
    icon: BookIcon,
    description:
      'Manage all your experiences in one place. From scheduling to payments, we streamline the process so you don’t need to juggle multiple platforms.',
  },
  {
    title: 'Gain Insights to Grow Smarter',
    icon: ExplorationIcon,
    description:
      'Track performance, customer trends, and booking patterns with real-time analytics — helping you understand what’s working and how to improve.',
  },
]

const FPBenefits = () => {
  useGSAP(() => {
    gsap.registerPlugin(SplitText)
    const titleSplit = new SplitText('#benefits-title', {
      type: 'lines',
      mask: 'lines',
    })

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      scrollTrigger: {
        trigger: '#benefits',
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
        '#benefits-grid',
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
    <Section id="benefits" className="flex min-h-[70dvh] snap-center flex-col justify-center">
      <h3 id="benefits-title" className="text-h2 mb-2 text-left">
        Running a local business is hard enough without spending hours on marketing, managing
        bookings, and filling seats. That’s why we built Tryal: a platform designed to help you get
        discovered, simplify operations, and grow revenue — all without extra overhead. With Tryal,
        you stay focused on what you do best: creating incredible experiences. We’ll handle the
        rest.{' '}
      </h3>
      <div className="border-black-300 mb-20 w-full border-b-4" />
      <div id="benefits-grid" className="flex w-full flex-col gap-y-12">
        {benefits.map(({ title, icon: Icon, description }, idx) => (
          <React.Fragment key={title}>
            <div className="flex w-full flex-col items-center gap-y-6 md:flex-row md:items-center md:justify-between">
              {/* Image/Icon left */}
              <div className="mb-4 flex w-full items-center justify-center md:mb-0 md:w-auto md:justify-start">
                <Icon className="h-[12rem] w-[12rem] rounded-xl shadow-lg" aria-hidden="true" />
              </div>
              {/* Text right */}
              <div
                className="flex w-full flex-col justify-center md:w-auto md:min-w-[40rem] md:items-start"
                id={`howitworks-text-${idx}`}
              >
                <h2 className="text-h2 howitworks-step-title mb-2 text-left md:text-left">
                  {title}
                </h2>
                <p className="text-body2 howitworks-step-desc max-w-md text-left md:text-left">
                  {description}
                </p>
              </div>
            </div>
            {idx < benefits.length - 1 && (
              <div className="my-6 h-px w-full bg-gray-300 opacity-60" />
            )}
          </React.Fragment>
        ))}
      </div>
    </Section>
  )
}

export default FPBenefits
