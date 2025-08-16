'use client'

import FilterDropdown from '@/shared/components/ui/filter-dropdowns/FilterDropdown'
import React, { useState } from 'react'
import PersonIcon from '@/shared/assets/icons/person.svg'
import CalendarIcon from '@/shared/assets/icons/calendar.svg'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/base/popover'
import { Calendar } from '@/shared/components/ui/base/calendar'
import { ChevronDownIcon } from 'lucide-react'

const peopleOptions = [
  { label: '1 person', value: 1 },
  { label: '2 people', value: 2 },
  { label: '3 people', value: 3 },
  { label: '4 people', value: 4 },
  { label: '5 people', value: 5 },
]

const BookingFilters = () => {
  const [selectedPeople, setSelectedPeople] = useState(2)
  const [date, setDate] = useState<Date>(new Date())
  const [month, setMonth] = useState<Date | undefined>(undefined)
  // const [bookedDate, setBookedDate] = useState<Date | null>(null)
  const [open, setOpen] = useState(false)

  //   const handleBookDate = () => {
  //   setBookedDate(date)
  // }

  return (
    <section>
      <div className="text-sub1 mb-[1rem]">Booking</div>
      <div className="flex gap-[1rem]">
        <div className="flex flex-col gap-[0.75rem]">
          <FilterDropdown
            label={
              <span className="text-label flex items-center gap-2">
                <PersonIcon className="h-6 w-6" />
                {`${selectedPeople} people`}
              </span>
            }
            type="single"
            options={peopleOptions}
            value={selectedPeople}
            onApply={val => {
              if (typeof val === 'number') setSelectedPeople(val)
            }}
            onClear={() => setSelectedPeople(2)}
            className="focus:ring-primary data-[state=open]:ring-primary text-foreground bg-background border-muted-foreground hover:border-primary-hover/30 flex items-center gap-[0.25rem] rounded-full border px-[1rem] py-[0.5rem] text-sm font-medium transition-colors focus:ring-1 focus:outline-none data-[state=open]:ring-1"
          />
        </div>
        <div className="flex flex-col gap-[0.75rem]">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              {/* TODO: change button usage */}
              <button
                type="button"
                id="date"
                className="focus:ring-primary data-[state=open]:ring-primary text-foreground bg-background border-muted-foreground hover:border-primary-hover/30 flex w-[12rem] items-center justify-between gap-[0.25rem] rounded-full border px-[1rem] py-[0.5rem] text-sm font-medium whitespace-nowrap transition-colors focus:ring-1 focus:outline-none data-[state=open]:ring-1"
              >
                <CalendarIcon className="mr-2 h-6 w-6" />
                <span className="text-label">
                  {date
                    ? date.toLocaleDateString('en-US', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      })
                    : 'Select date'}
                </span>
                <ChevronDownIcon className="text-foreground h-[1rem] w-[1rem]" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                month={month}
                onMonthChange={setMonth}
                startMonth={new Date()}
                endMonth={new Date(new Date().getFullYear() + 1, new Date().getMonth())}
                onSelect={d => {
                  if (d) setDate(d)
                  setOpen(false)
                }}
                className="rdp-root rounded-lg border p-[2rem] shadow-sm"
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  )
}

export default BookingFilters
