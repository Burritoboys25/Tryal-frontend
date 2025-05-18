'use client'

import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import SearchIcon from '@/shared/assets/icons/search.svg'
import LocationOnIcon from '@/shared/assets/icons/location_on.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import NotificationsIcon from '@/shared/assets/icons/notifications.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/base/avatar'
import { Input } from '@/shared/components/ui/base/input'

function Navbar() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 min-h-[69px] w-full bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-12">
          {/* Logo */}
          <div className="w-[150px]">
            <Link href="/" className="font-logo text-[32px] font-medium">
              Tryal
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden flex-grow justify-center gap-4 text-sm text-[16px] text-gray-700 md:flex">
            <div className="text-body1 flex w-full max-w-lg gap-4">
              <Input icon={<SearchIcon />} placeholder="Search Experiences" />
              <Input icon={<LocationOnIcon />} placeholder="Location" />
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden w-[150px] justify-end gap-2 md:flex">
            <Button variant="link" size="icon">
              <CalendarIcon className="h-5 w-5" />
            </Button>
            <Button variant="link" size="icon">
              <NotificationsIcon className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="bg-border text-background">TR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
