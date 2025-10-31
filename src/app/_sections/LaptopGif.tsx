import Image from 'next/image'
import Section from '@/shared/components/layout/Section'
import Laptop from '../../../public/Tryal_mockup.gif'

const LaptopGif = () => {
  return (
    <Section id="laptop-gif" full className="snap-center px-4 md:px-9" background="none">
      <div className="mt-20 text-center sm:mt-32 md:mt-40">
        <h1 className="text-display">Plan. Click. Go. Enjoy.</h1>
        <div className="bg-surface-dark relative mt-20 h-[160px] w-full rounded-2xl sm:mt-32 sm:h-[280px] md:mt-56 md:h-[401px] md:rounded-3xl">
          <div className="absolute bottom-0.5 left-1/2 h-[240px] w-[432px] -translate-x-1/2 sm:h-[420px] sm:w-[756px] md:h-[600px] md:w-[1080px]">
            <Image
              src={Laptop}
              alt="Tryal laptop mockup showing the platform interface"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default LaptopGif
