'use client'
import Section from '@/shared/components/layout/Section'
import PottedPlantIcon from '@/shared/assets/icons/pottedPlant.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import HikingIcon from '@/shared/assets/icons/hiking.svg'
import { useRef } from 'react'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'

const cards = [
  {
    title: 'Seamless Booking',
    icon: BookingIcon,
    description:
      'Find and reserve your next experience in just a few taps — quick, simple, and hassle-free.',
  },
  {
    title: 'Support Local & Small Businesses',
    icon: PottedPlantIcon,
    description:
      'Every booking empowers local instructors, artists, and small businesses to share their passion and thrive.',
  },
  {
    title: 'Unleash Your Inner Explorer',
    icon: HikingIcon,
    description:
      'Step outside your routine and discover new passions, hobbies, and unforgettable experiences.',
  },
]

const Intro = () => {
  const scope = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      const icons = gsap.utils.toArray('[data-anim="fade-in"]') // Element[]

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 65%',
        },
      })

      tl.add('start')

      SplitText.create('#intro-title', {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        linesClass: 'overflow-visible leading-[1.4]',
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 100,
            duration: 1,
            stagger: 0.12,
            ease: 'power4.out',
            paused: true,
          })

          tl.add(tween.play(), 'start')
          return tween
        },
      })

      SplitText.create('[data-anim="split-reveal"]', {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 100,
            duration: 1,
            stagger: 0.06,
            ease: 'power4.out',
            paused: true,
          })
          tl.add(tween.play(), 'start+=1')
          return tween
        },
      })

      tl.from(icons, { autoAlpha: 0, duration: 1, stagger: 0.06 }, 'start+=1')
    },
    { scope: scope },
  )

  return (
    <Section
      id="intro"
      className="flex min-h-[70dvh] flex-col justify-center py-14"
      ref={scope}
      background="none"
    >
      <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-y-24">
        <div className="md:col-span-3">
          <h3
            id="intro-title"
            className="overflow-visible text-xl font-semibold md:text-2xl md:font-bold 2xl:text-4xl"
          >
            Welcome to Tryal (pronounced <em>&ldquo;trial&rdquo;</em> &mdash; because life&apos;s
            better when you try it all).
          </h3>
          <br />
          <p
            className="overflow-visible text-xl md:max-w-3/4 md:text-2xl md:font-semibold 2xl:max-w-1/2 2xl:text-4xl"
            data-anim="split-reveal"
          >
            The easiest way to discover and book unforgettable experiences &mdash; from local
            workshops and pop-ups to adventures across the world. Whether you&apos;re looking to
            learn something new, unwind, or simply explore more, Tryal curates experiences to match
            every mood and moment. With trusted hosts, flexible booking, and one-of-a-kind options,
            discovering new things has never been this effortless.
          </p>
        </div>
        <div
          id="intro-grid"
          className="col-span-full grid grid-cols-subgrid space-y-8 md:space-y-16"
        >
          {cards.slice(0, 3).map(({ title, icon: Icon, description }) => (
            <div key={title} className="col-span-1 flex gap-3 md:max-w-4/5">
              <Icon className="size-20" aria-hidden="true" data-anim="fade-in" />
              <div className="flex-1" data-anim="split-reveal">
                <h4 className="text-sub1" data-anim="split-reveal">
                  {title}
                </h4>
                <p className="text-body2 md:text-sub4 w-full" data-anim="split-reveal">
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
