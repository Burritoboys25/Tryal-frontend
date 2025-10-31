'use client'
import Section from '@/shared/components/layout/Section'
import { useRevealSplit } from '@/shared/components/animations/hooks/useSplitTextReveal'
import { useRef, useEffect, useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import Image from 'next/image'

import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
type Slide = {
  id: string
  tab: string
  eyebrow?: string
  title: string
  body: string
  image: string
  accent?: string
  imageClassName?: string
}

const SLIDES: Slide[] = [
  {
    id: 'pricing',
    tab: 'Smart Pricing & Optimization',
    title: 'Smarter Pricing, Bigger Impact',
    body: 'Automatically adjust your prices based on demand. Raise prices during peak times to maximize revenue, or lower them during slow periods to encourage bookings.',
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
    body: 'Weather, cancellations, or shifting schedules? No problem. Easily edit or reschedule your experiences in just a few clicks, keeping your business running smoothly.',
    image: '/demos/calendar.gif',
    accent: 'bg-[#ABE7F4]',
    imageClassName: 'scale-100 2xl:scale-120 2xl:py-14',
    // imageClassName: 'scale-100 2xl:scale-120 2xl:py-14',
  },
]

const PartnerFeatureSlider = () => {
  const scope = useRef<HTMLElement>(null!)
  useRevealSplit(scope)
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const isMobile = useMediaQuery('(max-width: 1023px)')

  const isSuperSmall = useMediaQuery('(max-width: 767px)')
  const tabListRef = useRef<HTMLDivElement | null>(null)
  const tabButtonsRef = useRef<HTMLButtonElement[]>([])

  const goTo = (i: number) => {
    const el = itemRefs.current[i]
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  const scrollToActiveTab = (i: number) => {
    const wrap = tabListRef.current
    const btn = tabButtonsRef.current[i]
    if (!wrap || !btn) return

    const offset = Math.round(wrap.clientWidth * 0.14)
    const desiredLeft = i === 0 ? 0 : Math.max(0, btn.offsetLeft - offset)
    const maxLeft = wrap.scrollWidth - wrap.clientWidth
    wrap.scrollTo({
      left: Math.min(desiredLeft, Math.max(0, maxLeft)),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (isSuperSmall) {
      scrollToActiveTab(index)
    }
  }, [index, isSuperSmall])

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
        <div className="mb-2 flex flex-nowrap gap-3 overflow-hidden" ref={tabListRef}>
          {SLIDES.map((s, i) => (
            <Button
              key={s.id}
              onClick={() => goTo(i)}
              ref={(el: HTMLButtonElement) => {
                tabButtonsRef.current[i] = el
              }}
              className={[
                'hover:bg-surface-teal/80 rounded-full px-4 py-2 text-sm whitespace-nowrap transition',
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
                {isMobile ? <MobileSlideCard slide={s} /> : <SlideCard slide={s} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function MobileSlideCard({ slide }: { slide: Slide }) {
  return (
    <div
      className={`flex h-[434px] flex-col space-y-5 rounded-[.75rem] p-4 ${slide.accent ? slide.accent : 'bg-amber-200'}`}
    >
      <div className="bg-surface-light relative mx-auto w-full overflow-hidden rounded-[.75rem] shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)]">
        {slide.image.includes('.gif') ? (
          <img
            src={slide.image}
            className={`max-h-full max-w-full object-contain ${slide.imageClassName ? slide.imageClassName : ''}`}
          />
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

      <div className="flex h-full flex-1 flex-col">
        <h2 className="text-foreground-teal text-xl leading-tight font-semibold tracking-tight whitespace-pre-line">
          {slide.title}
        </h2>
        <p className="text-foreground-teal mt-auto text-sm">{slide.body}</p>
      </div>
    </div>
  )
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="grid grid-cols-[249px_1fr] gap-4 xl:grid-cols-[1fr_3fr]">
      {/* Left panel */}
      <div
        className={[
          'rounded-[.75rem] p-6 sm:p-8 lg:col-span-1 xl:min-w-[393px]',
          slide.accent ?? 'bg-amber-200',
          'text-[#2E1109]',
        ].join(' ')}
      >
        <div className="flex h-full flex-col justify-between">
          <h2 className="text-background text-[2.5rem] leading-tight font-bold">{slide.title}</h2>
          <p className="text-background w-full text-base">{slide.body}</p>
        </div>
      </div>

      {/* Right panel: device frame */}
      <div className="bg-surface-light relative mx-auto aspect-[16/8] h-full w-full overflow-hidden rounded-[.75rem] shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)] 2xl:aspect-[16/7]">
        {slide.image.includes('.gif') ? (
          <div className="flex h-full w-full items-center justify-center bg-[#fdfdfd]">
            <img
              src={slide.image}
              className={`max-h-full max-w-full object-contain ${slide.imageClassName ? slide.imageClassName : ''}`}
            />
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
