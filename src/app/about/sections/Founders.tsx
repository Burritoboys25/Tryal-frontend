import Container from '@/shared/components/layout/Container'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import Linkedin from '@/shared/assets/icons/linkedin.svg'
import BlurBackground from '@/shared/components/ui/base/BlurBackground'
import Section from '@/shared/components/layout/Section'

const founders = [
  {
    name: 'Henry Le',
    quote: 'Alone we can go fast but together we can go far.',
    linkedin: 'https://www.linkedin.com/in/henry-le-585719187/',
    avatar: '/ai_headshots/Henry_Le_AI_Pic.png',
    email: 'Henrycle16@gmail.com',
  },
  {
    name: 'Henry Nguyen',
    quote: 'Pressure is a privilege.',
    linkedin: 'https://www.linkedin.com/in/henry-nguyen682/',
    avatar: '/ai_headshots/Henry_N_AI_Pic.png',
    email: 'nguyenhenry682@gmail.com',
  },
  {
    name: 'Calvin Nguyen',
    quote: 'Rooted in trust. Growing through connection.',
    linkedin: 'https://www.linkedin.com/in/calvintnguyen/',
    avatar: '/ai_headshots/Calvin_AI_Pic.png',
    email: 'cnguyenr42@gmail.com',
  },
  {
    name: 'Anthony Nguyen',
    quote: 'Excellence isn’t a goal—it’s our baseline.',
    linkedin: 'https://www.linkedin.com/in/anthony-nguyen-02861b331/',
    avatar: '/ai_headshots/Anthony_AI_Pic.png',
    email: 'anthonynuge0509@gmail.com',
  },
]

export default function Founders() {
  return (
    <Section id="contact" background="salmon" className="py-[6rem]">
      <Container className="text-center">
        <h1 className="text-h1 mb-[1rem]">Get to Know the Founders Behind The Mission</h1>
        <p className="text-sub4 mx-auto mb-[3rem]">
          Our team is a passionate group of innovators, creators, and problem-solvers dedicated to
          making a difference. Each member brings unique skills and expertise, working together to
          drive our mission forward.
        </p>{' '}
        <div className="relative z-0">
          <BlurBackground
            className="absolute top-1/2 left-1/2 -z-10 h-full max-h-[25rem] w-[4rem] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden md:h-[12.5rem] md:w-[12.5rem] 2xl:h-[3.125rem] 2xl:w-full"
            blur="5rem"
            color="#F4BCAB"
          />
          <div className="grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 2xl:grid-cols-4">
            {founders.map(founder => (
              <div
                key={founder.name}
                className="flex flex-col items-center justify-between gap-[0.75rem] rounded-xl bg-white px-[0.75rem] py-[1rem] shadow-xl"
              >
                {/* Avatar */}
                <Image
                  src={founder.avatar}
                  alt="Founder Avatar"
                  width={100}
                  height={100}
                  className="mt-[1rem] h-[6rem] w-[6rem] rounded-full object-cover object-[center_5%] shadow-lg md:h-[8rem] md:w-[8rem]"
                />

                {/* Name + Quote */}
                <div>
                  <h4 className="text-sub3">{founder.name}</h4>
                  <p className="text-body2 min-h-[3rem] overflow-hidden">
                    &quot;{founder.quote}&quot;
                  </p>
                </div>

                {/* Lucide Icons */}
                <div className="mt-[0.5rem] flex gap-[1rem]">
                  <a href={`mailto:${founder.email}`} target="_blank" rel="noopener noreferrer">
                    <Mail className="h-[1.5rem] w-[1.5rem]" aria-label="Email" />
                  </a>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-[1.5rem] w-[1.5rem]" aria-label="Linkedin" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
