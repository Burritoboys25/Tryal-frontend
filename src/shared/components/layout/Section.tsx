import React from 'react'

type SectionProps = {
  children: React.ReactNode
  className?: string
  ref?: React.RefObject<HTMLElement>
  id?: string
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section id={id} className={`section-width-container ${className}`}>
      {children}
    </section>
  )
}

export default Section
