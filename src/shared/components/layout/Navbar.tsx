'use client'

import { Button } from '@/shared/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Tryal
        </Link>

        {/* Desktop Nav */}
        <div className="hidden gap-8 text-sm text-gray-700 md:flex">
          <Link href="about">About us</Link>
          <Link href="how-it-works">How it works</Link>
          <Link href="partner">Become a partner</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button variant="solid">
            <Link href="/waitlist">Join Waitlist</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 border-t bg-white px-4 pb-4">
          <Link href="about" onClick={handleClick}>
            About us
          </Link>
          <Link href="how-it-works" onClick={handleClick}>
            How it works
          </Link>
          <Link href="partner" onClick={handleClick}>
            Become a partner
          </Link>
          <Button onClick={handleClick} variant="solid">
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
