'use client'
import Section from '@/shared/components/layout/Section'
import FeatureSlider from './FeatureSlider'
import { useRevealSplit } from '@/shared/components/animations/hooks/useSplitTextReveal'
import { useRef } from 'react'

const Features = () => {
  const scope = useRef<HTMLElement>(null!)
  useRevealSplit(scope)
  return (
    <Section ref={scope} full className="mx-auto 2xl:max-w-[95vw]">
      <FeatureSlider />
    </Section>
  )
}

export default Features
