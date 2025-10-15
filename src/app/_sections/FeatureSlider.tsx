'use client'

import Section from '@/shared/components/layout/Section'
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
    id: 'events',
    tab: 'Events',
    title: 'Stay in the know\nwith live events.',
    body: 'Discover upcoming experiences and live events near you. From workshops to classes, there’s always something new to join.',
    image: '/landing_page_img_1.png',
    accent: 'bg-[#ABE7F4]',
  },
  {
    id: 'community',
    tab: 'Community',
    title: 'Connect with Like-Minded Explorers',
    body: 'Join a community of curious adventurers. Share tips, meet friends, and be inspired by others’ experiences.',
    image: '/landing_page_img_1.png',
    accent: 'bg-[#F4BCAB]',
  },
  {
    id: 'seasonal',
    tab: 'Seasonal',
    title: 'Celebrate the Season',
    body: 'Explore experiences tailored to the season. From summer adventures to winter retreats, find activities that fit the moment.',
    image: '/landing_page_img_1.png',
    accent: 'bg-[#B3E2D9]',
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
    <Section
      id="feature"
      full
      className="w-full snap-center flex-col justify-center px-4 md:px-9"
      background="dark-teal"
    >
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
    <div className="grid h-full grid-cols-1 items-stretch gap-4 lg:grid-cols-2 xl:grid-cols-4">
      {/* Left panel */}
      <div
        className={[
          'rounded-[2rem] p-6 sm:p-8 lg:col-span-1 lg:p-10',
          slide.accent ?? 'bg-amber-200',
          'text-[#2E1109]',
        ].join(' ')}
      >
        <div className="flex h-full flex-col justify-between">
          <h2 className="text-h2 text-background mt-4 w-[75%] leading-tight font-semibold tracking-tight whitespace-pre-line">
            {slide.title}
          </h2>
          <p className="text-sub4 text-background w-full">{slide.body}</p>
        </div>
      </div>

      {/* Right panel: device frame */}
      <div className="relative lg:col-span-1 xl:col-span-3">
        <div className="relative mx-auto aspect-[16/7] h-full w-full overflow-hidden rounded-3xl bg-white shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)]">
          {slide.image.includes('.mp4') ? (
            <video src={slide.image} autoPlay loop muted className="object-cover object-center" />
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
    </div>
  )
}
