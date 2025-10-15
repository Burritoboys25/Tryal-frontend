import React, { forwardRef } from 'react'
import clsx from 'clsx'

type SectionProps = {
  children: React.ReactNode
  className?: string
  id?: string
  full?: boolean // for full-bleed sections
  background?:
    | 'teal'
    | 'nacho'
    | 'orange'
    | 'white'
    | 'none'
    | 'black'
    | 'light-teal'
    | 'salmon'
    | 'dark-teal'
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', id, full = false, background = 'none' }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={clsx(
          full ? '' : 'section-width-container rounded-3xl',
          {
            'text-foreground-dark bg-[#124E5B]': background === 'teal',
            'text-foreground-dark bg-[#09272e]': background === 'dark-teal',
            'bg-surface-light-orange text-foreground-light': background === 'nacho',
            'bg-surface-light-white text-foreground-light': background === 'white',
            'bg-surface-light-teal text-foreground-light': background === 'light-teal',
            'text-foreground-dark bg-black': background === 'black',
            'bg-transparent': background === 'none',
            'bg-orange-500 text-white': background === 'orange',
            'text-background bg-[#FADDD5]': background === 'salmon',
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
