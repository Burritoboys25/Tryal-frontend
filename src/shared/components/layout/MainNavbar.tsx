'use client'

import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HamburgerToggle from '@/shared/components/ui/mobile/HamburgerToggle'

interface MainNavbarProps {
  disablePartner?: boolean
}

function MainNavbar({ disablePartner = false }: MainNavbarProps) {
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
        className={`fixed top-0 right-0 left-0 z-50 min-h-[69px] w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="mx-auto flex w-full items-center justify-between px-4 py-4 md:max-w-[1000px] md:px-4 2xl:max-w-[1440px] 2xl:px-0">
          {/* Logo */}
          <div className="w-[150px]">
            <Link href="/" className="font-logo text-[32px] font-medium">
              Tryal
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden flex-grow justify-center gap-8 text-sm text-[16px] text-gray-700 md:flex">
            <Link href="/about">About us</Link>
            <Link href="/how-it-works">How it works</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden w-[150px] md:flex">
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
        <div className="flex h-full gap-4 px-6 pt-[69px] pb-8">
          <div className="flex w-full flex-col gap-10 px-6 py-16">
            <ul className="space-y-4">
              <li>
                <Link href="/about" onClick={handleClick} className="inline-block">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" onClick={handleClick}>
                  How it works
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

export default MainNavbar
