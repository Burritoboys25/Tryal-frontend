import Container from '@/shared/components/layout/Container'

export default function MissionVision() {
  return (
    <section>
      <Container>
        <div className="mb-24 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: Image */}
          <div className="h-[250px] w-full rounded-lg bg-gray-200" />

          {/* Right: Mission Text */}
          <div>
            <h3 className="text-h3 mb-3">The Mission</h3>
            <p className="text-body4 text-gray-600">
              Our mission is to empower individuals to explore, experiment, and experience life
              beyond routine by providing a seamless, all-in-one platform for discovering unique
              activities. Through an inclusive and flexible platform, we remove barriers to personal
              growth, social connection, and self-discovery — making it easier to prioritize
              yourself.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: Vision Text */}
          <div>
            <h3 className="text-h3 mb-3">The Vision</h3>
            <p className="text-body4 text-gray-600">
              We strive to create a world where exploring new experiences is effortless, enriching,
              and a natural part of everyday life. By redefining how individuals discover and engage
              in activities, we aim to foster personal growth, creativity, and meaningful
              connections — making experiential learning more accessible and fulfilling for all.
            </p>
          </div>

          {/* Right: Image */}
          <div className="h-[250px] w-full rounded-lg bg-gray-200" />
        </div>
      </Container>
    </section>
  )
}
