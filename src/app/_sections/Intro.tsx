'use client'
import Section from '@/shared/components/layout/Section'
import LocationIcon from '@/shared/assets/icons/where_to_vote.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import CalendarIcon from '@/shared/assets/icons/calendar_clock.svg'
import { useRef } from 'react'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'

const cards = [
  {
    title: 'Seamless booking',
    icon: BookingIcon,
    description: 'Book your favorite activities in just a few taps. Simple, fast, and stress-free.',
  },
  {
    title: 'Support local & small businesses',
    icon: LocationIcon,
    description:
      'Every booking helps local instructors, artists, and entrepreneurs grow their passion.',
  },
  {
    title: 'Unleash your inner explorer',
    icon: CalendarIcon,
    description: 'Break away from the usual and dive into new hobbies and experiences.',
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
      const itemSplit = new SplitText('[data-anim="split-reveal"]', {
        type: 'lines',
        mask: 'lines',
      })

      const icons = gsap.utils.toArray('[data-anim="fade-in"]') // Element[]

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
          itemSplit.lines,
          {
            yPercent: 100,
            duration: 1,
            stagger: 0.06,
          },
          'start+=1',
        )
        .from(icons, { autoAlpha: 0, duration: 1, stagger: 0.06 }, 'start+=1')

      return () => {
        titleSplit.revert()
        itemSplit.revert()
      }
    },
    { scope: scope },
  )

  return (
    <Section
      id="intro"
      className="flex min-h-[70dvh] snap-center flex-col justify-center"
      ref={scope}
      background="teal"
    >
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-y-16">
        <h3
          id="intro-title"
          className="overflow-visible text-xl md:col-span-3 md:max-w-1/2 md:text-4xl md:font-semibold"
        >
          Welcome to Tryal, the easiest way to explore and book experiences near you—or halfway
          across the world. Whether you&apos;re craving adventure, relaxation, or something totally
          new, we&apos;ve got curated options to fit every mood.
        </h3>
        <div
          id="intro-grid"
          className="col-span-full grid grid-cols-subgrid space-y-8 md:space-y-16"
        >
          {cards.slice(0, 3).map(({ title, icon: Icon, description }) => (
            <div key={title} className="col-span-1 flex gap-3 md:max-w-4/5">
              <Icon className="size-11" aria-hidden="true" data-anim="fade-in" />
              <div>
                <h4 className="text-sub1" data-anim="split-reveal">
                  {title}
                </h4>
                <p className="text-sub4 w-full" data-anim="split-reveal">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Intro
