'use client'

import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/base/dialog'
import { Button } from '@/shared/components/ui/base/button'
import { useRouter } from 'next/navigation'

interface SubscriptionModalProps {
  hasActiveSubscription: boolean
}

const SubscriptionModal = ({ hasActiveSubscription }: SubscriptionModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Show modal every time if user has no active subscription
    if (!hasActiveSubscription) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [hasActiveSubscription])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChoosePlan = () => {
    router.push('/select-plan')
    handleClose()
  }

  const handleGoToProfile = () => {
    router.push('/profile')
    handleClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="min-h-[265px] min-w-[650px]"
        onInteractOutside={e => e.preventDefault()}
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-sub1 font-bold">Choose your plan to get started</DialogTitle>
          <DialogDescription asChild>
            <div className="text-body2 space-y-2">
              <p>
                You can explore available subscription plans to unlock full access and features.
              </p>
              <p>If you&apos;d like to skip for now, you can continue to your profile page.</p>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex justify-end gap-3">
          <Button variant="outline" onClick={handleGoToProfile} className="cursor-pointer">
            Go to Profile
          </Button>
          <Button onClick={handleChoosePlan} className="cursor-pointer">
            Choose Plan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SubscriptionModal
