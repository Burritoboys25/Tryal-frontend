import Image from 'next/image'

export default function MissionVision() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col items-stretch justify-between gap-8 md:flex-row md:gap-12">
        {/* Left: Images */}
        <div className="flex flex-1 gap-4">
          <Image
            src="/about_us/antho_and_henry.png"
            alt="Anthony and Henry"
            width={600}
            height={800}
            className="h-full w-1/2 rounded-lg object-cover"
          />
          <Image
            src="/about_us/swim.png"
            alt="swimming picture"
            width={600}
            height={800}
            className="h-full w-1/2 rounded-lg object-cover"
          />
        </div>

        {/* Right: Mission Text */}
        <div className="flex flex-1 flex-col justify-center">
          <div className="ml-auto">
            <h3 className="text-h3 mb-3">The Mission</h3>
            <p className="text-body2 md:max-w-md 2xl:max-w-md">
              Our mission is to empower individuals to explore, experiment, and experience life
              beyond routine by providing a seamless, all-in-one platform for discovering unique
              activities. Through an inclusive and flexible platform, we remove barriers to personal
              growth, social connection, and self-discovery — making it easier to prioritize
              yourself.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse items-stretch justify-between gap-8 md:flex-row md:gap-12">
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="text-h3 mb-3">The Vision</h3>
          <p className="text-body2 md:max-w-md 2xl:max-w-md">
            We strive to create a world where exploring new experiences is effortless, enriching,
            and a natural part of everyday life. By redefining how individuals discover and engage
            in activities, we aim to foster personal growth, creativity, and meaningful connections
            — making experiential learning more accessible and fulfilling for all.
          </p>
        </div>

        {/* Right: Images */}
        <div className="flex flex-1 gap-4">
          <Image
            src="/about_us/cal_and_rie.png"
            alt="Calvin and Henry Nguyen"
            width={600}
            height={800}
            className="h-full w-1/2 rounded-lg object-cover"
          />
          <Image
            src="/about_us/ninja.png"
            alt="Samurai Picture"
            width={600}
            height={800}
            className="h-full w-1/2 rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
