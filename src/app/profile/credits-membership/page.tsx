import React from 'react'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { CreditCard } from 'lucide-react'

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-h3">Credits & Membership</h1>
        <p className="text-body2">Manage your credits and payment details.</p>
      </div>

      <div className="">
        <h2 className="text-sub1">Credits balance</h2>
        {/* w-[5.375rem] h-[2.688rem] justify-center w-fit */}
        <div className="mt-2 flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-4 py-2">
          <CreditIcon className="h-6 w-6" aria-hidden="true" />{' '}
          <p className="text-sub2">30</p>
        </div>
      </div>

      <div>
        <h2 className="text-sub1">Current plan</h2>
        <p className="text-body2 mt-1">Starter plan</p>
        <Button type="button" variant="outline" className="mt-2 border-2 px-6 cursor-pointer hover:bg-[#FADDD5]">
          <p className="text-button">Change plan</p>
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-sub1">Payment info</h2>
        <p className="text-body2">May 15, 2025</p>
        <div className="flex items-center gap-3">
          <CreditCard />
          <div> **** **** **** </div>
          <p className="text-body1 font-semibold">0024</p>
        </div>

        <div className="flex gap-2">
          <Button type="button" variant="outline" className="border-2 px-6 cursor-pointer hover:bg-[#FADDD5]">
            <p className="text-button">Update Payment</p>
          </Button>
          <Button type="button" variant="text" className="px-6 cursor-pointer hover:bg-[#FADDD5]">
            <p className="text-button text-[#FA1D1D]">Cancel membership</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default page
