import SignupIcon from '@/shared/assets/icons/signup.svg'
import DiscoverIcon from '@/shared/assets/icons/discover.svg'
import BookIcon from '@/shared/assets/icons/book.svg'
import ExploreIcon from '@/shared/assets/icons/explore.svg'
import MainLayout from '@/shared/components/layout/MainLayout'
import Container from '@/shared/components/layout/Container'

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
    <MainLayout>
      <Container>
        <section className="flex min-h-[calc(100vh-600px)] items-center justify-center py-8 md:py-12 2xl:py-24">
          <div className="flex h-full flex-col items-center justify-center text-center">
            <h2 className="text-h2 mb-10 w-full">How it works</h2>
            {/* Card Container */}
            <div className="grid grid-cols-1 gap-8 sm:gap-4 md:grid-cols-2 2xl:grid-cols-4">
              {howItWorksSteps.map(({ step, title, description, icon: Icon }) => (
                <div
                  key={step}
                  className="relative flex h-[276px] w-[272px] flex-col items-center justify-center rounded-2xl border-1 px-4 shadow-md"
                >
                  <Icon />
                  <div className="mt-4 space-y-3 text-center">
                    <h3 className="text-sub1">{title}</h3>
                    <p className="text-body2">{description}</p>
                  </div>
                  <span className="bg-primary text-primary-foreground absolute -top-6 flex size-12 items-center justify-center rounded-full">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </MainLayout>
  )
}

export default HowItWorksPage
