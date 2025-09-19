'use client'
import { useRef } from 'react'
import { useGSAP, gsap, ScrollTrigger } from '@/shared/lib/gsap'

const STEPS = [
  {
    title: 'Step 1: Apply & Get Verified',
    description:
      'We carefully verify each partner to ensure a safe and high-quality experience for customers. This vetting system ensures only legitimate, high-quality businesses are on the platform.',
    highlight:
      'Build trust: “We carefully verify each partner to ensure a safe and high-quality experience for customers.”',
  },
  {
    title: 'Step 2: Register Experiences & Set Prices',
    description:
      'Quickly list your activities, set pricing, and manage availability. Our onboarding flow is designed to get you up and running fast.',
    highlight:
      'Emphasize ease of onboarding: “Quickly list your activities, set pricing, and manage availability.”',
  },
  {
    title: 'Step 3: Manage & Optimize',
    description:
      'Adjust class sizes, times, or prices based on demand with our flexible scheduling and dynamic pricing tools.',
    highlight:
      'Explain dynamic pricing & flexible scheduling: adjust class sizes, times, or prices based on demand.',
  },
]

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n))
}

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

const PathScrollSteps = () => {
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
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
          markers: true,
          onRefresh: initPath,
        },
      })

      const vh = () => window.innerHeight

      const pinStep = () => Math.round(vh() * 0.1)

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

        ScrollTrigger.create({
          trigger: step,
          start: 'top 5%',
          end: () => `+=${pinStep()}`,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
          markers: true,
        })
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
      <svg
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
      </svg>

      {/* Steps */}
      <div className="section-width-container relative mt-10 flex min-h-[200vh] flex-col gap-[40vh]">
        {STEPS.map((step, idx) => (
          <div
            key={idx}
            ref={el => setStepRef(el, idx)}
            className={`bg-surface-teal h-[15rem] w-[40%] rounded-2xl p-6 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
          >
            <h3 className="text-h2">{step.title}</h3>
            <p className="text-body2">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="h-[30vh] bg-yellow-100" />
    </section>
  )
}

export default PathScrollSteps
