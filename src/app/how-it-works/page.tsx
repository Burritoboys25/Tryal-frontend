import SignupIcon from '@/shared/assets/icons/signup.svg'
import DiscoverIcon from '@/shared/assets/icons/discover.svg'
import BookIcon from '@/shared/assets/icons/book.svg'
import ExploreIcon from '@/shared/assets/icons/explore.svg'
import MainLayout from '@/shared/components/layout/MainLayout'

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
      <section className="mx-auto mt-0 h-screen max-w-7xl px-4 sm:-mt-[72px] sm:px-0">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <h2 className="text-h3 w-full py-10">How it works</h2>
          {/* Card Container */}
          <div className="grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map(({ step, title, description, icon: Icon }) => (
              <div
                key={step}
                className="flex h-[276px] w-[272px] flex-col items-center justify-center rounded-2xl border-1 px-4 py-8"
              >
                <Icon />
                <div className="space-y-4 text-center">
                  <h3 className="text-sub1">{title}</h3>
                  <p className="text-body4">{description}</p>
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default HowItWorksPage
