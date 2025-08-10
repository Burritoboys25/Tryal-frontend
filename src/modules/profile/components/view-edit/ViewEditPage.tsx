'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/components/ui/base/button'
import { AppWindow, Instagram, MapPin, Phone } from 'lucide-react'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import DefaultImage from '../../../../../public/default_experience_image.png'

const ViewEditPage = () => {
  return (
    <div className="mx-auto mt-[2rem] flex w-[60rem]">
      {/* Left Container */}
      <div>
        {/* Top Component */}
        <div className="flex gap-8">
          <Image
            src={DefaultImage}
            width={199}
            height={165}
            alt="Business Photo"
            className="rounded-md bg-gray-300"
          />

          <div className="gap- flex flex-1 flex-col justify-between">
            <h3 className="text-[1.5rem] leading-7 font-bold">{'Terra Studio'}</h3>
            <div className="flex w-fit items-center gap-2 rounded-[.5rem] bg-[#FADDD5] px-3 py-1">
              <CreditIcon />
              <p className="text-body1">{'35'} credits</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <PersonIcon />
                <p className="text-body1">{'2'}</p>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon />
                <p className="text-body1">{/*formatDate(data.timeslotDate)*/}March 8, 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon />
                <p className="text-body1">{/*formatTime(data.startTime)*/}12:00 PM</p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                type="button"
                variant={'outline'}
                className="cursor-pointer border-2 px-6 py-2 hover:bg-[#FADDD5]"
              >
                <span className="text-button ml-1">Modify</span>
              </Button>
              <Button
                type="button"
                variant={'outline'}
                className="cursor-pointer border-2 px-6 py-2 hover:bg-[#FADDD5]"
              >
                <span className="text-button ml-1">Cancel</span>
              </Button>
              <Button
                type="button"
                variant={'outline'}
                className="cursor-pointer border-2 px-6 py-2 hover:bg-[#FADDD5]"
              >
                <span className="text-button ml-1">Add to Calendar</span>
              </Button>
            </div>
          </div>
        </div>
        {/* What to know Component */}
        <div className="mt-12 flex w-[83%] flex-col gap-6">
          <h4 className="text-sub1">What to know before you go</h4>
          <div className="flex flex-col gap-4">
            <h6 className="text-sub3">Business' terms and conditions</h6>
            <p className="text-body2">
              Cancellations made at least 48 hours in advance may be rescheduled once. No-shows or
              late cancellations are non-refundable.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-sub3">Important information</h6>
            <p className="text-body2">
              Please arrive 10 minutes early to get settled and start on time. Pottery can get
              messy! Wear clothes you don&apos;t mind getting a little muddy and closed-toe shoes.
              Finished pieces will be ready for pickup 3–4 weeks after class (we&apos;ll notify you
              by email or text).
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-sub3">Note from business</h6>
            <p className="text-body2">
              We’re so excited to welcome you into our cozy clay studio! Whether it’s your first
              time or your hundredth, our classes are all about creativity, connection, and getting
              your hands a little dirty. Don’t stress about being “good”—just come ready to play,
              relax, and make something from the heart. We’ll guide you every step of the way. Can’t
              wait to create with you!
            </p>
          </div>
        </div>
      </div>
      {/* Right Container - Map */}
      <div className="flex flex-col gap-8">
        {/* Map Box */}
        <div className="h-[189px] w-[281px] bg-gray-500"></div>
        {/* Contact Details */}
        <div>
          <div className="flex items-center gap-2">
            <MapPin />
            <p className="text-body2">1625 Maple Street, Austin, Tx 78701</p>
          </div>
          <div className="flex items-center gap-2">
            <Phone />
            <p className="text-body2">(541) 456-4356</p>
          </div>
          <div className="flex items-center gap-2">
            <AppWindow />
            <p className="text-body2">terrastudios.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Instagram />
            <p className="text-body2">@terrastudio</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewEditPage
