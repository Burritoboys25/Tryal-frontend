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
    title: 'Smarter Pricing, Bigger Impact',
    body: 'Let AI help you fine-tune prices based on real demand, seasonality, and class popularity — not just raise them. Adjust class sizes or offer special rates to fill slow days, while insights guide you toward the best times and price points to increase bookings and overall revenue.',
    image: '/demos/peaktimes.gif',
    accent: 'bg-[#F4BCAB]',
  },
  {
    id: 'dashboard',
    tab: 'All-in-One Dashboard',
    title: 'Manage Everything from One Smart Hub',
    body: 'Manage your entire business from a single place. Track bookings, monitor performance, and gain insights that help you grow—without juggling multiple tools.',
    image: '/demos/spider.gif',
    accent: 'bg-[#81CFC0]',
  },
  {
    id: 'booking',
    tab: 'Real-Time Flexibility',
    title: 'Reschedule Without the Stress',
    body: 'Stay adaptable when plans change. Update class times, adjust capacity, or reschedule experiences in just a few clicks — no hassle, no lost opportunities.',
    image: '/demos/calendar.gif',
    accent: 'bg-[#ABE7F4]',
  },
]

const PartnerFeatureSlider = () => {
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
      className="w-full snap-center flex-col justify-center px-4 md:px-9"
    >
      {/* <div className="mr-auto w-full max-w-[789px]">
        <h2 className="text-h2 mb-2 pb-8 text-3xl font-bold">
          Running a local business is hard enough without spending hours on marketing, managing
          bookings, and filling seats.
        </h2>
      </div> */}
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
          <div className="flex h-full max-w-full gap-6 sm:max-w-full lg:max-w-full">
            {SLIDES.map((s, i) => (
              <div
                key={s.id}
                ref={el => {
                  itemRefs.current[i] = el
                }}
                className="h-full max-w-full shrink-0 snap-start lg:max-w-full"
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
    <div className="grid grid-cols-1 gap-4 xl:max-h-[569px] xl:grid-cols-[454px_1fr] 2xl:max-h-[700px] 2xl:grid-cols-[1fr_3fr]">
      {/* Left panel */}
      <div
        className={[
          'rounded-[2rem] p-6 sm:p-8 lg:col-span-1 lg:p-10',
          slide.accent ?? 'bg-amber-200',
          'text-[#2E1109]',
        ].join(' ')}
      >
        <div className="flex h-full flex-col justify-between">
          <h2 className="text-background text-h2 mt-4 leading-tight font-semibold tracking-tight whitespace-pre-line">
            {slide.title}
          </h2>
          <p className="text-sub4 text-background w-full">{slide.body}</p>
        </div>
      </div>

      {/* Right panel: device frame */}
      <div className="bg-surface-light relative mx-auto h-full w-full overflow-hidden rounded-3xl shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)]">
        {slide.image.includes('.gif') ? (
          <div className="flex h-full w-full items-center justify-center bg-[#fdfdfd] p-4">
            <img src={slide.image} className="max-h-full max-w-full object-contain" />
          </div>
        ) : (
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={false}
          />
        )}
      </div>
    </div>
  )
}

export default PartnerFeatureSlider
