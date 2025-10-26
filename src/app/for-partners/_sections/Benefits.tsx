'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useGSAP, gsap } from '@/shared/lib/gsap'

export const BENEFITS = [
  {
    metric: '14x',
    metricLabel: 'Boost in Visibility',
    description: 'Reach thousands of new customers without paying for ads.',
    image: '/boost.png',
  },
  {
    metric: '40%',
    metricLabel: 'More Seats Filled',
    description: 'Fill last-minute spots and keep your classes fully booked.',
    image: '/40_booking.png',
  },
  {
    metric: '30%',
    metricLabel: 'More Revenue',
    description: 'Streamlined bookings and payments mean less admin, more income.',
    image: '/30_revenue.png',
  },
  {
    metric: '0',
    metricLabel: 'Upfront Cost',
    description: 'Start earning from day one - No fees, no risk, no commitment.',
    image: '/0_upfront.png',
  },
]

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const benefitRefs = useRef<HTMLDivElement[]>([])
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const setBenefitRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) benefitRefs.current[idx] = el
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useGSAP(
    () => {
      if (!sectionRef.current) return

      // SVG path animation (only on large screens)
      if (svgRef.current) {
        const svg = svgRef.current
        const path = svg.querySelector('path') as SVGPathElement | null
        if (path) {
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
              onRefresh: initPath,
            },
          })
        }
      }

      // Benefit animations (always run)
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
    { scope: sectionRef, dependencies: [isLargeScreen] },
  )

  return (
    <>
      {/* Intro Text */}
      <div className="mx-auto max-w-[90vw] px-4 py-12 md:py-16 2xl:max-w-[95vw] 2xl:px-24">
        {/* TODO:Update to h2.5 text once antho branch is up. */}
        <p className="text-h2 max-w-6xl leading-relaxed">
          Running a local business takes passion—and a lot of work. Between marketing, managing
          bookings, and trying to fill every seat, it&apos;s easy to lose focus on what truly
          matters. That&apos;s why we built Tryal: a platform that helps your experiences get
          discovered, automates the busywork, and grows your revenue—all with zero upfront cost. You
          bring the magic; we&apos;ll take care of the rest.
        </p>
      </div>

      <section ref={sectionRef} className="relative h-auto pb-12 md:pb-16 lg:h-[200dvh] lg:pb-0">
        {isLargeScreen && (
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
        )}

        {/* Steps */}
        <div className="mx-auto space-y-12 px-4 md:space-y-8 lg:space-y-2 2xl:max-w-[95vw] 2xl:px-24">
          {BENEFITS.map((benefit, index) => (
            <div
              key={benefit.metricLabel}
              className={`flex h-auto flex-col items-center justify-between gap-6 md:h-auto md:flex-row md:items-start md:gap-8 lg:h-[50vh] lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-64`}
              ref={el => setBenefitRef(el, index)}
            >
              <div className="relative h-[250px] w-full overflow-hidden rounded-2xl md:h-[173px] md:w-[340.5px] md:flex-none lg:h-[500px] lg:max-w-2xl lg:flex-1">
                <Image
                  src={benefit.image}
                  alt={benefit.metricLabel}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex max-w-2xl flex-col gap-2 md:gap-[2rem]">
                <div className="flex flex-row items-center gap-3">
                  <h2 className="text-4xl font-semibold md:text-8xl 2xl:text-[10rem]">
                    {benefit.metric}
                  </h2>
                  <h3 className="text-h3">{benefit.metricLabel}</h3>
                </div>
                <p className="text-sub4">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Benefits
