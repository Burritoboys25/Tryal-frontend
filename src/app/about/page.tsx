import Founders from '@/app/about/sections/Founders'
import MissionVision from '@/app/about/sections/MissionVision'
import OurStory from '@/app/about/sections/OurStory'
import Values from './sections/Values'
import MainLayout from '@/shared/components/layout/MainLayout'

export default function AboutPage() {
  return (
    <MainLayout>
      <div className="space-y-24">
        <OurStory />
        <MissionVision />
        <Values />
        <Founders />
      </div>
    </MainLayout>
  )
}
