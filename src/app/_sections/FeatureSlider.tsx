'use client'

import { Button } from '@/shared/components/ui/base/button'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
    title: 'Connect with Like-Minded Explorers',
    body: 'Join a community of curious adventurers. Share tips, meet friends, and be inspired by others’ experiences.',
    image: '/landing_page_img_1.png',
    accent: 'bg-surface-light-blue',
  },
  {
    id: 'discovery',
    tab: 'Discovery Tools',
    title: 'Find new experiences\naround every corner.',
    body: 'Browse gyms, studios, and local creators all in one app. Filter by location, category, or time to uncover experiences tailored to your lifestyle.',
    image: '/landing_page_img_1.png',
    accent: 'bg-amber-200',
  },
  {
    id: 'booking',
    tab: 'Seamless Booking',
    title: 'Reserve your spot\nwith just a tap.',
    body: 'Instantly book and manage reservations with an intuitive calendar. Join in person or virtually without the hassle of phone calls or emails.',
    image: '/landing_page_img_1.png',
    accent: 'bg-sky-200',
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

  return (
    <div
      className="relative h-full w-full text-white"
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
              'hover:bg-surface-teal/80 hidden rounded-full px-4 py-2 text-sm transition md:block',
              'bg-surface-teal/80',
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
  )
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:h-[70dvh] lg:grid-cols-3">
      {/* Left panel */}
      <div
        className={[
          'rounded-[2rem] p-6 sm:p-8 lg:col-span-1 lg:p-8',
          slide.accent ?? 'bg-surface-light-blue',
          'text-foreground-light',
        ].join(' ')}
      >
        <div className="flex h-full max-w-[75%] flex-col justify-between">
          <h2 className="text-h2 mt-4 leading-tight font-semibold tracking-tight whitespace-pre-line">
            {slide.title}
          </h2>
          <p className="text-sub4">{slide.body}</p>
        </div>
      </div>

      {/* Middle Panel */}
      <div className="bg-surface-teal hidden rounded-2xl lg:col-span-1 lg:block" />

      {/* Right panel: device frame */}
      <div className="relative rounded-[2rem]">
        <div className="relative mx-auto h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)]">
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
