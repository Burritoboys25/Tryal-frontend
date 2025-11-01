'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/shared/components/layout/Section'
import { Button } from '@/shared/components/ui/base/button'
import { type Slide, USER_SLIDES, PARTNER_SLIDES } from './sliderData'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'

type FeatureSliderProps = {
  audience: 'user' | 'partner'
}

export default function FeatureSlider({ audience }: FeatureSliderProps) {
  const slides = audience === 'user' ? USER_SLIDES : PARTNER_SLIDES
  const sectionId = audience === 'partner' ? 'partner-feature' : 'feature'

  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const isMobile = useMediaQuery('(max-width: 767px)')
  const isSuperSmall = useMediaQuery('(max-width: 767px)')
  const tabListRef = useRef<HTMLDivElement | null>(null)
  const tabButtonsRef = useRef<HTMLButtonElement[]>([])

  const goTo = (i: number) => {
    itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') goTo(Math.max(0, index - 1))
    if (e.key === 'ArrowRight') goTo(Math.min(slides.length - 1, index + 1))
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]

    const io = new IntersectionObserver(
      entries => {
        const mostVisible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (mostVisible) {
          const newIndex = items.findIndex(x => x === mostVisible.target)
          if (newIndex !== -1) setIndex(newIndex)
        }
      },
      {
        root: track,
        threshold: [0.5, 0.75, 0.9],
      },
    )

    items.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <Section
      id={sectionId}
      full
      className="w-full max-w-full snap-center flex-col justify-center overflow-x-hidden px-4 md:px-9"
      background="none"
    >
      <div
        className="relative h-full w-full max-w-full text-white"
        aria-label="Feature slider"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Navigation Tabs */}
        <div className="mb-2 flex flex-nowrap gap-3 overflow-x-hidden" ref={tabListRef}>
          {slides.map((s, i) => (
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

        {/* Slider Track */}
        <div
          ref={trackRef}
          className="noScrollbar relative h-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          <div className="flex h-full w-full max-w-full gap-6">
            {slides.map((s, i) => (
              <div
                key={s.id}
                ref={el => {
                  itemRefs.current[i] = el
                }}
                className="h-full max-w-full shrink-0 snap-start lg:max-w-full"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
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
      <div className="bg-surface-light relative mx-auto h-[182px] w-full overflow-hidden rounded-[.75rem] shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)] md:h-[300px]">
        {slide.image.includes('.gif') ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-auto w-full object-center ${slide.imageClassName ? slide.imageClassName : ''}`}
            aria-label={slide.title}
          />
        ) : (
          <div className="relative aspect-[16/9] h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={false}
              aria-label={slide.title}
            />
          </div>
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
  const isVideo = slide.image.endsWith('.mp4')
  const isGif = slide.image.endsWith('.gif')

  return (
    <div className="lg: grid grid-cols-[249px_1fr] gap-4 md:h-[400px] lg:h-[460px] xl:h-[508px] xl:grid-cols-[1fr_3fr] 2xl:h-[600px]">
      {/* Content Panel */}
      <div
        className={[
          'rounded-[.75rem] md:p-4 lg:col-span-1 lg:p-8 xl:min-w-[393px]',
          slide.accent ?? 'bg-amber-200',
          'text-[#2E1109]',
        ].join(' ')}
      >
        <div className="flex h-full flex-col justify-between">
          <h2 className="text-background text-xl leading-tight font-bold xl:text-[2.5rem]">
            {slide.title}
          </h2>
          <p className="text-background w-full md:text-sm xl:text-base">{slide.body}</p>
        </div>
      </div>

      {/* Media Panel */}
      <div className="bg-surface-light relative mx-auto aspect-[16/8] h-full w-full overflow-hidden rounded-[.75rem] shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)] 2xl:aspect-[16/7]">
        <div className="flex h-full w-full items-center justify-center bg-[#fdfdfd]">
          {isVideo ? (
            <video
              src={slide.image}
              autoPlay
              loop
              muted
              playsInline
              aria-label={slide.title}
              className="h-full w-auto object-contain"
            />
          ) : isGif ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.image}
              alt={slide.title}
              className={`max-h-full max-w-full object-contain ${slide.imageClassName ? slide.imageClassName : ''}`}
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={false}
              aria-label={slide.title}
            />
          )}
        </div>
      </div>
    </div>
  )
}
