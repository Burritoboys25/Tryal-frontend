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

const FunMarquee = () => {
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
    <Section id="marque" ref={scope} className="flex items-center py-12" full>
      <div className="mx-auto mb-[4rem] w-full text-center">
        <h1 className="text-h2" data-anim="split-reveal">
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
    </Section>
  )
}

export default FunMarquee
