import Section from '@/shared/components/layout/Section'
import Image from 'next/image'
import { useState } from 'react'


//This component is currently not in use but won't be deleted as it might be used in the future
const SLIDES = [
  {
    title: 'Baking',
    description: 'Lik djaskf dsljf kld asjfkasd jfajds kfaj ',
    image: '/landing_page_img_1.png',
  },
  {
    title: 'Cooking',
    description: 'Lik djaskf dsljf kld asjfkasd jfajds kfaj ',
    image: '/landing_page_img_2.png',
  },
  {
    title: 'Art & Crafts',
    description: 'Lik djaskf dsljf kld asjfkasd jfajds kfaj ',
    image: '/landing_page_img_3.png',
  },
  {
    title: 'Music & Dance',
    description: 'Explore More, worry less.',
    image: '/landing_page_img_4.png',
  },
  {
    title: 'DIY & Hands-on',
    description: 'Explore More, worry less.',
    image: '/landing_page_img_4.png',
  },
]

// TODO Implement Button Click
const ExploreMore = () => {
  const [, setIdx] = useState<number>(0)

  const prev = () => setIdx((prev: number) => (prev - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setIdx((prev: number) => (prev + 1 + SLIDES.length) % SLIDES.length)

  return (
    <Section id="explore-more" className="overflow-hidden" background="white">
      <div className="relative">
        <h2 className="text-display text-center md:mb-12" data-reveal-split>
          Explore More, worry less.
        </h2>

        <div className="absolute top-8 space-x-2">
          <button onClick={prev} className="rounded-full bg-black px-4 py-2 text-white">
            left
          </button>
          <button onClick={next} className="rounded-full bg-black px-4 py-2 text-white">
            right
          </button>
        </div>

        {/* Slider */}
        <div className="flex gap-x-4">
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="group relative h-[60vh] w-1/3 flex-shrink-0 overflow-hidden rounded-3xl"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="inset-0 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute top-0 right-0 left-0 h-1/10 bg-gradient-to-b from-black/50 to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 h-2/10 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <h3 className="bg-surface-light-orange absolute top-4 left-4 z-[2] rounded-4xl px-4 py-2">
                {slide.title}
              </h3>
              <p className="text-sub2 text-foreground-dark absolute bottom-4 left-4 z-[2]">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default ExploreMore
