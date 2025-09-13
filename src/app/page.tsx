import Image from 'next/image'
import LaptopGif from '../../public/Tryal_mockup.gif'
import LocationIcon from '@/shared/assets/icons/where_to_vote.svg'
import BookingIcon from '@/shared/assets/icons/booking.svg'
import CalendarIcon from '@/shared/assets/icons/calendar_clock.svg'
import HikingIcon from '@/shared/assets/icons/hiking.svg'
import DiversityIcon from '@/shared/assets/icons/diversity.svg'
import PlantIcon from '@/shared/assets/icons/pottedPlant.svg'
import PaletteIcon from '@/shared/assets/icons/palette.svg'
import ChefIcon from '@/shared/assets/icons/chef_hat.svg'
import ToolIcon from '@/shared/assets/icons/handyman.svg'
import JoystickIcon from '@/shared/assets/icons/joystick.svg'
import MusicIcon from '@/shared/assets/icons/music_note.svg'
import MountainIcon from '@/shared/assets/icons/mountain_flag.svg'
import SelfImprovementIcon from '@/shared/assets/icons/self_improvement.svg'

import { Marquee } from '@/shared/components/magicui/marquee'
import InterestWaitlistForm from '@/modules/waitlist/components/InterestWaitlistForm'
import ViewLayout from '@/shared/components/layout/ViewLayout'
// import BlurBackground from '@/shared/components/ui/base/BlurBackground'

import Section from '@/shared/components/layout/Section'
import SectionCard from '@/shared/components/layout/SectionCard'

import Hero from '@/app/_sections/Hero'
import FeatureSlider from './_sections/FeatureSlider'
import Faq from './_sections/Faq'
import Intro from './_sections/Intro'

const cards = [
  {
    title: 'Trusted local favorites',
    icon: LocationIcon,
    description: 'Only the best - every experience is verified and selected by our team',
  },
  {
    title: 'Seamless booking',
    icon: BookingIcon,
    description: 'Book your favorite activities in just a few taps. Simple, fast, and stress-free.',
  },
  {
    title: 'Flexible for any schedule',
    icon: CalendarIcon,
    description:
      "Whether you're free on weekends or just an hour after work, find activities that fit your life.",
  },
  {
    title: 'Unleash your inner explorer',
    icon: HikingIcon,
    description: 'Break away from the usual and dive into new hobbies and experiences.',
  },
  {
    title: 'Join a thriving community',
    icon: DiversityIcon,
    description: 'Meet new people, share your passions, and connect through shared experiences.',
  },
  {
    title: 'Support local & small businesses',
    icon: PlantIcon,
    description:
      'Every booking helps local instructors, artists, and entrepreneurs grow their passion.',
  },
]

const marqueList = [
  {
    title: 'Arts & Crafts',
    icon: PaletteIcon,
  },
  {
    title: 'Culinary Experiences',
    icon: ChefIcon,
  },
  {
    title: 'DIY & Hands-on',
    icon: ToolIcon,
  },
  {
    title: 'Just-for-Fun',
    icon: JoystickIcon,
  },
  {
    title: 'Music & Dance',
    icon: MusicIcon,
  },
  {
    title: 'Outdoors & Adventure',
    icon: MountainIcon,
  },
  {
    title: 'Wellness & Mindfulness',
    icon: SelfImprovementIcon,
  },
]

export default function Home() {
  return (
    <ViewLayout type={'landing'}>
      <Section>
        <Hero />
      </Section>
      <Section className="flex h-auto snap-start flex-col justify-center">
        <Intro />
      </Section>

      <SectionCard className="flex min-h-dvh snap-start flex-col justify-center bg-white">
        <h2 className="text-h2">See what you can do with Tryal</h2>
        <FeatureSlider />
      </SectionCard>

      {/* Explore, Connect, Book Section */}
      <Section className="flex min-h-dvh w-full snap-start items-center">
        <div className="mx-auto w-full rounded-3xl bg-[#e7efef] px-[1rem] py-[1rem] md:px-[5rem] md:py-[5rem]">
          <div className="w-full text-center">
            <h2 className="text-h2">
              Explore, connect, and book with
              <span className="text-primary"> confidence</span>.
            </h2>
          </div>
          {/* Cards Container */}
          <div className="mt-[2.5rem] grid w-full grid-cols-1 gap-x-[3rem] gap-y-[2.5rem] md:grid-cols-2 2xl:grid-cols-3">
            {cards.map(({ title, icon: Icon, description }) => (
              <div key={title} className="rounded-xl bg-white p-[1.25rem] shadow-lg">
                <Icon className="h-[3rem] w-[3rem]" aria-hidden="true" />
                <h4 className="text-sub1">{title}</h4>
                <p className="text-body2 mt-[0.75rem]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Marque Section */}
      <section className="mt-[10rem] flex w-full items-center">
        <div className="mx-auto mb-[4rem] w-full text-center">
          <h1 className="text-h2">
            Find your
            <span className="text-primary"> next passion </span>
            from a wide variety of categories
          </h1>
          {/* Marque */}
          <div className="mt-[4rem] flex w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:25s]">
              {marqueList.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-[0.5rem] rounded-xl bg-white p-[1rem] shadow-md inset-shadow-xs"
                >
                  <Icon arial-hidden="true" />
                  <h4 className="text-sub1">{title}</h4>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
      {/* Gif Laptop Section*/}
      <Section className="grid-section my-[14rem] flex w-full snap-center items-center">
        <div className="mx-auto w-full text-center">
          <h1 className="text-h2 mb-[0.5rem]">
            Booking unforgettable experiences has never been this
            <span className="text-primary"> easy</span>.
          </h1>

          <div className="relative flex min-h-[11.875rem] flex-col md:min-h-[25.0625rem] 2xl:min-h-[37.5rem]">
            <div className="flex-1"></div>
            <div className="mt-auto min-h-[7.9375rem] w-full rounded-xl bg-[#E7EFEF] md:min-h-[13.375rem] 2xl:min-h-[25.0625rem]">
              <div className="absolute bottom-[2rem] left-1/2 w-[19.875rem] max-w-full -translate-x-1/2 md:w-[45rem] 2xl:w-[67.5rem]">
                <Image src={LaptopGif} alt="laptop gif" unoptimized className="h-auto w-full" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="-mb-[1rem]">
        <SectionCard className="flex snap-center items-center bg-white">
          <Faq />
        </SectionCard>
      </div>
    </ViewLayout>
  )
}
