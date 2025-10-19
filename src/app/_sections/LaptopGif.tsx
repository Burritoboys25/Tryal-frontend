import Image from 'next/image'
import Section from '@/shared/components/layout/Section'
import Laptop from '../../../public/Tryal_mockup.gif'

const LaptopGif = () => {
  return (
    <Section id="laptop-gif" full className="snap-center px-4 md:px-9" background="none">
      <div className="mt-40 text-center">
        <h1 className="text-display">Plan. Click. Go. Enjoy.</h1>
        <div className="bg-surface-dark relative mt-56 h-[401px] w-full rounded-3xl">
          <div className="absolute bottom-0.5 left-1/2 h-[600px] w-[1080px] -translate-x-1/2">
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
