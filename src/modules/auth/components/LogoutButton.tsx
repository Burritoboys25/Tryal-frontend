'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/shared/components/ui/base/button'

type LogoutButtonProps = {
  redirectUrl?: string
  className?: string
  label?: string
}

const LogoutButton = ({
  redirectUrl = '/',
  className = '',
  label = 'Log Out',
}: LogoutButtonProps) => {
  return (
    <Button
      type="button"
      className={className}
      onClick={() => signOut({ callbackUrl: redirectUrl })}
    >
      {label}
    </Button>
  )
}

export default LogoutButton
