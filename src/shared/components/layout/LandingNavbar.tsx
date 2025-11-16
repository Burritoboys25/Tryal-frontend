'use client'

import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import HamburgerToggle from '@/shared/components/ui/mobile/HamburgerToggle'

interface LandingNavbarProps {
  disablePartner?: boolean
}

function LandingNavbar({ disablePartner = false }: LandingNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => setIsOpen(!isOpen)

  const activeLinkClass = 'font-bold border-b-2 border-b-white font-bold xl:text-[1rem]'

  return (
    <>
      <nav
        className={`glass-element fixed top-10 right-0 left-0 z-50 mx-auto flex h-[2.5rem] w-[85%] items-center px-6 transition-shadow duration-300 md:h-[3.5rem] xl:h-[4.5rem] xl:w-[75%] 2xl:max-w-3xl 2xl:px-8 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="w-[9.375rem]">
            <Link href="/" className="font-logo text-[1.25rem] font-medium md:text-[2rem]">
              Tryal
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden justify-center gap-[1.25rem] text-[.875rem] font-medium text-white md:flex xl:gap-[2.5rem] xl:text-[1rem] xl:font-normal">
            <Link href="/" className={isActive('/') ? activeLinkClass : ''}>
              For Explorers
            </Link>
            <Link href="/for-partners" className={isActive('/for-partners') ? activeLinkClass : ''}>
              For Partners
            </Link>
            <Link href="/about" className={isActive('/about') ? activeLinkClass : ''}>
              About Us
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button variant="solid" className={disablePartner ? 'invisible' : ''}>
              <Link
                href={{
                  pathname: '/partner-waitlist',
                  query: { type: 'partner' },
                }}
              >
                Become a partner
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <HamburgerToggle isOpen={isOpen} onClick={handleClick} />
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen w-full bg-white transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="flex h-full gap-[1rem] px-[1.5rem] pt-[4.3125rem] pb-[2rem]">
          <div className="flex w-full flex-col gap-[2.5rem] px-[1.5rem] py-[4rem]">
            <ul className="text-foreground-teal space-y-[1rem]">
              <li>
                <Link
                  href="/"
                  onClick={handleClick}
                  className={`inline-block ${isActive('/') ? activeLinkClass + ' underline' : ''}`}
                >
                  For Explorers
                </Link>
              </li>
              <li>
                <Link
                  href="/for-partners"
                  onClick={handleClick}
                  className={`inline-block ${isActive('/for-partners') ? activeLinkClass + ' underline' : ''}`}
                >
                  For Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={handleClick}
                  className={`inline-block ${isActive('/about') ? activeLinkClass + ' underline' : ''}`}
                >
                  About us
                </Link>
              </li>
            </ul>
            <Button
              onClick={handleClick}
              variant="solid"
              className={disablePartner ? 'invisible' : ''}
            >
              <Link href="/partner-waitlist">Become a partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingNavbar
