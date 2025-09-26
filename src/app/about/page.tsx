import Founders from '@/app/about/sections/Founders'
import Values from './sections/Values'
import LenisProvider from '@/shared/lib/LenisProvider'
import MainFooter from '@/shared/components/layout/MainFooter'
import OurStory from './sections/OurStory'

export default function AboutPage() {
  return (
    <>
      <LenisProvider>
        <div className="space-y-4 md:space-y-8">
          <OurStory />
          <Values />
          <Founders />
        </div>
        <div className="pt-12">
          <MainFooter />
        </div>
      </LenisProvider>
    </>
  )
}
