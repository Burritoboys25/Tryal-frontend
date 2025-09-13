'use client'

import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HamburgerToggle from '@/shared/components/ui/mobile/HamburgerToggle'
// import { SegmentedToggle } from '../ui/ThumbToggle'

interface LandingNavbarProps {
  disablePartner?: boolean
}

function LandingNavbar({ disablePartner = false }: LandingNavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 mx-auto min-h-[4.3125rem] w-full px-4 transition-shadow duration-300 2xl:max-w-3xl 2xl:px-8 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="flex w-full items-center justify-between py-[1rem]">
          {/* Logo */}
          <div className="w-[9.375rem]">
            <Link href="/" className="font-logo text-[2rem] font-medium">
              Tryal
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden justify-center gap-[2rem] text-sm text-[1rem] text-gray-700 md:flex">
            <Link href="/about">About us</Link>
            <Link href="/for-partners">For Partners</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden w-[9.375rem] md:flex">
            <Button variant="solid" className={disablePartner ? 'invisible' : ''}>
              <Link href="/partner-waitlist">Become a partner</Link>
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
            <ul className="space-y-[1rem]">
              <li>
                <Link href="/about" onClick={handleClick} className="inline-block">
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
