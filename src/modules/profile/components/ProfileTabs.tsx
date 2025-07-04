'use client'

import React from 'react'
import Link from 'next/link'
import ProfileIcon from '@/shared/assets/icons/profile_circle.svg'
import ProfileIconFill from '@/shared/assets/icons/profile_circle-fill.svg'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import CreditIconFill from '@/shared/assets/icons/credit-fill.svg'
import CompassIcon from '@/shared/assets/icons/compass.svg'
import CompassIconFill from '@/shared/assets/icons/compass-fill.svg'
import SettingsIcon from '@/shared/assets/icons/settings.svg'
import SettingsIconFill from '@/shared/assets/icons/settings-fill.svg'
import { usePathname } from 'next/navigation'

const ProfileTabs = () => {
  const pathname = usePathname()

  const activeTabStyles = 'text-foreground font-bold'
  const inActiveTabStyles = 'text-muted-foreground font-semibold'

  return (
    <nav className="flex w-fit flex-col gap-3">
      <Link
        href={'/profile'}
        className={`flex items-center gap-2.5 rounded-md px-2 py-3 ${pathname !== '/profile' && 'hover:bg-[#FADDD5]'}`}
      >
        {pathname === '/profile' ? (
          <ProfileIconFill className="h-6 w-6" aria-hidden="true" />
        ) : (
          <ProfileIcon className="h-6 w-6" aria-hidden="true" />
        )}
        <span className={`${pathname === '/profile' ? activeTabStyles : inActiveTabStyles}`}>
          Profile
        </span>
      </Link>

      <Link
        href={'/profile/credits-membership'}
        className={`flex items-center gap-2.5 rounded-md px-2 py-3 ${pathname !== '/profile/credits-membership' && 'hover:bg-[#FADDD5]'}`}
      >
        {pathname === '/profile/credits-membership' ? (
          <CreditIconFill className="h-6 w-6" aria-hidden="true" />
        ) : (
          <CreditIcon className="h-6 w-6" aria-hidden="true" />
        )}
        <span
          className={`${pathname === '/profile/credits-membership' ? activeTabStyles : inActiveTabStyles}`}
        >
          Credits & Membership
        </span>
      </Link>

      <Link
        href={'/profile/experiences'}
        className={`flex items-center gap-2.5 rounded-md px-2 py-3 ${pathname !== '/profile/experiences' && 'hover:bg-[#FADDD5]'}`}
      >
        {pathname === '/profile/experiences' ? (
          <CompassIconFill className="h-6 w-6" aria-hidden="true" />
        ) : (
          <CompassIcon className="h-6 w-6" aria-hidden="true" />
        )}
        <span
          className={`${pathname === '/profile/experiences' ? activeTabStyles : inActiveTabStyles}`}
        >
          Experiences
        </span>
      </Link>

      <Link
        href={'/profile/settings'}
        className={`flex items-center gap-2.5 rounded-md px-2 py-3 ${pathname !== '/profile/settings' && 'hover:bg-[#FADDD5]'}`}
      >
        {pathname === '/profile/settings' ? (
          <SettingsIconFill className="h-6 w-6" aria-hidden="true" />
        ) : (
          <SettingsIcon className="h-6 w-6" aria-hidden="true" />
        )}
        <span
          className={`${pathname === '/profile/settings' ? activeTabStyles : inActiveTabStyles}`}
        >
          Settings
        </span>
      </Link>
    </nav>
  )
}

export default ProfileTabs
