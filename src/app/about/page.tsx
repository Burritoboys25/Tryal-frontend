import Founders from '@/app/about/sections/Founders'
import MissionVision from '@/app/about/sections/MissionVision'
import OurStory from '@/app/about/sections/OurStory'
import Values from './sections/Values'

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <OurStory />
      <MissionVision />
      <Values />
      <Founders />
    </div>
  )
}
