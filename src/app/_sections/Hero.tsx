'use client'
import InterestWaitlistForm from '@/modules/waitlist/components/InterestWaitlistForm'
import Image, { StaticImageData } from 'next/image'
import imgOne from '../../../public/landing_page_img_1.png'
import imgTwo from '../../../public/landing_page_img_2.png'
import imgThree from '../../../public/landing_page_img_3.png'
import imgFour from '../../../public/landing_page_img_4.png'
import { Marquee } from '@/shared/components/magicui/marquee'

import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/SplitText'
import gsap from 'gsap'

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
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {
      type: 'lines',
      mask: 'lines',
    })
    const subSplit = new SplitText('.sub-text', {
      type: 'lines',
      mask: 'lines',
    })

    const tl = gsap.timeline({
      defaults: { ease: 'expo.inOut' },
    })

    tl.add('start') // label to align cleanly
      .from('#gallery-1', { yPercent: 100, duration: 3, opacity: 0 }, 'start')
      .from('#gallery-2', { yPercent: -100, duration: 3, opacity: 0 }, 'start')
      .from(
        heroSplit.lines,
        { yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.12 },
        'start+=0.6',
      )
      .from(subSplit.lines, { yPercent: 100, opacity: 0, duration: 1.2 }, 'start+=1.2')
      .from('.cta-container', { width: 0, duration: 1.2, opacity: 0 }, 'start+=1.2')

    return () => {
      heroSplit.revert()
      subSplit.revert()
    }
  }, [])

  return (
    <section id="hero" className="grid min-h-screen snap-start grid-cols-1 md:grid-cols-12">
      {/* Left Side */}
      <div className="row-start-2 self-start md:col-span-6 md:row-start-1 md:self-center">
        <div data-reveal-split>
          <h1 className="hero-text title">
            Discover.
            <br />
            Experience.
            <br />
            Repeat.
          </h1>
          <p className="text-sub1 sub-text mt-2 mb-4">
            From hidden gems to thrilling adventures—find and book unforgettable experiences{' '}
          </p>
        </div>
        <div className="cta-container overflow-hidden">
          <InterestWaitlistForm />
        </div>
      </div>

      {/* Right Side */}
      <div className="h-[40vh] overflow-hidden p-16 md:col-span-6 md:h-[90vh]">
        <div className="gallery-container grid h-full grid-cols-2 lg:h-screen">
          {/* Column A — up */}
          <Marquee id="gallery-1" vertical repeat={2} className="h-full [--duration:48s]">
            <Tiles items={COL_A} />
          </Marquee>

          {/* Column B — down (reverse) */}
          <Marquee id="gallery-2" vertical reverse repeat={2} className="h-full [--duration:58s]">
            <Tiles items={COL_B} />
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Hero
