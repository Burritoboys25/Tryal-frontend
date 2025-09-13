'use client'

import { Button } from '@/shared/components/ui/base/button'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

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
    id: 'credits',
    tab: 'Flexible Credits',
    eyebrow: 'Flexible Credits',
    title: 'One subscription.\nUnlimited experiences.',
    body: 'Use monthly credits to book fitness classes, cooking workshops, art sessions, and more. No hidden fees—just choose how you want to spend your credits.',
    image: '/landing_page_img_1.png',
    accent: 'bg-amber-200',
  },
  {
    id: 'discovery',
    tab: 'Discovery Tools',
    eyebrow: 'Discovery Tools',
    title: 'Find new experiences\naround every corner.',
    body: 'Browse gyms, studios, and local creators all in one app. Filter by location, category, or time to uncover experiences tailored to your lifestyle.',
    image: '/landing_page_img_1.png',
    accent: 'bg-emerald-200',
  },
  {
    id: 'booking',
    tab: 'Seamless Booking',
    eyebrow: 'Seamless Booking',
    title: 'Reserve your spot\nwith just a tap.',
    body: 'Instantly book and manage reservations with an intuitive calendar. Join in person or virtually without the hassle of phone calls or emails.',
    image: '/landing_page_img_1.png',
    accent: 'bg-sky-200',
  },
  {
    id: 'insights',
    tab: 'Personal Insights',
    eyebrow: 'Personal Insights',
    title: 'Track your journey\nand make it count.',
    body: 'See where your credits go, track attendance, and measure your progress. Personalized insights help you get the most out of your membership.',
    image: '/landing_page_img_1.png',
    accent: 'bg-violet-200',
  },
]

export default function FeatureSlider() {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const goTo = (i: number) => {
    const el = itemRefs.current[i]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  // Keep active index in sync when user swipes / resizes
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]

    const io = new IntersectionObserver(
      entries => {
        // Find the most visible card
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

  const dots = useMemo(() => new Array(SLIDES.length).fill(0), [])

  return (
    <section
      className="relative w-full py-2 text-white"
      aria-label="Feature slider"
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
              'hidden rounded-full px-4 py-2 text-sm transition md:block',
              // 'bg-neutral-800 hover:bg-neutral-700',
              i === index ? 'ring-2 ring-white/80' : 'ring-1 ring-white/10',
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
        className="noScrollbar relative snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        <div className="flex min-w-full gap-6">
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              ref={el => (itemRefs.current[i] = el)}
              className="w-[92vw] shrink-0 snap-start sm:w-[88vw] lg:w-full"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
            >
              <SlideCard slide={s} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-between">
        <div className="ml-auto flex gap-2">
          {dots.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={[
                'h-2.5 w-2.5 rounded-full transition',
                i === index ? 'bg-zinc-900' : 'bg-zinc-300 hover:bg-zinc-600',
              ].join(' ')}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
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
        {slide.eyebrow && (
          <span className="inline-flex items-center rounded-full bg-white/60 px-3 py-1 text-xs font-medium">
            {slide.eyebrow}
          </span>
        )}
        <h2 className="text-h2 mt-4 leading-tight font-bold tracking-tight whitespace-pre-line">
          {slide.title}
        </h2>
        <p className="text-body mt-4 text-neutral-700">{slide.body}</p>
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
