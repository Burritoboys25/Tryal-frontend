// app/providers/LenisProvider.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from '@/shared/lib/gsap'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'

type Props = { children: React.ReactNode }

export default function LenisProvider({ children }: Props) {
  const lenisRef = useRef<LenisRef | null>(null)

  useEffect(() => {
    // GSAP’s ticker provides time in SECONDS; Lenis expects MS.
    const update = (time: number) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (lenisRef.current as any)?.lenis
      if (lenis) lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    // Optional: avoid GSAP’s internal lag smoothing so scroll stays crisp
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      // optional: lenisRef.current?.lenis?.destroy()
    }
  }, [])

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        duration: 1.2, // ✅ sweet spot for a premium feel
        easing: t => 1 - Math.pow(1 - t, 3), // ✅ smooth ease-out curve
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  )
}
