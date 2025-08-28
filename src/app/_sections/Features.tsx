'use client'
import Section from '@/shared/components/layout/Section'
import FeatureSlider from './FeatureSlider'
import { useRevealSplit } from '@/shared/components/animations/hooks/useSplitTextReveal'
import { useRef } from 'react'

const Features = () => {
  const scope = useRef<HTMLElement>(null!)
  useRevealSplit(scope)
  return (
    <Section ref={scope} className="flex min-h-dvh snap-start flex-col justify-center">
      <h2 className="text-h2" data-reveal-split>
        See what you can do with Tryal
      </h2>
      <FeatureSlider />
    </Section>
  )
}

export default Features
