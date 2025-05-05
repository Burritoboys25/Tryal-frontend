import { Button } from '@/shared/components/ui/button'
import Image from 'next/image';
import imgOne from '../../public/landing_page_img_1.png';
import imgTwo from '../../public/landing_page_img_2.png';
import imgThree from '../../public/landing_page_img_3.png';
import imgFour from '../../public/landing_page_img_4.png';

export default function Home() {
  return (
    <>
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
            {/* Glow Background bg-[#F4BCAB] bg-red-400*/}
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
    </>
  )
}
