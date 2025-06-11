import React from 'react'
import clsx from 'clsx'

interface BlurBackgroundProps {
  className?: string
  color?: string
  width?: number | string
  height?: number | string
  blur?: string // e.g. '70px'
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
  width = 450,
  height = 450,
  blur = '70px',
  style = {},
}) => {
  return (
    <div
      className={clsx('pointer-events-none', className)}
      style={{
        background: color,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        filter: `blur(${blur})`,
        borderRadius: '9999px',
        ...style,
      }}
      aria-hidden="true"
    />
  )
}

export default BlurBackground
