'use client'

import { Button } from '@/shared/components/ui/base/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import SearchIcon from '@/shared/assets/icons/search.svg'
import LocationOnIcon from '@/shared/assets/icons/location_on.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import NotificationsIcon from '@/shared/assets/icons/notifications.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/base/avatar'
import { Input } from '@/shared/components/ui/base/input'

interface MainHeader {
  showSearch?: boolean
}

function MainHeader({ showSearch = false }: MainHeader) {
  const { data: session } = useSession()
  const router = useRouter()

  const handleAvatarClick = () => {
    router.push('/profile')
    // if (session?.user?.id) {
    //   router.push('/profile')
    // } else {
    //   router.push('/login')
    // }
  }

  // Generate user initials and profile image URL
  // For now using mock data, but this will be replaced with session data when backend is ready
  const userFirstName = session?.user?.firstName || 'User'
  const userLastName = session?.user?.lastName || ''
  const userInitials = `${userFirstName.charAt(0)}${userLastName.charAt(0)}`.toUpperCase()
  const profileImageUrl = `"https://github.com/shadcn.png"`

  return (
    <header className="fixed top-0 right-0 left-0 z-50 min-h-[69px] w-full bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-12">
        {/* Logo */}
        <div className="w-[150px]">
          <Link href="/" className="font-logo text-[32px] font-medium">
            Tryal
          </Link>
        </div>

        {/* Conditional Search Section - Only show on explore pages */}
        {showSearch && (
          <div className="hidden flex-grow justify-center gap-4 text-sm text-[16px] text-gray-700 md:flex">
            <div className="text-body1 flex w-full max-w-lg gap-4">
              <Input icon={<SearchIcon />} placeholder="Search Experiences" />
              <Input icon={<LocationOnIcon />} placeholder="Location" />
            </div>
          </div>
        )}

        {/* Right Side - Icons and Avatar */}
        <div className="flex w-[150px] items-center justify-end gap-2">
          <Button variant="link" size="icon">
            <CalendarIcon className="h-5 w-5" />
          </Button>
          <Button variant="link" size="icon">
            <NotificationsIcon className="h-5 w-5" />
          </Button>

          {/* Avatar */}
          <Avatar
            className="hover:ring-border/20 cursor-pointer transition-all duration-200 hover:ring-2"
            onClick={handleAvatarClick}
          >
            <AvatarImage src={profileImageUrl} alt={`${userFirstName} ${userLastName}`} />
            <AvatarFallback className="bg-border text-background">{userInitials}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
