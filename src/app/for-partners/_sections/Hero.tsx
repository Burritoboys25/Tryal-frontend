'use client'
import Image, { StaticImageData } from 'next/image'
import imgOne from '../../../../public/landing_page_img_1.png'
import imgTwo from '../../../../public/landing_page_img_2.png'
import imgThree from '../../../../public/landing_page_img_3.png'
import imgFour from '../../../../public/landing_page_img_4.png'
import { Marquee } from '@/shared/components/magicui/marquee'
import Section from '@/shared/components/layout/Section'
import { gsap, useGSAP, SplitText } from '@/shared/lib/gsap'
import { useRef } from 'react'
import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'

const COL_A = [imgOne, imgTwo]
const COL_B = [imgThree, imgFour]

function Tiles({ items }: { items: StaticImageData[] }) {
  return (
    <>
      {items.map((src, i) => (
        <div key={i} className="tile relative aspect-3/4 shrink-0 overflow-hidden rounded-xl">
          <div className="tile__reveal h-full w-full">
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
        </div>
      ))}
    </>
  )
}

const FPHero = () => {
  const scope = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText)
      const heroSplit = new SplitText('.title', {
        type: 'lines',
        mask: 'lines',
      })
      const subSplit = new SplitText('.sub-text', {
        type: 'lines',
        mask: 'lines',
      })
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.add('start')
        .from('#gallery-1', { yPercent: 100, duration: 3, opacity: 0 }, 'start')
        .from('#gallery-2', { yPercent: -100, duration: 3, opacity: 0 }, 'start')
        .fromTo(
          '.tile__reveal',
          { clipPath: 'inset(50% 0% 50% 0% round 0.75rem)' },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0.75rem)',
            duration: 2,
            ease: 'power4.out',
            stagger: { each: 0.06, from: 'center' },
          },
          'start+=0.5',
        )
        .from(
          heroSplit.lines,
          { yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.12 },
          'start+=0.6',
        )
        .from(subSplit.lines, { yPercent: 100, opacity: 0, duration: 1.2 }, 'start+=1.2')
        .from('.cta-form', { yPercent: 100, opacity: 0, duration: 1.2 }, 'start+=1.4')
      return () => {
        heroSplit.revert()
        subSplit.revert()
      }
    },
    { scope },
  )

  return (
    <Section
      id="fphero"
      ref={scope}
      className="grid min-h-screen grid-cols-1 overflow-x-hidden md:grid-cols-12 2xl:px-24"
      background="light-teal"
    >
      {/* Left Side */}
      <div className="row-start-2 self-start px-4 md:col-span-6 md:row-start-1 md:self-center md:px-0">
        <div data-reveal-split>
          <h1 className="hero-text title text-[#09272E]">
            Grow.
            <br />
            Reach.
            <br />
            Repeat.
          </h1>
          <p className="text-sub2 sub-text mt-2 mb-4 text-[#09272E] md:max-w-xl">
            Tryal helps you showcase your experiences, maximize bookings, and connect with the right
            audience.{' '}
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="cta-form">
            <Button variant="solid">
              <Link href="/partner-waitlist">Become a partner</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="mask-fade-y h-[50vh] overflow-hidden p-16 md:col-span-6 md:h-[90vh]">
        <div className="gallery-container mask-fade-y grid h-full grid-cols-2 lg:h-screen">
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
    </Section>
  )
}

export default FPHero
