import SignupIcon from '@/shared/assets/icons/signup.svg'
import DiscoverIcon from '@/shared/assets/icons/discover.svg'
import BookIcon from '@/shared/assets/icons/book.svg'
import ExploreIcon from '@/shared/assets/icons/explore.svg'
import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import BlurBackground from '@/shared/components/ui/base/BlurBackground'

const howItWorksSteps = [
  {
    step: 1,
    title: 'Sign up',
    description:
      'Join us by signing up and selecting the subscription plan that best fits your needs.',
    icon: SignupIcon,
  },
  {
    step: 2,
    title: 'Discover',
    description: 'Browse a variety of activities that match your interests and preferences.',
    icon: DiscoverIcon,
  },
  {
    step: 3,
    title: 'Book',
    description:
      'Simply book experiences with a few clicks. Our easy-to-use platform ensures seamless booking.',
    icon: BookIcon,
  },
  {
    step: 4,
    title: 'Explore!',
    description:
      "Show up, enjoy, and make the most of your experience. We've got the details covered!",
    icon: ExploreIcon,
  },
]

const HowItWorksPage = () => {
  return (
    <ViewLayout type={'landing'}>
      <Container>
        <section className="flex min-h-[calc(100vh-37.5rem)] items-center justify-center py-[2rem] md:py-[3rem] 2xl:py-[6rem]">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-h2 mb-[2.5rem] w-full">How it works</h2>
            {/* Card Container */}
            <div className="relative z-0 flex items-center justify-center">
              {/* Blur background */}
              <BlurBackground
                className="absolute top-1/2 left-1/2 -z-10 h-full max-h-[25rem] w-[4rem] max-w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden md:h-[12.5rem] md:w-[12.5rem] 2xl:h-[3.75rem] 2xl:w-full"
                blur="7.5rem"
                color="#F4BCAB"
                style={{ borderRadius: '4rem' }}
              />
              <div className="relative grid grid-cols-1 gap-[2rem] sm:gap-[1rem] md:grid-cols-2 2xl:grid-cols-4">
                {howItWorksSteps.map(({ step, title, description, icon: Icon }) => (
                  <div
                    key={step}
                    className="relative flex h-[17.25rem] w-[17rem] flex-col items-center justify-center rounded-2xl bg-white/80 px-[1rem] shadow-xl"
                  >
                    <Icon />
                    <div className="mt-[1rem] space-y-[0.75rem] text-center">
                      <h3 className="text-sub1">{title}</h3>
                      <p className="text-body2">{description}</p>
                    </div>
                    <span className="bg-primary text-primary-foreground absolute -top-[1.5rem] flex size-[3rem] items-center justify-center rounded-full">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </ViewLayout>
  )
}

export default HowItWorksPage
