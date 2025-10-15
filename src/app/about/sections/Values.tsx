import React from 'react'
import BalanceIcon from '@/shared/assets/icons/balance.svg'
import CommunityIcon from '@/shared/assets/icons/community.svg'
import ExplorationIcon from '@/shared/assets/icons/exploration.svg'
import OpenMindedIcon from '@/shared/assets/icons/openminded.svg'
import Section from '@/shared/components/layout/Section'

const values = [
  {
    title: 'Exploration',
    icon: ExplorationIcon,
    description:
      'We inspire curiosity and personal development by making it effortless to try new things and uncover hidden passions.',
  },
  {
    title: 'Balance',
    icon: BalanceIcon,
    description:
      'We encourage self-care and fulfillment, helping individuals prioritize joy beyond work and daily responsibilities.',
  },
  {
    title: 'Community',
    icon: CommunityIcon,
    description:
      'We foster relationships with your community by bringing like-minded individuals together and supporting local businesses.',
  },
  {
    title: 'Open-minded',
    icon: OpenMindedIcon,
    description:
      'We remove barriers to discovery, ensuring everyone can explore new experiences, regardless of their background.',
  },
]

const Values = () => {
  return (
    <Section id="values" background="teal" className="flex flex-col items-center text-center">
      <h1 className="text-h1 mb-4">Our Values</h1>
      <p className="text-sub4 mx-auto mb-12">
        Our values are the foundation of everything we do. They guide our decisions, shape our
        culture, and define how we work together and serve our community.
      </p>

      <div className="relative z-0 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 2xl:grid-cols-4">
          {values.map(({ title, icon: Icon, description }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-between gap-[0.75rem] rounded-xl bg-white px-[0.75rem] py-[1.5rem] shadow-xl"
            >
              <Icon className="mt-[1rem] h-[6rem] w-[6rem]" aria-hidden="true" />
              <h4 className="text-sub3 text-background">{title}</h4>
              <div className="text-body2 text-muted-foreground min-h-[3rem] overflow-hidden text-center">
                {description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Values
