'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP, gsap } from '@/shared/lib/gsap'

export const BENEFITS = [
  {
    title: '14x Boost in Visibility',
    description: 'Reach thousands of new customers without paying for ads.',
    image: '/boost_test.png',
  },
  {
    title: '40% More Seats Filled',
    description: 'Fill last-minute spots and keep your classes fully booked.',
    image: '/40_test.png',
  },
  {
    title: 'Up to 30% More Revenue',
    description: 'Streamlined bookings and payments mean less admin, more income.',
    image: '/30_revenue_test.png',
  },
  // {
  //   title: '23x Faster Growth',
  //   description:
  //     "Measure, learn, and grow faster than ever.",
  //   image: '/landing_page_img_4.png',
  // },
  {
    title: '0 Upfront Cost',
    description: 'Start earning from day one - No fees, no risk, no commitment.',
    image: '/0_upfront_test.png',
  },
]

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const benefitRefs = useRef<HTMLDivElement[]>([])

  const setBenefitRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) benefitRefs.current[idx] = el
  }

  useGSAP(
    () => {
      if (!sectionRef.current || !svgRef.current) return
      const svg = svgRef.current
      const path = svg.querySelector('path') as SVGPathElement | null
      if (!path) return

      const initPath = () => {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: -length })
      }

      initPath()

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=400',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
          markers: true,
          onRefresh: initPath,
        },
      })

      benefitRefs.current.forEach(benefit => {
        if (!benefit) return

        gsap.fromTo(
          benefit,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: benefit,
              start: 'top 80%',
              end: 'bottom 90%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative h-[200dvh]">
      <svg
        viewBox="0 0 1440 2165"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 z-[-1] h-[275dvh] w-full"
        ref={svgRef}
      >
        <path
          d="M1510 2137.56C1308.89 2291.03 1167.68 1479.09 886.104 1688.05C464.13 2001.21 23.1114 1775.88 397.856 1516.33C784.185 1248.76 1686.93 974.095 1454.5 1329C1330.62 1518.15 663.065 1290.64 752 1056.5C850 798.5 622.321 736.5 342.637 1016.72C56.7074 1303.2 -344.5 1027.5 342.637 809.5C1225.25 529.482 1436 231 1510 328C1648.82 509.963 149.499 528.5 -25.0006 7.5"
          stroke="#E97958"
          strokeWidth="14.2383"
          strokeLinecap="round"
        />
      </svg>

      {/* Steps */}
      <div className="mx-auto max-w-[90vw] space-y-2 px-4 2xl:max-w-[95vw] 2xl:px-24">
        {BENEFITS.map((benefit, index) => (
          <div
            key={index}
            className={`flex h-[50vh] items-center justify-between md:gap-64 ${index % 2 !== 0 ? '' : 'md:flex-row-reverse'}`}
            ref={el => setBenefitRef(el, index)}
          >
            <div
              className={`flex max-w-2xl flex-col gap-2 ${index % 2 === 0 ? '' : 'col-start-1'} `}
            >
              <h3 className="text-[1.75rem] font-semibold tracking-tight 2xl:text-[2rem]">
                {benefit.title}
              </h3>
              <p className="text-sub2">{benefit.description}</p>
            </div>
            <div className="relative max-w-xl flex-1 overflow-hidden rounded-2xl lg:h-[389px]">
              <Image src={benefit.image} alt={benefit.title} className="object-cover" fill />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
