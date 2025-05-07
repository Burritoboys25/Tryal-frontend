import Container from '@/shared/components/layout/Container'

const OurStory = () => {
  return (
    <section>
      <Container className="pt-16 text-center">
        <h2 className="text-h2 mb-6 font-semibold">Our Story</h2>
        <p className="text-body4 mb-6 text-gray-600">
          It all started with four best friends who met in college—connected by a shared sense of
          adventure and curiosity. After graduation, life took us in different directions, each of
          us moving across the country to start our careers. At first, it was exciting—new cities,
          new jobs, new routines. But as time passed, we found ourselves consumed by work and
          struggling to make time for the things that once made us feel alive.
        </p>
        <p className="text-body4 text-gray-600">
          We realized we weren’t alone. So many adults want to break out of their routine but don’t
          know where to start. Finding new experiences can feel overwhelming—endless research,
          long-term commitments, and the uncertainty of stepping outside your comfort zone. That’s
          why we created [X]—to remove the friction and make it easy to say “yes” to something new.
          Whether it’s rediscovering a passion, trying a hobby for the first time, or simply making
          time for yourself, your next experience is waiting. Are you ready to rediscover yourself?
        </p>
      </Container>
    </section>
  )
}

export default OurStory
