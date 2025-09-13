// 'use client'

// import React from 'react'

// import gsap from 'gsap'
// import { useGSAP } from '@gsap/react'
// import SplitText from 'gsap/SplitText'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import { useRef } from 'react'

// interface RevealWrapperProps {
//   children: React.ReactNode
//   animateOnScroll?: boolean
//   delay?: number
// }

// gsap.registerPlugin(SplitText, ScrollTrigger)

// export default function RevealWrapper({
//   children,
//   animateOnScroll = true,
//   delay = 0,
// }: RevealWrapperProps) {
//   const containerRef = useRef(null)
//   const elementRef = useRef([])
//   const splitRef = useRef([])
//   const lines = useRef([]) // array of lines to element

//   useGSAP(
//     () => {
//       if (!containerRef.current) return // check if container is mounted

//       splitRef.current = []
//       elementRef.current = []
//       lines.current = []

//       let elements = []

//       if (containerRef.current.hasAttribute('data-copy-wrapper')) {
//         elements = Array.from(containerRef.current.children)
//       } else {
//         elements = [containerRef.current] // if no wrapper then single item
//       }

//       elements.forEach(element => {
//         elementRef.current.push(element)

//         const split = SplitText.create(element, {
//           type: 'lines',
//           mask: 'lines',
//           lineClass: 'line++',
//         })

//         splitRef.current.push(split)

//         // const computedStyle = window.getComputedStyle(element);
//         lines.current.push(...split.lines)
//       })

//       gsap.set(lines.current, { y: '100%' })

//       const animationProps: gsap.TweenVars = {
//         y: '0%',
//         duration: 1,
//         stagger: 0.1,
//         ease: 'power4.out',
//         delay: delay,
//       }

//       if (animateOnScroll) {
//         gsap.to(lines.current, {
//           ...animationProps,
//           scrollTrigger: {
//             trigger: containerRef.current,
//             start: 'top 75%',
//             once: true,
//           },
//         })
//       } else {
//         gsap.to(lines.current, animationProps)
//       }

//       return () => {
//         splitRef.current.forEach(split => {
//           if (split) {
//             split.revert()
//           }
//         })
//       }
//     },
//     {
//       scope: containerRef,
//       dependencies: [animateOnScroll, delay],
//     },
//   )

//   if (React.Children.count(children) === 1) {
//     return React.cloneElement(children, { ref: containerRef })
//   }

//   return (
//     <div ref={containerRef} data-copy-wrapper="true">
//       {children}
//     </div>
//   )
// }
