import Container from '@/shared/components/layout/Container'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import Linkedin from '@/shared/assets/icons/linkedin.svg'
import BlurBackground from '@/shared/components/ui/base/BlurBackground'

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
    <section className="py-24">
      <Container className="text-center">
        <h2 className="text-h2 mb-4">Get to Know the Founders Behind The Mission</h2>
        <p className="text-body2 mx-auto mb-12 max-w-2xl">
          Our team is a passionate group of innovators, creators, and problem-solvers dedicated to
          making a difference. Each member brings unique skills and expertise, working together to
          drive our mission forward.
        </p>{' '}
        <div className="relative z-0">
          <BlurBackground
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:rotate-90"
            width={40}
            height={800}
            blur="60px"
            color="#F4BCAB"
            style={{
              width: 'clamp(40px, 5vw, 1300px)',
              height: 'clamp(800px, 100vh, 40px)',
            }}
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
            {founders.map(founder => (
              <div
                key={founder.name}
                className="flex flex-col items-center justify-between gap-3 rounded-xl border bg-white px-3 py-4 shadow-md"
              >
                {/* Avatar */}
                <Image
                  src={founder.avatar}
                  alt="Founder Avatar"
                  width={100}
                  height={100}
                  className="mt-4 h-24 w-24 rounded-full object-cover object-[center_5%] shadow-lg md:h-32 md:w-32"
                />

                {/* Name + Quote */}
                <div>
                  <h4 className="text-sub3">{founder.name}</h4>
                  <p className="text-body2 min-h-12 overflow-hidden">&quot;{founder.quote}&quot;</p>
                </div>

                {/* Lucide Icons */}
                <div className="mt-2 flex gap-4">
                  <a href={`mailto:${founder.email}`} target="_blank" rel="noopener noreferrer">
                    <Mail className="h-6 w-6" aria-label="Email" />
                  </a>
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" aria-label="Linkedin" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
