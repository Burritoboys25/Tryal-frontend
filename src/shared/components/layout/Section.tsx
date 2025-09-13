import React, { forwardRef } from 'react'
import clsx from 'clsx'

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  full?: boolean // for full-bleed sections
  background?: 'orange' | 'gray' | 'white' | 'none' | 'teal' | 'nacho' | 'black' | 'tan'
  roundedTop?: boolean
  roundedBottom?: boolean
  offsetSection?: boolean
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className = '',
      id,
      full = false,
      background = 'none',
      roundedTop,
      roundedBottom,
      offsetSection,
    },
    ref,
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={clsx(
          full ? '' : 'section-width-container',
          {
            'bg-orange-500 text-white': background === 'orange',
            'bg-gray-400 text-black': background === 'gray',
            'bg-white text-black': background === 'white',
            'bg-[#FFB517] text-white': background === 'nacho',
            'bg-black text-white': background === 'black',
            'text-foreground bg-[#fdf1e7]': background === 'tan',
            'bg-transparent': background === 'none',
            'rounded-t-3xl': roundedTop,
            'rounded-b-3xl': roundedBottom,
            '-mb-8 pb-8': offsetSection,
          },
          className,
        )}
      >
        {children}
      </section>
    )
  },
)

Section.displayName = 'Section'
export default Section
