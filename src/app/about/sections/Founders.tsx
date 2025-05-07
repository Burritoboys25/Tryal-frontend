import Container from '@/shared/components/layout/Container'
import { Mail, Phone } from 'lucide-react'

const founders = [
  {
    name: 'Destiny Gosling',
    quote: 'I use AI to whiten my teeth',
  },
  {
    name: '_Two',
    quote: "I'm the one",
  },
  {
    name: 'Mr. F',
    quote: "I'm just a code monkey",
  },
  {
    name: 'Pledge_three',
    quote: 'FAN-TASTIC!',
  },
]

export default function Founders() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h2 className="text-h2 mb-4 font-semibold">Get to Know the Founders Behind The Mission</h2>
        <p className="text-body4 mx-auto mb-12 max-w-2xl text-gray-600">
          Our team is a passionate group of innovators, creators, and problem-solvers dedicated to
          making a difference. Each member brings unique skills and expertise, working together to
          drive our mission forward.
        </p>

        <div className='relative z-0'>
          <div className="absolute top-1/2 left-1/2 z-[-1] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2  bg-[#F4BCAB] blur-[70px] md:h-[40px] md:w-[1300px]" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {founders.map(founder => (
              <div
                key={founder.name}
                className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-white p-6 shadow-md"
              >
                {/* Avatar Placeholder */}
                <div className="h-24 w-24 rounded-full bg-gray-300" />

                {/* Name + Quote */}
                <div>
                  <h4 className="text-body1 font-bold">{founder.name}</h4>
                  <p className="text-body4 mt-1 text-gray-600 italic">
                    &quot;{founder.quote}&quot;
                  </p>
                </div>

                {/* Lucide Icons */}
                <div className="mt-2 flex gap-4 text-gray-600">
                  <Mail className="h-5 w-5" aria-label="Email" />
                  <Phone className="h-5 w-5" aria-label="Phone" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
