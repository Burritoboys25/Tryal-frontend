import { Marquee } from '@/shared/components/magicui/marquee'
import PaletteIcon from '@/shared/assets/icons/palette.svg'
import ChefIcon from '@/shared/assets/icons/chef_hat.svg'
import ToolIcon from '@/shared/assets/icons/handyman.svg'
import JoystickIcon from '@/shared/assets/icons/joystick.svg'
import MusicIcon from '@/shared/assets/icons/music_note.svg'
import MountainIcon from '@/shared/assets/icons/mountain_flag.svg'
import SelfImprovementIcon from '@/shared/assets/icons/self_improvement.svg'
import Section from '@/shared/components/layout/Section'
import { useRef } from 'react'
import { useGSAP, SplitText, gsap } from '@/shared/lib/gsap'

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

const ExploreMarquee = () => {
  const scope = useRef<HTMLElement>(null)
  useGSAP(
    () => {
      const target = new SplitText('[data-anim="split-reveal"]', {
        type: 'lines',
        mask: 'lines',
        linesClass: 'overflow-visible leading-[1.4]',
      })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 75%',
        },
      })
      tl.from(target.lines, { opacity: 0, y: 100, duration: 1, ease: 'power4.out' })
    },
    { scope: scope },
  )
  return (
    <Section
      id="marquee"
      ref={scope}
      full
      className="flex w-full max-w-full items-center overflow-x-hidden"
    >
      <div
        className="text-foreground-dark ml-3 flex h-[6rem] w-[6.8rem] items-center justify-center rounded-2xl bg-[#124E5B] px-5 text-xl font-semibold md:ml-8 md:h-[6rem] md:w-[9.4rem] xl:h-[12.25rem] xl:w-[20rem] xl:text-4xl"
        data-anim="split-reveal"
      >
        Explore
      </div>

      {/* Marque */}
      <div className="flex w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {marqueList.map(({ title, icon: Icon }) => (
            <div key={title} className="ml-24 flex items-center gap-2">
              <Icon arial-hidden="true" />
              <h4 className="text-sub1">{title}</h4>
            </div>
          ))}
        </Marquee>
      </div>
    </Section>
  )
}

export default ExploreMarquee
