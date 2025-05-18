import React from 'react'
import BalanceIcon from '@/shared/assets/icons/balance.svg'
import CommunityIcon from '@/shared/assets/icons/community.svg'
import ExplorationIcon from '@/shared/assets/icons/exploration.svg'
import OpenMindedIcon from '@/shared/assets/icons/openminded.svg'

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
      'We foster meaningful relationships with your community by bringing like-minded individuals together and supporting local businesses.',
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
    <section className="flex flex-col items-center bg-white text-center">
      <h2 className="text-h2 mb-4">Our Values</h2>
      <p className="text-body2 mx-auto mb-12 max-w-lg">
        Our values are the foundation of everything we do. They guide our decisions, shape our
        culture, and define how we work together and serve our community.
      </p>

      <div className="grid grid-cols-1 gap-5 text-left md:grid-cols-2 2xl:grid-cols-4">
        {values.map(({ title, icon: Icon, description }) => (
          <div
            key={title}
            className="flex max-w-[284px] flex-col gap-4 rounded-xl bg-white p-6 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <Icon className="h-12 w-12" aria-hidden="true" />
              <h4 className="text-sub1">{title}</h4>
            </div>
            <div className="text-body2 text-muted-foreground">{description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Values
