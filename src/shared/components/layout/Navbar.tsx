'use client'

import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import HamburgerToggle from '@/shared/components/ui/mobile/HamburgerToggle'

function Navbar() {
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
        className={`fixed top-0 right-0 left-0 z-50 mx-auto min-h-[69px] w-full max-w-[1440px] bg-white transition-shadow duration-300 md:px-12 ${scrolled ? 'shadow-sm' : ''}`}
      >
        <div className="flex items-center justify-between px-4 py-4 md:px-2 lg:px-0">
          {/* Logo */}
          <div className="min-w-[150px]">
            <Link href="/" className="font-logo text-[32px] font-medium">
              Tryal
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden gap-8 text-sm text-[16px] text-gray-700 md:flex">
            <Link href="/about">About us</Link>
            <Link href="/how-it-works">How it works</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden min-w-[150px] md:flex">
            <Button variant="solid">
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
        <div className="flex h-full gap-4 px-6 pt-[72px] pb-8">
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
            <Button onClick={handleClick} variant="solid">
              <Link href="/partner-waitlist">Become a partner</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
