'use client'
import Section from '@/shared/components/layout/Section'
import { useRevealSplit } from '@/shared/components/animations/hooks/useSplitTextReveal'
import { useRef } from 'react'
import FaFeatureSlider from './FaFeatureSlider'

const Features = () => {
  const scope = useRef<HTMLElement>(null!)
  useRevealSplit(scope)
  return (
    <Section ref={scope} className="flex min-h-dvh snap-start flex-col justify-center">
      <h2 className="text-h2 mb-2 text-3xl font-bold">Dynamic Pricing & Scheduling Made Easy</h2>
      <p className="mb-4 text-lg">
        Your business isn’t one-size-fits-all — your pricing and scheduling shouldn’t be either.
        With Tryal, you have the freedom to:
      </p>
      <FaFeatureSlider />
    </Section>
  )
}

export default Features
