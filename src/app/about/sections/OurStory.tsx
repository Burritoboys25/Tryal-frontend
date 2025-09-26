import Image from 'next/image'
import BlurBackground from '@/shared/components/ui/base/BlurBackground'
import Section from '@/shared/components/layout/Section'

const OurStory = () => {
  return (
    <Section id="our-story" background="white" className="min-h-screen space-y-[4rem]">
      {/* Our Story */}
      <div className="pt-10 text-center">
        <h1 className="text-h1 mb-4">Our Story</h1>
        <p className="text-sub4 mb-4">
          It all started with four best friends who met in college—connected by a shared sense of
          adventure and curiosity. After graduation, life took us in different directions, each of
          us moving across the country to start our careers. At first, it was exciting—new cities,
          new jobs, new routines. But as time passed, we found ourselves consumed by work and
          struggling to make time for the things that once made us feel alive.
        </p>
        <p className="text-sub4">
          We realized we weren&apos;t alone. So many adults want to break out of their routine but
          don&apos;t know where to start. Finding new experiences can feel overwhelming—endless
          research, long-term commitments, and the uncertainty of stepping outside your comfort
          zone. That’s why we created Tryal—to remove the friction and make it easy to say “yes” to
          something new. Whether it&apos;s rediscovering a passion, trying a hobby for the first
          time, or simply making time for yourself, your next experience is waiting. Are you ready
          to rediscover yourself?
        </p>
      </div>

      {/* Mission */}
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
          <p className="text-sub4 md:max-w-md 2xl:max-w-md">
            Our mission is to empower individuals to explore, experiment, and experience life beyond
            routine by providing a seamless, all-in-one platform for discovering unique activities.
            Through an inclusive and flexible platform, we remove barriers to personal growth,
            social connection, and self-discovery — making it easier to prioritize yourself.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="relative flex flex-col-reverse items-stretch justify-between gap-[2rem] md:flex-row md:gap-[3rem]">
        {/* Left: Vision Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-h3 mb-[0.75rem]">The Vision</h3>
          <p className="text-sub4 md:max-w-md 2xl:max-w-md">
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
    </Section>
  )
}

export default OurStory
