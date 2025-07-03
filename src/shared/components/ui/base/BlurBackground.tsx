import React from 'react'
import clsx from 'clsx'

interface BlurBackgroundProps {
  className?: string
  color?: string
  blur?: string // e.g. '4.375rem'
  style?: React.CSSProperties
}

/**
 * Reusable blur background component for decorative effects.
 * Example usage:
 * <BlurBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1]" />
 */
const BlurBackground: React.FC<BlurBackgroundProps> = ({
  className = '',
  color = '#F4BCAB',
  blur = '4.375rem',
  style = {},
}) => {
  return (
    <div
      className={clsx('pointer-events-none -z-1', className)}
      style={{
        background: color,
        filter: `blur(${blur})`,
        borderRadius: '9999px',
        ...style,
      }}
      aria-hidden="true"
    />
  )
}

export default BlurBackground
