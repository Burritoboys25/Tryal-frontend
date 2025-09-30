import Container from '@/shared/components/layout/Container'
import ViewLayout from '@/shared/components/layout/ViewLayout'
// import { CircleCheck } from 'lucide-react'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import ClockIcon from '@/shared/assets/icons/clock.svg'
import PersonIcon from '@/shared/assets/icons/person.svg'
import CheckIcon from '@/shared/assets/icons/check_circle.svg'
// import CreditIcon from '@/shared/assets/icons/credit.svg'

const page = () => {
  return (
    <ViewLayout type="default">
      <Container>
        <div className="mt-5 mb-10 grid place-self-center">
          <div className="grid h-[862px] w-[723px] place-items-center rounded-xl border-1 border-[#CBCBCB]">
            <div className="h-[769px] w-[562px]">
              {/* Confirmation Heading */}
              <div className="flex flex-col items-center gap-2">
                <CheckIcon />
                <h1 className="text-h3">Booking Confirmed</h1>
              </div>

              <div className="mt-10 flex gap-8">
                {/* Image */}
                <div className="h-[163px] w-[197px] rounded-xl bg-gray-300"></div>
                <div className="flex flex-col gap-2">
                  {/* {businessName} - {experience.experienceName} */}
                  <h2 className="text-[1.25rem] leading-[1.5rem] font-semibold">Terra Studio</h2>
                  <div className="text-body1 flex items-center gap-2">
                    <PersonIcon /> <p>2</p>
                  </div>
                  <div className="text-body1 flex items-center gap-2">
                    <CalendarIcon />
                    {/* {formatDate(timeslot.timeslotDate)} */}
                    <p>March 8, 2025</p>
                  </div>
                  <div className="text-body1 flex items-center gap-2">
                    <ClockIcon />
                    {/* {formatTime(timeslot.startTime)} */}
                    <p>12:00 PM</p>
                  </div>
                  <div className="text--foreground flex h-[19px]">
                    <button
                      type="button"
                      className="text-body2 flex cursor-pointer items-center px-1.5"
                    >
                      Modify
                    </button>
                    <button
                      type="button"
                      className="text-body2 flex cursor-pointer items-center border-x border-black px-1.5"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="text-body2 flex cursor-pointer items-center px-1.5"
                    >
                      Add to calendar
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-6">
                <h1 className="text-sub1">What to know before you go</h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[1rem] leading-[2rem] font-bold">
                    Business' terms and conditions
                  </h2>
                  <p className="text-[0.875rem] leading-[1rem]">
                    Cancellations made at least 48 hours in advance may be rescheduled once.
                    No-shows or late cancellations are non-refundable.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[1rem] leading-[2rem] font-bold">Important information</h2>
                  <p className="text-[0.875rem] leading-[1rem]">
                    Please arrive 10 minutes early to get settled and start on time. Pottery can get
                    messy! Wear clothes you don&apos;t mind getting a little muddy and closed-toe
                    shoes. Finished pieces will be ready for pickup 3–4 weeks after class
                    (we&apos;ll notify you by email or text).
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[1rem] leading-[1rem] font-bold">Note from business</h2>
                  <p className="text-[0.875rem] leading-[1rem]">
                    We&apos;re so excited to welcome you into our cozy clay studio! Whether
                    it&apos;s your first time or your hundredth, our classes are all about
                    creativity, connection, and getting your hands a little dirty. Don&apos;t stress
                    about being “good”—just come ready to play, relax, and make something from the
                    heart. We&apos;ll guide you every step of the way. Can&apos;t wait to create
                    with you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ViewLayout>
  )
}

export default page
