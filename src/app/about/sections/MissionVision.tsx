import Image from 'next/image'
import BlurBackground from '@/shared/components/ui/base/BlurBackground'

export default function MissionVision() {
  return (
    <section className="space-y-[2rem]">
      <div className="relative flex flex-col items-stretch justify-between gap-[2rem] md:flex-row md:gap-[3rem]">
        {/* Left: Images */}
        <div className="relative flex items-center justify-center">
          <BlurBackground className="absolute top-1/2 left-1/2 h-[21.875rem] w-[21.875rem] -translate-x-1/2 -translate-y-1/2" />
          <Image
            src="/about_us/antho_and_henry.png"
            alt="Anthony and Henry"
            width={294}
            height={303}
            className="relative z-10 h-[18.9375rem] w-[18.375rem] rounded-lg object-cover"
          />
        </div>

        {/* Right: Mission Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-h3 mb-[0.75rem]">The Mission</h3>
          <p className="text-body2 md:max-w-md 2xl:max-w-md">
            Our mission is to empower individuals to explore, experiment, and experience life beyond
            routine by providing a seamless, all-in-one platform for discovering unique activities.
            Through an inclusive and flexible platform, we remove barriers to personal growth,
            social connection, and self-discovery — making it easier to prioritize yourself.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col-reverse items-stretch justify-between gap-[2rem] md:flex-row md:gap-[3rem]">
        {/* Left: Vision Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-h3 mb-[0.75rem]">The Vision</h3>
          <p className="text-body2 md:max-w-md 2xl:max-w-md">
            We strive to create a world where exploring new experiences is effortless, enriching,
            and a natural part of everyday life. By redefining how individuals discover and engage
            in activities, we aim to foster personal growth, creativity, and meaningful connections
            — making experiential learning more accessible and fulfilling for all.
          </p>
        </div>

        {/* Right: Images */}
        <div className="relative flex items-center justify-center">
          <BlurBackground className="absolute top-1/2 left-1/2 h-[21.875rem] w-[21.875rem] -translate-x-1/2 -translate-y-1/2" />
          <Image
            src="/about_us/cizurp-henry.png"
            alt="Calvin and Henry Nguyen"
            width={294}
            height={303}
            className="relative z-10 h-[18.9375rem] w-[18.375rem] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
