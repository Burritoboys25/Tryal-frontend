import { Button } from '@/shared/components/ui/button'
import Image from 'next/image';
import imgOne from '../../public/landing_page_img_1.png';
import imgTwo from '../../public/landing_page_img_2.png';
import imgThree from '../../public/landing_page_img_3.png';
import imgFour from '../../public/landing_page_img_4.png';
import LocationIcon from '@/shared/assets/icons/where_to_vote.svg';
import BookingIcon from '@/shared/assets/icons/booking.svg';
import CalendarIcon from '@/shared/assets/icons/calendar_clock.svg';
import HikingIcon from '@/shared/assets/icons/hiking.svg';
import DiversityIcon from '@/shared/assets/icons/diversity.svg';
import PlantIcon from '@/shared/assets/icons/pottedPlant.svg';

const cards = [
  {
    title: 'Trusted local favorites',
    icon: LocationIcon,
    description: 'Only the best - every experience is verified and selected by our team'
  },
  {
    title: 'Seamless booking',
    icon: BookingIcon,
    description: 'Book your favorite activities in just a few taps. Simple, fast, and stress-free.'
  },
  {
    title: 'Flexible for any schedule',
    icon: CalendarIcon,
    description: "Whether you're free on weekends or just an hour after work, find activities that fit your life."
  },
  {
    title: 'Unleash your inner explorer',
    icon: HikingIcon,
    description: 'Break away from the usual and dive into new hobbies and experiences.'
  },
  {
    title: 'Join a thriving community',
    icon: DiversityIcon,
    description: 'Meet new people, share your passions, and connect through shared experiences.'
  },
  {
    title: 'Support local & small businesses',
    icon: PlantIcon,
    description: 'Every booking helps local instructors, artists, and entrepreneurs grow their passion.'
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="-mt-[72px] flex min-h-screen w-full items-center bg-white px-4 py-16 md:px-12 md:py-0">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 md:flex-row">
          <div className="w-full md:w-1/2">
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

            <form className="flex max-w-md flex-col justify-end gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow rounded-md border border-gray-300 px-4 py-2 text-sm sm:w-auto"
              />
              <Button>Join Waitlist</Button>
            </form>
          </div>

          <div className="relative z-0 flex w-full justify-center md:w-1/2">
            {/* Glow Background*/}
            <div className="absolute top-1/2 left-1/2 z-[-1] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F4BCAB] blur-[120px] md:h-[600px] md:w-[600px]" />

            {/* Image Placeholder */}
            <div className="z-0 flex gap-4 mt-[20px]">
              {/* Left Images Container */}
              <div className='flex flex-col gap-4 mt-[50px]'>
                <div className='h-[285px] w-[285px]'>
                  <Image src={imgOne} alt='top-left-image'/>
                </div>
                <div className='h-[285px] w-[285px]'>
                  <Image src={imgTwo} alt='bottom-left-image'/>
                </div>
              </div>
              {/* Right Images Container */}
              <div className='flex flex-col gap-4 mt-[110px]'>
                <div className='h-[285px] w-[285px]'>
                  <Image src={imgThree} alt='top-right-image'/>
                </div>
                <div className='h-[285px] w-[285px]'>
                  <Image src={imgFour} alt='bottom-right-image'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore, Connect, Book Section */}
      <section className="flex min-h-screen w-full items-center bg-white px-4 py-16 md:px-12 md:py-0">
        <div className='mx-auto w-full max-w-7xl px-4 md:px-20 md:py-20 bg-[#E7EFEF] rounded-3xl'>
          <div className='w-full text-center'>
            <h1 className='font-semibold md:text-[40px]'>
              Explore, connect, and book with 
              <span className='text-orange-500'> confidence</span>
              .
            </h1>
          </div>
          {/* Cards Container */}
          <div className='w-full mt-[40px] grid grid-cols-3 gap-x-12 gap-y-10'>
            {cards.map(({title, icon: Icon, description}) => (
              <div key={title} className='bg-white rounded-xl p-5'>
                <Icon className="h-12 w-12" arial-hidden="true" />
                <h4 className="text-sub1">{title}</h4>
                <p className="text-body4 text-gray-600 mt-3">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
