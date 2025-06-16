import React from 'react'
import BalanceIcon from '@/shared/assets/icons/balance.svg'
import CommunityIcon from '@/shared/assets/icons/community.svg'
import ExplorationIcon from '@/shared/assets/icons/exploration.svg'
import OpenMindedIcon from '@/shared/assets/icons/openminded.svg'
import BlurBackground from '@/shared/components/ui/base/BlurBackground'

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
    <section className="flex flex-col items-center text-center">
      <h2 className="text-h2 mb-4">Our Values</h2>
      <p className="text-body2 mx-auto mb-12 max-w-lg">
        Our values are the foundation of everything we do. They guide our decisions, shape our
        culture, and define how we work together and serve our community.
      </p>

      <div className="relative z-0 flex items-center justify-center">
        <BlurBackground
          className="absolute top-1/2 left-1/2 -z-10 h-full max-h-[400px] w-[64px] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden md:h-[200px] md:w-[200px] 2xl:h-[50px] 2xl:w-full"
          blur="80px"
          color="#F4BCAB"
          style={{ borderRadius: '64px' }}
        />
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
      </div>
    </section>
  )
}

export default Values
