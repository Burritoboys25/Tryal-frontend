'use client'

import Section from '@/shared/components/layout/Section'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'
import Image from 'next/image'

const benefits = [
  {
    img: '/landing_page_img_1.png',
    title: 'Boost Your Visibility with the Right Audience',
    description:
      'Get your experiences in front of people actively searching for unique things to do in your city. No wasted ad spend — just direct access to new customers.',
  },
  {
    img: '/landing_page_img_2.png',
    title: 'Earn More with Flexible Pricing & Scheduling',
    description:
      'Fill more seats by adjusting prices, class sizes, and availability based on demand. Our tools give you the flexibility to maximize revenue while keeping control.',
  },
  {
    img: '/landing_page_img_3.png',
    title: 'Save Time with Seamless Bookings',
    description:
      'Manage all your experiences in one place. From scheduling to payments, we streamline the process so you don’t need to juggle multiple platforms.',
  },
  {
    img: '/landing_page_img_4.png',
    title: 'Gain Insights to Grow Smarter',
    description:
      'Track performance, customer trends, and booking patterns with real-time analytics — helping you understand what’s working and how to improve.',
  },
]

const FPBenefits = () => {
  useGSAP(() => {
    gsap.registerPlugin(SplitText)
    // Animate the main section title
    const titleSplit = new SplitText('#benefits-title', {
      type: 'lines',
      mask: 'lines',
    })
    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
      scrollTrigger: {
        trigger: '#benefits-title',
        start: 'top 80%',
        markers: false,
      },
    })
    tl.from(titleSplit.lines, {
      yPercent: 100,
      duration: 1,
      stagger: 0.12,
    })
    // Animate each benefit row on scroll
    benefits.forEach((_, idx) => {
      const rowSelector = `#benefits-grid [data-benefit-row="${idx}"]`
      gsap.from(rowSelector, {
        scrollTrigger: {
          trigger: rowSelector,
          start: 'top 80%',
          toggleActions: 'play none none none',
          markers: false,
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'expo.inOut',
      })
    })
    return () => {
      titleSplit.revert()
    }
  }, [])

  return (
    <Section
      id="benefits"
      className="flex min-h-[70dvh] snap-center flex-col justify-center py-16 md:py-24"
    >
      <div className="grid w-full grid-cols-1 md:grid-cols-5">
        <h3 id="benefits-title" className="text-h2 mb-2 text-left md:col-span-3 md:col-start-1">
          Running a local business is hard enough without spending hours on marketing, managing
          bookings, and filling seats. That’s why we built Tryal: a platform designed to help you
          get discovered, simplify operations, and grow revenue — all without extra overhead. <br />
          With Tryal, you stay focused on what you do best: creating incredible experiences.
          <br />
          We’ll handle the rest.
        </h3>
      </div>
      <div className="border-black-300 mb-20 w-full border-b-4" />
      <div id="benefits-grid" className="flex w-full flex-col gap-y-12">
        {benefits.map(({ title, description, img }, idx) => (
          <div
            key={title}
            className="benefit-row grid w-full grid-cols-1 items-center gap-x-8 gap-y-4 md:grid-cols-5"
            data-benefit-row={idx}
          >
            {/* Image left, spans columns 1-2 */}
            <div className="flex w-full items-center md:col-span-2 md:col-start-1">
              <Image
                src={img}
                alt="Experience preview"
                width={800}
                height={320}
                className="h-[7rem] w-full rounded-xl object-cover shadow-lg md:h-64 md:w-full"
                priority={idx === 0}
              />
            </div>
            {/* Text right, spans columns 4-5, right-aligned */}
            <div className="flex flex-col items-start justify-center text-left md:col-span-2 md:col-start-4">
              <h2 data-benefit-title={idx} className="text-h2 benefits-title mb-2">
                {title}
              </h2>
              <p className="text-body2 benefits-desc max-w-md">{description}</p>
            </div>
            {idx < benefits.length - 1 && (
              <div className="my-6 h-px w-full bg-gray-300 opacity-60 md:col-span-5 md:col-start-1" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}

export default FPBenefits
