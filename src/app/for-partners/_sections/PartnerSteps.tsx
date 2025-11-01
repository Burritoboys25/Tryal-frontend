'use client'
import { useRef } from 'react'
import { useGSAP, gsap } from '@/shared/lib/gsap'
import SignupIcon from '@/shared/assets/icons/signup.svg'
import RegisterIcon from '@/shared/assets/icons/register.svg'
import OptimizeIcon from '@/shared/assets/icons/optimize.svg'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery'
// import Section from '@/shared/components/layout/Section'
import { StepCard } from '@/app/_sections/StickySteps'

const STEPS = [
  {
    step: '01',
    icon: <SignupIcon />,
    title: 'Apply & Get Verified',
    description:
      'Join a trusted network through a quick verification process that builds customer confidence and ensures quality experiences.',
  },
  {
    step: '02',
    icon: <RegisterIcon />,
    title: 'Register & Set Prices',
    description: 'Quickly list your experiences, set pricing, and manage availability.',
  },
  {
    step: '03',
    icon: <OptimizeIcon />,
    title: 'Manage & Optimize',
    description:
      'Dynamic pricing & flexible scheduling: adjust class sizes, times, or prices based on demand.',
  },
]

const PartnerSteps = () => {
  const isMobile = useMediaQuery('(max-width: 1023px)')

  return isMobile ? <MobilePartnerSteps /> : <PartnerStepsDesktop />
}

const PartnerStepsDesktop = () => {
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
              <div className="text-primary text-left text-[2rem] font-semibold lg:text-[2.25rem] xl:text-[2.5rem] 2xl:text-[2.75rem]">
                {step.step}
              </div>
              <div className="my-6 flex justify-center">{step.icon}</div>
              <h3 className="text-background 3xl:text-[3rem] text-left text-2xl font-semibold md:text-[2rem] lg:text-[2.25rem] 2xl:text-[2.5rem]">
                {step.title}
              </h3>
              <p className="text-background text-left text-sm lg:text-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const MobilePartnerSteps = () => {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          pinSpacing: true,
          markers: true,
          start: 'top top+=30',
          end: '+=1500',
          pin: true,
          scrub: 0.5,
        },
      })

      tl.addLabel('card1')
      tl.to('#card-1', {
        yPercent: 0,
        opacity: 1,
      })

      tl.from('#card-2', {
        yPercent: 75,
        opacity: 0,
      })
      tl.addLabel('card2')
      tl.to(
        '#card-1',
        {
          scale: 0.925,
          yPercent: -0.75,
          opacity: 1,
        },
        '-=0.3',
      )
      tl.to('#card-2', {
        yPercent: 0,
        opacity: 1,
      })

      // Animation for card 3
      tl.from('#card-3', {
        yPercent: 75,
        opacity: 0,
      })
      tl.addLabel('card3')
      tl.to(
        '#card-2',
        {
          scale: 0.95,
          yPercent: -0.5,
          opacity: 1,
        },
        '-=0.3',
      )
      tl.to('#card-3', {
        yPercent: 0,
        opacity: 1,
      })

      tl.to(
        '#card-3',
        {
          scale: 0.98,
          yPercent: -0.4,
          opacity: 1,
        },
        '-=0.3',
      )

      tl.to(
        '#card-1',
        {
          scale: 0.925,
          yPercent: -1.5,
          opacity: 0.9,
        },
        '-=0.3',
      )

      tl.to(
        '#card-2',
        {
          scale: 0.95,
          yPercent: -1.125,
          opacity: 1,
        },
        '-=0.3',
      )

      tl.to(
        '#card-3',
        {
          scale: 0.98,
          yPercent: -0.85,
          opacity: 1,
        },
        '-=0.3',
      )
    },
    { scope: scope },
  )

  return (
    <section
      ref={scope}
      className="cards-section section-width-container relative w-full rounded-3xl"
      id="sticky-steps"
    >
      <div className="cards-container text-foreground-light">
        <div id="card-1" className="card top-0 rounded-3xl">
          <StepCard
            id="01"
            title="Apply & Get Verified"
            description="We carefully verify each partner to ensure a safe and high-quality experience for customers."
            icon={SignupIcon}
          />
        </div>
        <div id="card-2" className="card top-[30px]">
          <StepCard
            id="02"
            title="Register & Set Prices"
            description="Quickly list your experiences, set pricing, and manage availability."
            icon={RegisterIcon}
          />
        </div>
        <div id="card-3" className="card top-[60px]">
          <StepCard
            id="03"
            title="Manage & Optimize"
            description="Dynamic pricing & flexible scheduling: adjust class sizes, times, or prices based on demand."
            icon={OptimizeIcon}
          />
        </div>
      </div>
    </section>
  )
}

export default PartnerSteps
