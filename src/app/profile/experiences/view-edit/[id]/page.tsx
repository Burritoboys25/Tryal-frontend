import React from 'react'
import ViewEditPage from '@/modules/profile/components/view-edit/ViewEditPage'
import Link from 'next/link'
import { Button } from '@/shared/components/ui/base/button'
import { ArrowLeft } from 'lucide-react'

const page = () => {
  // TODO: Fetch Experience details from backend
  return (
    <div>
      <Link href={'/profile/experiences'}>
        <Button
          type="button"
          variant={'outline'}
          className="cursor-pointer border-2 px-4 py-2 hover:bg-[#FADDD5]"
        >
          <ArrowLeft />
          <span className="text-button ml-1">Back</span>
        </Button>
      </Link>

      <ViewEditPage />
    </div>
  )
}

export default page
