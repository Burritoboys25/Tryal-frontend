'use client'

import InterestWaitlistForm from '@/modules/waitlist/components/InterestWaitlistForm'
import Linkedin from '@/shared/assets/icons/white-linkedin.svg'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function MainFooter() {
  const router = useRouter()
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    if (pathname === '/') {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${sectionId}`)
    }
  }
  return (
    <footer className="w-full rounded-t-3xl bg-[#051317] text-white">
      <div className="inner pt-16 md:pb-24">
        <div className="grid-12 items-start space-y-8 md:space-y-0">
          {/* Left: Main Heading */}
          <div className="col-span-full flex flex-col gap-4 md:col-span-8">
            <h2 className="mb-4 flex flex-col space-y-1 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
              <span className="block">Fun is around the corner</span>
              <span className="block text-[#E97958] lg:text-6xl">Don&apos;t miss out!</span>
            </h2>
            <div>
              <InterestWaitlistForm />
            </div>
          </div>

          {/* Right: Company and Legal Columns */}
          <div className="col-span-full grid grid-cols-subgrid items-start pb-8 md:col-span-4 md:pb-0">
            {/* Company Column */}
            <div className="col-span-2">
              <h4 className="mb-4 text-lg font-bold text-[#E97958] uppercase">Company</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#sticky-steps"
                    className="hover:text-primary transition-colors"
                    onClick={e => handleSectionClick(e, 'sticky-steps')}
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#feature"
                    className="hover:text-primary transition-colors"
                    onClick={e => handleSectionClick(e, 'feature')}
                  >
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/for-partners" className="hover:text-primary transition-colors">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="/about#contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="hover:text-primary transition-colors"
                    onClick={e => handleSectionClick(e, 'faq')}
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="col-span-2">
              <h4 className="mb-4 text-lg font-bold text-[#E97958] uppercase">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="inner">
        <div className="border-muted-foreground mb-0 w-full border-t"></div>
        <div className="grid-12 items-center py-8 md:py-4">
          <div className="col-span-full flex w-full items-center justify-between">
            <p className="text-xs text-gray-400">© 2025 Tryal. All rights reserved.</p>
            <a
              href="https://www.linkedin.com/company/usetryal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-[1.5rem] w-[1.5rem]" aria-label="Linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
