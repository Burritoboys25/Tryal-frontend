'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Section from '@/shared/components/layout/Section'
import { Button } from '@/shared/components/ui/base/button'
import { type Slide, USER_SLIDES, PARTNER_SLIDES } from './sliderData'

type FeatureSliderProps = {
  audience: 'user' | 'partner'
}

export default function FeatureSlider({ audience }: FeatureSliderProps) {
  const slides = audience === 'user' ? USER_SLIDES : PARTNER_SLIDES
  const sectionId = audience === 'partner' ? 'partner-feature' : 'feature'

  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const goTo = (i: number) => {
    itemRefs.current[i]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

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
      className="w-full snap-center flex-col justify-center px-4 md:px-9"
      background="none"
    >
      <div
        className="relative h-full w-full text-white"
        aria-label="Feature slider"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {/* Navigation Tabs */}
        <div className="mb-4 flex flex-wrap gap-3">
          {slides.map((slide, i) => (
            <Button
              key={slide.id}
              onClick={() => goTo(i)}
              className={`text-foreground-dark hover:bg-surface-teal/80 hidden rounded-full bg-[#124E5B]  transition md:block ${
                i === index ? 'bg-primary hover:bg-primary/90 ring-1 ring-white/10' : ''
              }`}
              aria-pressed={i === index}
            >
              {slide.tab}
            </Button>
          ))}
        </div>

        {/* Slider Track */}
        <div
          ref={trackRef}
          className="noScrollbar relative h-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        >
          <div className="flex h-full w-[92vw] min-w-full gap-6 sm:w-[88vw] lg:w-full">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                ref={el => {
                  itemRefs.current[i] = el
                }}
                className="h-full w-[92vw] shrink-0 snap-start sm:w-[88vw] lg:w-full"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
              >
                <SlideCard slide={slide} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function SlideCard({ slide }: { slide: Slide }) {
  const isVideo = slide.image.endsWith('.mp4')
  const isGif = slide.image.endsWith('.gif')

  return (
    <div className="grid h-[450px] grid-cols-1 gap-4 sm:h-[500px] md:h-[550px] lg:h-[600px] xl:grid-cols-[454px_1fr] 2xl:h-[700px] 2xl:grid-cols-[1fr_3fr]">
      {/* Content Panel */}
      <div
        className={`flex h-full flex-col justify-between gap-4 rounded-[2rem] p-6 sm:p-8 lg:p-10 ${slide.accent ?? 'bg-amber-200'}`}
      >
        <h2 className="text-h2 mt-4 leading-tight font-semibold tracking-tight whitespace-pre-line text-[#2E1109]">
          {slide.title}
        </h2>
        <p className="text-sub4 text-[#2E1109]">{slide.body}</p>
      </div>

      {/* Media Panel */}
      <div className="relative mx-auto h-full w-full overflow-hidden rounded-3xl bg-[#fdfdfd] shadow-[0_2px_0_#111_inset,0_0_0_1px_rgba(255,255,255,0.08)]">
        <div className="flex h-full w-full items-center justify-center p-4">
          {isVideo ? (
            <video
              src={slide.image}
              autoPlay
              loop
              muted
              playsInline
              className="max-h-full max-w-full object-contain"
            />
          ) : isGif ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.image}
              alt={slide.title}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 60vw, 50vw"
            />
          )}
        </div>
      </div>
    </div>
  )
}
