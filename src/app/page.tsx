import Image from 'next/image'
import imgOne from '../../public/landing_page_img_1.png'
import imgTwo from '../../public/landing_page_img_2.png'
import imgThree from '../../public/landing_page_img_3.png'
import imgFour from '../../public/landing_page_img_4.png'
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
import BlurBackground from '@/shared/components/ui/base/BlurBackground'

import Container from '@/shared/components/layout/Container'

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

function ImageGrid() {
  return (
    <div className="relative h-[30dvh] w-[90%] max-w-[37.5rem] md:h-[40dvh] md:w-[25vw] 2xl:h-[70dvh] 2xl:w-[43.75rem]">
      <div className="absolute inset-0 flex translate-y-0 items-stretch justify-between gap-[0.125rem] md:-translate-y-[0.1875rem] md:gap-[0.25rem] 2xl:translate-y-0">
        <div className="flex h-full w-1/2 flex-col gap-[0.125rem]">
          <div className="flex h-[95%] flex-col gap-[0.125rem] sm:gap-[0.25rem]">
            <div className="relative min-h-0 flex-1">
              <Image
                src={imgOne}
                alt="Person enjoying a local experience"
                className="h-full w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 45vw, 35vw"
                quality={90}
                priority
                fill
              />
            </div>
            <div className="relative min-h-0 flex-1">
              <Image
                src={imgTwo}
                alt="Engaging local activity"
                className="h-full w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 45vw, 35vw"
                quality={90}
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/2 flex-col justify-end gap-[0.125rem]">
          <div className="flex h-[95%] flex-col gap-[0.125rem] sm:gap-[0.25rem]">
            <div className="relative min-h-0 flex-1">
              <Image
                src={imgThree}
                alt="Community gathering moment"
                className="h-full w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 45vw, 35vw"
                quality={100}
                fill
              />
            </div>
            <div className="relative min-h-0 flex-1">
              <Image
                src={imgFour}
                alt="Local experience highlight"
                className="h-full w-full rounded-lg object-cover"
                sizes="(max-width: 768px) 45vw, 35vw"
                quality={100}
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <ViewLayout type={'landing'}>
      {/* Hero Section */}
      <Container>
        <section className="mx-auto -mt-[4.3125rem] h-[100dvh] w-full">
          <div className="flex h-full flex-col-reverse items-center justify-center gap-[2rem] md:flex-row md:gap-[2rem] 2xl:gap-[4rem]">
            <div className="w-full">
              <h1 className="text-h1 mb-[1.5rem] leading-tight font-bold text-balance sm:text-[2.5rem] md:text-[4rem]">
                Discover.
                <br />
                Experience.
                <br />
                Repeat.
              </h1>
              <p className="text-sub2 text-muted-foreground mb-[2rem] max-w-lg">
                From hidden gems to thrilling adventures—find and book unforgettable experiences{' '}
                <span className="paintbrush-underline">
                  <span>all in one place.</span>
                </span>
              </p>

              <div className="relative justify-end md:absolute md:w-[31.625rem] 2xl:relative 2xl:max-w-md">
                <InterestWaitlistForm />
              </div>
            </div>

            <div className="relative flex w-full justify-center md:w-1/2">
              {/* Glow Background*/}
              <BlurBackground
                className="absolute top-1/2 left-1/2 h-[25rem] w-[18.75rem] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[31.25rem] md:w-[25rem] 2xl:h-[37.5rem] 2xl:w-[37.5rem]"
                blur="8.75rem"
                color="#F4BCAB"
              />
              <ImageGrid />
            </div>
          </div>
        </section>

        {/* Explore, Connect, Book Section */}
        <section className="flex w-full items-center">
          <div className="mx-auto w-full rounded-3xl bg-[#e7efef] px-[1rem] py-[1rem] md:px-[5rem] md:py-[5rem]">
            <div className="w-full text-center">
              <h1 className="text-h2">
                Explore, connect, and book with
                <span className="text-primary"> confidence</span>.
              </h1>
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
        </section>
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
                    className="flex items-center gap-[0.5rem] rounded-xl p-[1rem] shadow-md inset-shadow-xs"
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
        <section className="mt-[14rem] flex w-full items-center">
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
        </section>
        {/* Join Waitlist Section */}
        <section className="my-[9rem] flex w-full items-center">
          <div className="mx-auto w-full text-center">
            <h1 className="text-h2">
              Fun&apos;s around the corner —
              <span className="text-primary"> Don&apos;t miss out!</span>
            </h1>
            <div className="mx-auto mt-[3rem] flex w-full justify-center md:max-w-md">
              <InterestWaitlistForm />
            </div>
          </div>
        </section>
      </Container>
    </ViewLayout>
  )
}
