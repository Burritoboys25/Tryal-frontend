import InterestWaitlistForm from '@/modules/waitlist/components/InterestWaitlistForm'
export default function MainFooter() {
  return (
    <footer className="w-full rounded-t-3xl bg-neutral-900 text-white">
      {/* Top Section */}
      <div className="inner pt-16 md:pb-8">
        <div className="grid-12 items-start space-y-8 md:space-y-0">
          {/* Left: Main Heading */}
          <div className="col-span-full md:col-span-8">
            <h2 className="mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              <span className="block">Fun is around</span>
              <span className="block">around the corner</span>
              <span className="text-primary block lg:text-6xl">Don&apos;t miss out!</span>
            </h2>
            <InterestWaitlistForm />
          </div>

          {/* Right: Info and Follow Columns */}
          <div className="col-span-full mt-8 grid grid-cols-subgrid md:col-span-4">
            {/* Info Column */}
            <div className="col-span-2">
              <h4 className="text-primary mb-4 text-lg font-bold uppercase">Info</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="hover:text-primary transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/explore" className="hover:text-primary transition-colors">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="/partner-waitlist" className="hover:text-primary transition-colors">
                    Partnership
                  </a>
                </li>
                <li>
                  <a href="/about#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-primary transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Column */}
            <div className="col-span-2">
              <h4 className="text-primary mb-4 text-lg font-bold uppercase">Follow</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-full grid grid-cols-subgrid items-end py-4 md:pt-24">
            <div className="col-span-full space-y-1 text-sm font-medium md:col-span-8">
              <p>
                123 Main St <br />
                Austin, TX, 78704
              </p>
            </div>

            <div className="col-span-full mt-4 md:col-span-4 md:mt-0">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                {/* Phone Button */}
                <a
                  href="tel:+8323160436"
                  className="inline-flex w-full items-center gap-2 rounded-full border border-white px-6 py-3 text-sm transition-colors hover:bg-white hover:text-neutral-900"
                >
                  <span>+1 (832) 316-0436</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>

                {/* Email Button */}
                <a
                  href="mailto:contact@tryal.com"
                  className="inline-flex w-full items-center gap-2 rounded-full border border-white px-6 py-3 text-sm transition-colors hover:bg-white hover:text-neutral-900"
                >
                  <span>CONTACT@TRYAL.COM</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}

      {/* Separator Line */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="inner grid-12 items-center space-y-4 py-8 md:grid-rows-2 md:space-y-0 md:py-4">
        <div className="col-span-full flex w-full justify-center text-3xl md:block md:text-2xl">
          <span className="text-primary">Tryal</span>
          <span className="ml-2">Experiences</span>
        </div>
        <div className="col-span-full flex justify-between gap-4 text-xs md:col-span-4 md:col-start-11">
          <a href="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Cookie Policy
          </a>
        </div>
        <p className="col-span-full text-center text-xs text-gray-400 md:col-span-2 md:col-start-1 md:row-start-2 md:text-start">
          © 2025 Tryal. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
