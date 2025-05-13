import Image from 'next/image'
import imgOne from '../../public/landing_page_img_1.png'
import imgTwo from '../../public/landing_page_img_2.png'
import imgThree from '../../public/landing_page_img_3.png'
import imgFour from '../../public/landing_page_img_4.png'
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
import MainLayout from '@/shared/components/layout/MainLayout'
import { Button } from '@/shared/components/ui/button'


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
    <MainLayout>
      {/* Hero Section */}
      <section className="mx-auto -mt-[72px] h-screen max-w-7xl px-4">
        <div className="flex h-full flex-col-reverse items-center justify-center sm:flex-row">
          <div className="w-full">
            <h1 className="mb-6 text-[32px] leading-tight font-bold text-balance sm:text-[40px] md:text-[64px]">
              Discover.
              <br />
              Experience.
              <br />
              Repeat.
            </h1>
            <p className="mb-8 max-w-md text-sm text-gray-600 sm:text-base md:text-lg">
              From hidden gems to thrilling adventures—find and book unforgettable experiences{' '}
              <span className="underline decoration-orange-500 underline-offset-4">
                all in one place.
              </span>
            </p>

            <div className="w-full justify-end">
              <InterestWaitlistForm />
            </div>
          </div>

          <div className="relative z-0 flex w-full justify-center md:w-1/2">
            {/* Glow Background*/}
            <div className="absolute top-1/2 left-1/2 z-[-1] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4BCAB] blur-[120px] sm:h-[450px] sm:w-[450px] md:h-[600px] md:w-[600px]" />

            {/* Image Placeholder */}
            <div className="z-0 flex gap-4">
              {/* Left Images Container */}
              <div className="mt-[10px] flex flex-col gap-4 sm:mt-[50px]">
                <div className="h-[285px] w-[285px]">
                  <Image src={imgOne} alt="top-left-image" className='rounded-lg object-cover h-full w-full' />
                </div>
                <div className="h-[285px] w-[285px]">
                  <Image src={imgTwo} alt="bottom-left-image" className='rounded-lg object-cover h-full w-full' />
                </div>
              </div>
              {/* Right Images Container */}
              <div className="mt-[30px] flex flex-col gap-4 sm:mt-[110px]">
                <div className="h-[285px] w-[285px]">
                  <Image src={imgThree} alt="top-right-image" className='rounded-lg object-cover h-full w-full' />
                </div>
                <div className="h-[285px] w-[285px]">
                  <Image src={imgFour} alt="bottom-right-image" className='rounded-lg object-cover h-full w-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore, Connect, Book Section */}
      <section className="flex min-h-screen w-full items-center px-4 py-16 md:px-12 md:py-0">
        <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#e7efef] px-4 py-16 md:px-20 md:py-20">
          <div className="w-full text-center">
            <h1 className="font-semibold md:text-[36px]">
              Explore, connect, and book with
              <span className="text-orange-500"> confidence</span>.
            </h1>
          </div>
          {/* Cards Container */}
          <div className="mt-[40px] grid w-full grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ title, icon: Icon, description }) => (
              <div key={title} className="rounded-xl bg-white p-5 shadow-lg">
                <Icon className="h-12 w-12" arial-hidden="true" />
                <h4 className="text-sub1">{title}</h4>
                <p className="text-body4 mt-3 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Marque Section */}
      <section className="my-[2rem] flex w-full items-center bg-white px-4 py-16 md:px-12 md:py-0">
        <div className="mx-auto w-full max-w-7xl text-center">
          <h1 className="text-h2 font-semibold text-[#797979]">
            Find your
            <span className="text-[#2E2E2E]"> next passion </span>
            from a wide variety of categories
          </h1>
          {/* Marque */}
          <div className="mt-16 flex w-full overflow-hidden">
            <Marquee pauseOnHover className="[--duration:25s]">
              {marqueList.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-2 rounded-xl p-4 shadow-md inset-shadow-xs"
                >
                  <Icon arial-hidden="true" />
                  <h4 className="text-sub1">{title}</h4>
                </div>
              ))}
            </Marquee>
          </div>
          {/* Join Waitlist */}
          <h1 className="text-h2 mt-[8rem] font-semibold text-[#797979]">
            Fun&apos;s around the corner -
            <span className="text-[#2E2E2E]"> join the waitlist!</span>
          </h1>
          <form className="mx-auto my-[3rem] flex max-w-lg flex-col justify-end gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow rounded-md border border-gray-300 px-4 py-2 text-sm sm:w-auto"
            />
            <Button className='cursor-pointer'>Join Waitlist</Button>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}
