'use client'
import Section from '@/shared/components/layout/Section'
import AnimateNumberTo from '@/shared/lib/animations/AnimateNumberTo'
import { useGSAP, SplitText, gsap } from '@/shared/lib/gsap'
import { useRef } from 'react'

const Stats = () => {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      tl.add('start')

      SplitText.create('[data-anim="split-reveal"]', {
        type: 'lines',
        mask: 'lines',
        autoSplit: true,
        onSplit(self) {
          const tween = gsap.from(self.lines, {
            yPercent: 100,
            duration: 1,
            ease: 'power4.out',
            paused: true,
            onComplete: () => self.revert()
          })
          tl.add(tween.play(), 'start')
          return tween
        },
      })

    },
    { scope: containerRef },
  )

  return (
    <Section id="stats" className="px-4 md:px-9" full ref={containerRef}>
      <div className="grid min-h-76 items-center gap-4 md:grid-cols-2 md:gap-8">
        <div className="bg-surface-light-orange text-foreground-light h-full rounded-2xl p-8 md:p-12">
          <h3 className="mb-4 text-6xl font-medium md:text-8xl" data-anim="from-to">
            <AnimateNumberTo start={0} end={1} suffix="" /> in{' '}
            <AnimateNumberTo start={0} end={4} suffix="" />
          </h3>
          <p className="text-[1rem] md:text-[1.5rem]" data-anim="split-reveal">
            Americans say their life feels boring or stuck in a routine.
          </p>
        </div>
        <div className="bg-surface-light-orange text-foreground-light h-full rounded-2xl p-8 md:p-12">
          <h3 className="mb-2 text-6xl font-medium md:mb-4 md:text-8xl" data-anim="from-to">
            <AnimateNumberTo start={0} end={76} suffix="%" />
          </h3>
          <p className="text-[1rem] md:text-[1.5rem]" data-anim="split-reveal">
            of people would rather spend money on experiences than material things.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Stats
