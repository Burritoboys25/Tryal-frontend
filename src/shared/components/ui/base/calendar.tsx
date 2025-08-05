'use client'

import * as React from 'react'
import { DayPicker, getDefaultClassNames } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  className?: string
}

const defaultClassNames = getDefaultClassNames()

export const Calendar: React.FC<CalendarProps> = ({ className, ...props }) => {
  return (
    <DayPicker
      showOutsideDays
      animate
      navLayout="around"
      classNames={{
        ...defaultClassNames,
        today: `border-primary`,
        selected: `bg-accent rounded-full`,
        root: `${defaultClassNames.root} shadow-lg p-8 rounded-lg border bg-white`,
      }}
      className={className}
      {...props}
    />
  )
}
