'use client'

import LocationIcon from '@/shared/assets/icons/where_to_vote.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import CalendarIcon from '@/shared/assets/icons/calendar_clock.svg'
import HikingIcon from '@/shared/assets/icons/hiking.svg'

import Section from '@/shared/components/layout/Section'
import { gsap, useGSAP } from '@/shared/lib/gsap'
import { useRef } from 'react'

type SvgIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>

export const STEPS: {
  id: string
  title: string
  description: string
  icon: SvgIcon
}[] = [
  {
    id: '01',
    title: 'Sign up',
    description:
      'Join us by signing up and selecting the subscription plan that best fits your needs.',
    icon: LocationIcon,
  },
  {
    id: '02',
    title: 'Discover',
    description: 'Browse a variety of activities that match your interests and preferences.',
    icon: BookingIcon,
  },
  {
    id: '03',
    title: 'Book',
    description: 'Book your next experience quickly and easily—just a few clicks and you’re set.',
    icon: CalendarIcon,
  },
  {
    id: '04',
    title: 'Explore!',
    description:
      "Show up, enjoy, and make the most of your experience. We've got the details covered!",
    icon: HikingIcon,
  },
]

export function StepCard({
  id,
  title,
  description,
  icon: Icon,
}: {
  id: string
  title: string
  description: string
  icon: SvgIcon
  className?: string
}) {
  return (
    <div className="flex h-full flex-col px-6 py-5">
      <div className="text-h2 text-primary">{id}</div>
      <div className="flex flex-1 flex-col items-center justify-between">
        <Icon className="size-37 self-center md:size-38 xl:size-42" aria-hidden="true" />
        <div className="space-y-3">
          <div className="3xl:text-[2.5rem] text-foreground-teal text-[1.5rem] font-bold md:text-[2rem] xl:text-[2.25rem]">
            {title}
          </div>
          <div className="text-foreground-teal 3xl:text-2xl text-sm xl:text-xl">{description}</div>
        </div>
      </div>
    </div>
  )
}

const StickySteps = () => {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          pinSpacing: true,
          start: 'top top+=30',
          end: '+=2000',
          pin: true,
          scrub: 0.5,
        },
      })

      tl.addLabel('card1')
      tl.to('#card-1', {
        yPercent: 0,
        opacity: 1,
      })

      tl.from('#card-2', {
        yPercent: 75,
        opacity: 0,
      })
      tl.addLabel('card2')
      tl.to(
        '#card-1',
        {
          scale: 0.925,
          yPercent: -0.75,
          opacity: 1,
        },
        '-=0.3',
      )
      tl.to('#card-2', {
        yPercent: 0,
        opacity: 1,
      })

      // Animation for card 3
      tl.from('#card-3', {
        yPercent: 75,
        opacity: 0,
      })
      tl.addLabel('card3')
      tl.to(
        '#card-2',
        {
          scale: 0.95,
          yPercent: -0.5,
          opacity: 1,
        },
        '-=0.3',
      )
      tl.to('#card-3', {
        yPercent: 0,
        opacity: 1,
      })

      // Animation for card 4
      tl.from('#card-4', {
        yPercent: 75,
        opacity: 0,
      })
      tl.addLabel('card4')
      tl.to(
        '#card-3',
        {
          scale: 0.98,
          yPercent: -0.4,
          opacity: 1,
        },
        '-=0.3',
      )
      tl.to('#card-4', {
        yPercent: 0,
        opacity: 1,
      })

      tl.to(
        '#card-1',
        {
          scale: 0.925,
          yPercent: -1.5,
          opacity: 0.9,
        },
        '-=0.3',
      )

      tl.to(
        '#card-2',
        {
          scale: 0.95,
          yPercent: -1.125,
          opacity: 1,
        },
        '-=0.3',
      )

      tl.to(
        '#card-3',
        {
          scale: 0.98,
          yPercent: -0.85,
          opacity: 1,
        },
        '-=0.3',
      )
    },
    { scope: scope },
  )

  return (
    <Section
      ref={scope}
      className="cards-section relative w-full rounded-3xl"
      id="sticky-steps"
      background="teal"
    >
      <h3 className="text-semibold mx-auto text-center text-[1.25rem] md:text-[1.75rem] xl:w-3/4 xl:text-[2rem]">
        Turn your curiosity into memories in just 4 steps. A quick and easy process to bring your
        next experience to life.
      </h3>
      <div className="cards-container text-foreground-light">
        <div id="card-1" className="card top-0 rounded-3xl">
          <StepCard
            id="01"
            title="Sign up"
            description="Join us by signing up and selecting the subscription plan that best fits your needs."
            icon={LocationIcon}
          />
        </div>
        <div id="card-2" className="card top-[30px]">
          <StepCard
            id="02"
            title="Discover"
            description="Browse a variety of activities that match your interests and preferences."
            icon={BookingIcon}
          />
        </div>
        <div id="card-3" className="card top-[60px]">
          <StepCard
            id="03"
            title="Book"
            description="Book your next experience quickly and easily—just a few clicks and you’re set."
            icon={CalendarIcon}
          />
        </div>
        <div id="card-4" className="card top-[90px]">
          <StepCard
            id="04"
            title="Explore!"
            description="Show up, enjoy, and make the most of your experience. We've got the details covered!"
            icon={HikingIcon}
          />
        </div>
      </div>
    </Section>
  )
}

export default StickySteps
