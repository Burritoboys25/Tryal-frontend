import InterestWaitlistForm from '@/modules/waitlist/components/InterestWaitlistForm'
import Image, { StaticImageData } from 'next/image'
import imgOne from '../../../public/landing_page_img_1.png'
import imgTwo from '../../../public/landing_page_img_2.png'
import imgThree from '../../../public/landing_page_img_3.png'
import imgFour from '../../../public/landing_page_img_4.png'
import { Marquee } from '@/shared/components/magicui/marquee'

const COL_A = [imgOne, imgTwo]
const COL_B = [imgThree, imgFour]

function Tiles({ items }: { items: StaticImageData[] }) {
  return (
    <>
      {items.map((src, i) => (
        <div key={i} className="relative aspect-square shrink-0 overflow-hidden rounded-xl">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(min-width:1024px) 20vw, (min-width:640px) 40vw, 90vw"
            priority={i === 0}
            quality={100}
          />
        </div>
      ))}
    </>
  )
}

const Hero = () => {
  return (
    <div className="grid min-h-screen snap-start grid-cols-1 md:grid-cols-12">
      {/* Left Side */}
      <div className="row-start-2 self-start md:col-span-6 md:row-start-1 md:self-center">
        <h1 className="hero-text">
          Discover.
          <br />
          Experience.
          <br />
          Repeat.
        </h1>
        <p className="text-sub1 mt-2 mb-4">
          From hidden gems to thrilling adventures—find and book unforgettable experiences{' '}
        </p>
        <InterestWaitlistForm />
      </div>

      {/* Right Side */}
      <div className="h-[50vh] md:col-span-6 md:h-[90vh]">
        <div className="grid h-full grid-cols-2 lg:h-screen">
          {/* Column A — up */}
          <Marquee vertical repeat={2} className="h-full [--duration:48s]">
            <Tiles items={COL_A} />
          </Marquee>

          {/* Column B — down (reverse) */}
          <Marquee vertical reverse repeat={2} className="h-full [--duration:58s]">
            <Tiles items={COL_B} />
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Hero
