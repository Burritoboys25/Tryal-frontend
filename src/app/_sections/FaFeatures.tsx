'use client'
import Section from '@/shared/components/layout/Section'
import { useRevealSplit } from '@/shared/components/animations/hooks/useSplitTextReveal'
import { useRef, useEffect, useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import Image from 'next/image'

type Slide = {
  id: string
  tab: string
  eyebrow?: string
  title: string
  body: string
  image: string
  accent?: string
}

const SLIDES: Slide[] = [
  {
    id: 'pricing',
    tab: 'Smart Pricing & Optimization',
    eyebrow: 'Demand-Driven Intelligence',
    title: 'Smarter Pricing, Bigger Impact',
    body: 'Automatically adjust your prices based on demand, seasonality, and class popularity. Open or reduce class sizes as needed, while AI-powered insights recommend the best times and price points to maximize bookings and revenue. Think of it as surge-pricing — but built for your business.',
    image: '/calendar.png',
    accent: 'bg-[#F4BCAB]',
  },
  {
    id: 'seasonal',
    tab: 'Seasonal & Event-Based Pricing',
    eyebrow: 'Holiday & Event Flexibility',
    title: 'Match Your Prices to the Moment',
    body: 'Take advantage of holidays, seasons, and local events. Whether it’s a Valentine’s workshop, summer festival, or holiday special, you can instantly tailor your pricing to fit the occasion.',
    image: '/landing_page_img_1.png',
    accent: 'bg-[#81CFC0]',
  },
  {
    id: 'booking',
    tab: 'Real-Time Flexibility',
    eyebrow: 'Instant Scheduling Control',
    title: 'Reschedule Without the Stress',
    body: 'Weather, cancellations, or shifting schedules? No problem. Easily edit or reschedule your experiences in just a few clicks, keeping your business running smoothly.',
    image: '/landing_page_img_2.png',
    accent: 'bg-[#ABE7F4]',
  },
]

const FaFeatures = () => {
  const scope = useRef<HTMLElement>(null!)
  useRevealSplit(scope)
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const goTo = (i: number) => {
    const el = itemRefs.current[i]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]

    const io = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const i = items.findIndex(x => x === visible.target)
        if (i !== -1) setIndex(i)
      },
      {
        root: track,
        threshold: [0.5, 0.75, 0.9],
      },
    )

    items.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const prev = () => goTo(Math.max(0, index - 1))
  const next = () => goTo(Math.min(SLIDES.length - 1, index + 1))

  return (
    <Section
      id="fa-feature"
      full
      className="ml-8 w-full snap-center flex-col justify-center px-4 md:px-9"
      background="none"
    >
      <h2 className="text-h2 mb-2 text-3xl font-bold">Dynamic Pricing & Scheduling Made Easy</h2>
      <p className="mb-4 text-lg">
        Your business isn’t one-size-fits-all — your pricing and scheduling shouldn’t be either.
        With Tryal, you have the freedom to:
      </p>
      <div
        className="relative h-full w-full text-white"
        aria-label="Fa Feature slider"
        onKeyDown={e => {
          if (e.key === 'ArrowLeft') prev()
          if (e.key === 'ArrowRight') next()
        }}
        tabIndex={0}
      >
        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-3">
          {SLIDES.map((s, i) => (
            <Button
              key={s.id}
              onClick={() => goTo(i)}
              className={[
                'hover:bg-surface-teal/80 hidden rounded-full px-4 py-2 text-sm transition md:block',
                'bg-[#124E5B]',
                'text-foreground-dark',
                i === index ? 'bg-primary hover:bg-primary/90 ring-1 ring-white/10' : '',
              ].join(' ')}
              aria-pressed={i === index}
            >
              {s.tab}
            </Button>
          ))}
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          className="noScrollbar relative h-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          <div className="flex h-full w-[92vw] min-w-full gap-6 sm:w-[88vw] lg:w-full">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                ref={el => {
                  itemRefs.current[i] = el
                }}
                className="h-full w-[92vw] shrink-0 snap-start sm:w-[88vw] lg:w-full"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${SLIDES.length}`}
              >
                <SlideCard slide={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-4">
      {/* Left panel */}
      <div
        className={[
          'rounded-[2rem] p-6 sm:p-8 lg:col-span-1 lg:p-10',
          slide.accent ?? 'bg-amber-200',
          'text-neutral-900',
        ].join(' ')}
      >
        <div className="flex h-full max-w-[75%] flex-col justify-between">
          <h2 className="text-h2 mt-4 leading-tight font-semibold tracking-tight whitespace-pre-line">
            {slide.title}
          </h2>
          <p className="text-sub4">{slide.body}</p>
        </div>
      </div>

      {/* Right panel: device frame */}
      <div className="relative rounded-[2rem] lg:col-span-3">
        <div className="relative mx-auto aspect-[16/7] w-full overflow-hidden rounded-2xl bg-white shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)]">
          {/* status bar bump */}
          <div className="absolute top-2 left-1/2 h-2 w-24 -translate-x-1/2 rounded-full bg-neutral-200/80" />

          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}

export default FaFeatures
