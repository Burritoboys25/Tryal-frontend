'use client'
import Section from '@/shared/components/layout/Section'
import LocationIcon from '@/shared/assets/icons/where_to_vote.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import CalendarIcon from '@/shared/assets/icons/calendar_clock.svg'
import { useRef } from 'react'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'

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
  const scope = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      const titleSplit = new SplitText('#intro-title', {
        type: 'lines',
        mask: 'lines',
        linesClass: 'overflow-visible leading-[1.4]', // prevent line cuttoff
      })

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        scrollTrigger: {
          trigger: scope.current,
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
          '.grid-item',
          {
            opacity: 0,
            duration: 1,
            stagger: 0.06,
          },
          'start+=1',
        )

      return () => {
        titleSplit.revert()
      }
    },
    { scope: scope },
  )

  return (
    <Section
      id="intro"
      className="flex min-h-[70dvh] snap-center flex-col justify-center"
      ref={scope}
    >
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3">
        <h3 id="intro-title" className="text-h2 overflow-visible md:col-span-2">
          Tryall is the first two-sided platform built for local experience providers and the
          communities they serve. We make it easy to discover, book, and manage unique experiences
          while helping businesses grow, reach new audiences, and strengthen community—all through
          one simple subscription.
        </h3>
        <div id="intro-grid" className="col-span-full grid grid-cols-subgrid space-y-16">
          {cards.slice(0, 3).map(({ title, icon: Icon, description }) => (
            <div key={title} className="col-span-1">
              <Icon className="grid-item h-[8rem] w-[8rem]" aria-hidden="true" />
              <h4 className="grid-item text-sub1">{title}</h4>
              <p className="grid-item mt-1 w-full md:max-w-1/2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Intro
