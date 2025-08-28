'use client'
import Section from '@/shared/components/layout/Section'
import LocationIcon from '@/shared/assets/icons/where_to_vote.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import CalendarIcon from '@/shared/assets/icons/calendar_clock.svg'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'

const cards = [
  {
    title: 'Trusted local favorites',
    icon: LocationIcon,
    description: 'Only the best - every experience is verified and selected by our team',
  },
  {
    title: 'Seamless booking',
    icon: BookingIcon,
    description: 'Book your favorite activities in just a few taps. Simple, fast, and stress-free.',
  },
  {
    title: 'Flexible for any schedule',
    icon: CalendarIcon,
    description:
      "Whether you're free on weekends or just an hour after work, find activities that fit your life.",
  },
]

const Intro = () => {
  useGSAP(() => {
    gsap.registerPlugin(SplitText)
    const titleSplit = new SplitText('#intro-title', {
      type: 'lines',
      mask: 'lines',
    })

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      scrollTrigger: {
        trigger: '#intro',
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
        '#intro-grid',
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
  })

  return (
    <Section id="intro" className="flex min-h-[70dvh] snap-center flex-col justify-center">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3">
        <h3 id="intro-title" className="text-h2 md:col-span-2">
          Tryall is the first two-sided platform built for local experience providers and the
          communities they serve. We make it easy to discover, book, and manage unique experiences
          while helping businesses grow, reach new audiences, and strengthen community—all through
          one simple subscription.
        </h3>
        <div id="intro-grid" className="col-span-full grid grid-cols-subgrid">
          {cards.slice(0, 3).map(({ title, icon: Icon, description }) => (
            <div key={title} className="col-span-1">
              <div className="w-auto">
                <Icon className="h-[8rem] w-[8rem]" aria-hidden="true" />
                <h4 className="text-sub1">{title}</h4>
                <p className="text-body2 mt-1 max-w-1/2">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Intro
