'use client'
import { useRef } from 'react'
import { useGSAP, gsap } from '@/shared/lib/gsap'
import SignupIcon from '@/shared/assets/icons/signup.svg'
import RegisterIcon from '@/shared/assets/icons/register.svg'
import OptimizeIcon from '@/shared/assets/icons/optimize.svg'

const STEPS = [
  {
    step: '01',
    icon: <SignupIcon />,
    title: 'Apply & Get Verified',
    description:
      'Join a trusted network through a quick verification process that builds customer confidence and ensures quality experiences.',
    highlight:
      'Build trust: “We carefully verify each partner to ensure a safe and high-quality experience for customers.”',
  },
  {
    step: '02',
    icon: <RegisterIcon />,
    title: 'List Your Experiences',
    description:
      'Easily create listings, set prices, and manage availability with our simple onboarding to start attracting bookings fast.',
    highlight:
      'Emphasize ease of onboarding: “Quickly list your activities, set pricing, and manage availability.”',
  },
  {
    step: '03',
    icon: <OptimizeIcon />,
    title: 'Manage & Grow',
    description:
      'Use dynamic pricing and flexible scheduling to adapt to demand, boost visibility, and maximize revenue.',
    highlight:
      'Explain dynamic pricing & flexible scheduling: adjust class sizes, times, or prices based on demand.',
  },
]

const PartnerSteps = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const stepRefs = useRef<HTMLDivElement[]>([])

  const setStepRef = (el: HTMLDivElement | null, idx: number) => {
    if (el) stepRefs.current[idx] = el
  }

  useGSAP(
    () => {
      if (!sectionRef.current || !svgRef.current) return
      const svg = svgRef.current
      const path = svg.querySelector('path') as SVGPathElement | null
      if (!path) return

      const initPath = () => {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      }

      initPath()

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=200',
          end: 'bottom top+=300',
          scrub: true,
          invalidateOnRefresh: true,
          markers: true,
          onRefresh: initPath,
        },
      })

      stepRefs.current.forEach(step => {
        if (!step) return

        gsap.fromTo(
          step,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: step,
              start: 'top 60%',
              end: 'bottom 100%',
              toggleActions: 'play none none reverse',
              markers: true,
            },
          },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <svg
        viewBox="0 0 1440 1566"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 [aspect-ratio:1440/1566] w-full xl:[aspect-ratio:1440/1566]"
        ref={svgRef}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M-51.0009 25.7092C149.08 -99.4687 323.866 454.786 603.998 284.35C1023.82 28.9292 1560.83 275.653 1188 487.351C803.645 705.593 175 776.619 209.5 701.119C244 625.619 910.015 537.341 835.499 812.351C760.984 1087.36 1501 559.425 1501 710.351C1501 752.851 1570.5 898.851 905.499 1070.35C676.482 1129.41 -198.425 1402.83 -93.001 1173.85C31.9986 902.351 1155.5 1316.85 1470 1558.35"
          stroke="#E97958"
          strokeWidth="14.2383"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Steps */}
      <div className="section-width-container relative mt-10 flex flex-col gap-20">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            ref={el => setStepRef(el, idx)}
            className={`h-[434px] w-[605px] rounded-2xl bg-white p-6 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
          >
            <div className="flex h-full flex-1 flex-col justify-between">
              <div className="text-h2 text-primary text-left">{step.step}</div>
              <div className="my-6 flex justify-center">{step.icon}</div>
              <h3 className="text-h2 text-background mb-2 text-left">{step.title}</h3>
              <p className="text-body2 text-background text-left">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnerSteps
