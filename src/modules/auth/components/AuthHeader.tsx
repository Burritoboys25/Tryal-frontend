import React from 'react'
import Link from 'next/link'

const AuthHeader = () => {
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 min-h-[69px] w-full bg-white transition-shadow duration-300`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-4 py-4 md:max-w-[1000px] md:px-4 2xl:max-w-[1440px] 2xl:px-0">
        {/* Logo */}
        <div className="w-[150px]">
          <Link href="/" className="font-logo text-[32px] font-medium">
            Tryal
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default AuthHeader
