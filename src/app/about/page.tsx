import Founders from '@/app/about/sections/Founders'
import MissionVision from '@/app/about/sections/MissionVision'
import OurStory from '@/app/about/sections/OurStory'
import Values from './sections/Values'
import MainLayout from '@/shared/components/layout/MainLayout'
import Container from '@/shared/components/layout/Container'

export default function AboutPage() {
  return (
    <MainLayout>
      <Container>
        <div className="space-y-8 md:space-y-12 2xl:space-y-24">
          <OurStory />
          <MissionVision />
          <Values />
          <Founders />
        </div>
      </Container>
    </MainLayout>
  )
}
