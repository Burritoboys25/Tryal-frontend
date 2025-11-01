'use client'

import Link from 'next/link'

function SimpleHeader() {
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 min-h-[4.3125rem] w-full bg-white transition-shadow duration-300`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-[1rem] py-[1rem] md:max-w-[62.5rem] md:px-[1rem] 2xl:max-w-[90rem] 2xl:px-0">
        {/* Logo */}
        <div className="w-[9.375rem]">
          <Link href="/" className="font-logo text-[2rem] font-medium">
            Tryal
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SimpleHeader
