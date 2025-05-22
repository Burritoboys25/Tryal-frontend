import Founders from '@/app/about/sections/Founders'
import MissionVision from '@/app/about/sections/MissionVision'
import OurStory from '@/app/about/sections/OurStory'
import Values from './sections/Values'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'

export default function AboutPage() {
  return (
    <ViewLayout type={"main"}>
      <Container>
        <div className="space-y-8 md:space-y-12 2xl:space-y-24">
          <OurStory />
          <MissionVision />
          <Values />
          <Founders />
        </div>
      </Container>
    </ViewLayout>
  )
}
