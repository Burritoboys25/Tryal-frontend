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

// function clamp(n: number, min = 0, max = 1) {
//   return Math.min(max, Math.max(min, n))
// }

// const PathScrollSteps = () => {
//   const containerRef = useRef<HTMLDivElement | null>(null)
//   const svgRef = useRef<SVGSVGElement | null>(null)

//   useEffect(() => {
//     const svg = svgRef.current
//     const container = containerRef.current
//     if (!svg || !container) return

//     const path = svg.querySelector('path') as SVGPathElement | null
//     if (!path) return

//     const length = path.getTotalLength()
//     path.style.strokeDasharray = String(length)
//     path.style.strokeDashoffset = String(length) // start hidden

//     let ticking = false
//     const update = () => {
//       ticking = false
//       const rect = container.getBoundingClientRect()
//       const vh = window.innerHeight

//       // progress:
//       // 0 when container top hits viewport bottom
//       // 1 when container bottom hits viewport top
//       const start = vh
//       const end = -rect.height
//       const t = clamp((rect.top - start) / (end - start))

//       // map to dashoffset
//       path.style.strokeDashoffset = String(length * (1 - t))
//     }

//     const onScrollOrResize = () => {
//       if (!ticking) {
//         ticking = true
//         requestAnimationFrame(update)
//       }
//     }

//     window.addEventListener('scroll', onScrollOrResize, { passive: true })
//     window.addEventListener('resize', onScrollOrResize)
//     update() // initial paint

//     return () => {
//       window.removeEventListener('scroll', onScrollOrResize)
//       window.removeEventListener('resize', onScrollOrResize)
//     }
//   }, [])

//   return (
//     <div className="relative h-[200vw] overflow-hidden" ref={containerRef}>
//       <svg
//         width="1000"
//         height="1890"
//         viewBox="0 0 1000 1890"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="thicc-path"
//         ref={svgRef}
//       >
//         <path
//           d="M-219.5 -92C-36.5 -228 91.9969 491.5 348.214 306.33C732.192 28.8263 1133.5 228.5 792.5 458.5C440.958 695.61 -125 1043.5 86.5 729C199.222 561.382 671.84 518.36 538 698C404.16 877.64 461.257 1056.66 774.5 868C1087.74 679.342 1347.5 1068.5 675.5 1366C472.8 1455.74 -142.349 1766.48 0.5 1551.5C204.731 1244.14 1308 1668.5 1136.5 1885.5"
//           stroke="#E97958"
//           stroke-width="14.2383"
//         />
//       </svg>
//     </div>
//   )
// }

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
          start: 'top bottom-=400',
          end: 'bottom top',
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
              start: 'top 90%',
              end: 'bottom 90%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      // stepRefs.current.forEach(step => {
      //   if (!step) return
      //   gsap.fromTo(
      //     step,
      //     { autoAlpha: 0, y: 40 },
      //     {
      //       autoAlpha: 1,
      //       y: 0,
      //       duration: 1,
      //       ease: 'expo.inOut',
      //       scrollTrigger: {
      //         trigger: step,
      //         start: 'top 65%',
      //         end: 'bottom 60%',
      //         markers: true,
      //         toggleActions: 'play none none reverse',
      //       },
      //     },
      //   )
      // })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* <svg
        width="1000"
        height="1890"
        viewBox="0 0 1000 1890"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 h-[260vh] w-full"
        ref={svgRef}
      >
        <path
          d="M-219.5 -92C-36.5 -228 91.9969 491.5 348.214 306.33C732.192 28.8263 1133.5 228.5 792.5 458.5C440.958 695.61 -125 1043.5 86.5 729C199.222 561.382 671.84 518.36 538 698C404.16 877.64 461.257 1056.66 774.5 868C1087.74 679.342 1347.5 1068.5 675.5 1366C472.8 1455.74 -142.349 1766.48 0.5 1551.5C204.731 1244.14 1308 1668.5 1136.5 1885.5"
          stroke="#E97958"
          strokeWidth="14.2383"
          strokeLinecap="round"
        />
      </svg> */}
      <svg
        width="1440"
        height="1566"
        viewBox="0 0 1440 1566"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute inset-0 h-[275dvh] w-full"
        ref={svgRef}
      >
        <path
          d="M-51.0009 25.8586C149.08 -99.3193 323.866 454.935 603.998 284.5C1023.82 29.0787 1560.83 275.802 1188 487.5C803.645 705.742 115.067 988.259 147.499 687C151.976 645.42 910.015 537.49 835.499 812.5C760.984 1087.51 1501 559.575 1501 710.5C1501 753 1570.5 899 905.499 1070.5C676.482 1129.56 -198.425 1402.98 -93.001 1174C31.9986 902.5 1155.5 1317 1470 1558.5"
          stroke="#E97958"
          strokeWidth="14.2383"
          strokeLinecap="round"
        />
      </svg>

      {/* Steps */}
      <div className="section-width-container relative mt-10 flex flex-col gap-[40vh]">
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
