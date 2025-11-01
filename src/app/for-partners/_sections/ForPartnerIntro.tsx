import Section from '@/shared/components/layout/Section'
import React from 'react'

const INTRO_CONTENT = {
  description:
    'Running a local business is hard enough without spending hours on marketing, managing bookings, and filling seats. That’s why we built Tryal: a platform designed to help you get discovered, simplify operations, and grow revenue — all without extra overhead. With Tryal, you stay focused on what you do best: creating incredible experiences. We’ll handle the rest.',
}

const ForPartnerIntro = () => {
  return (
    <Section full className="px-4 md:px-9">
      <div className="w-full xl:max-w-2/3">
        <h3 className="text-h2-5">{INTRO_CONTENT.description}</h3>
      </div>
    </Section>
  )
}

export default ForPartnerIntro
