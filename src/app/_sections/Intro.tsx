'use client'
import Section from '@/shared/components/layout/Section'
import PottedPlantIcon from '@/shared/assets/icons/pottedPlant.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import HikingIcon from '@/shared/assets/icons/hiking.svg'
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
    icon: PottedPlantIcon,
    description:
      'Every booking helps local instructors, artists, and entrepreneurs grow their passion.',
  },
  {
    title: 'Unleash your inner explorer',
    icon: HikingIcon,
    description: 'Break away from the usual and dive into new hobbies and experiences.',
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
        <h3
          id="intro-title"
          className="overflow-visible text-xl md:col-span-3 md:max-w-3/4 md:text-2xl md:font-semibold 2xl:max-w-1/2 2xl:text-4xl"
        >
          Welcome to Tryal — the easiest way to discover and book experiences near you or halfway
          across the world. Whether you’re seeking adventure, relaxation, or something completely
          new, our platform curates activities to fit every mood and moment. With trusted hosts,
          flexible booking, and unique options you won’t find anywhere else, Tryal makes it simple
          to explore more and create lasting memories.
        </h3>
        <div
          id="intro-grid"
          className="col-span-full grid grid-cols-subgrid space-y-8 md:space-y-16"
        >
          {cards.slice(0, 3).map(({ title, icon: Icon, description }) => (
            <div key={title} className="col-span-1 flex gap-3 md:max-w-4/5">
              <Icon className="size-11" aria-hidden="true" data-anim="fade-in" />
              <div className='flex-1' data-anim="split-reveal">
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
