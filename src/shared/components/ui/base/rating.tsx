'use client'

import * as React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

interface RatingProps {
  /** The current rating value (0-5) */
  value: number
  /** Maximum number of stars (default: 5) */
  maxStars?: number
  /** Size of the stars */
  size?: number
  /** Whether the rating is interactive (clickable) */
  interactive?: boolean
  /** Whether to show the numeric rating alongside stars */
  showValue?: boolean
  /** Callback when rating changes (only for interactive mode) */
  onChange?: (rating: number) => void
  /** Custom className */
  className?: string
  /** Whether to show half stars */
  allowHalf?: boolean
}

const Rating: React.FC<RatingProps> = ({
  value,
  maxStars = 5,
  size = 20,
  interactive = false,
  showValue = false,
  onChange,
  className,
  allowHalf = false,
}) => {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)

  const stars = Array(maxStars).fill(0)

  const handleMouseEnter = (index: number) => {
    if (interactive) {
      setHoverValue(index + 1)
    }
  }

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverValue(null)
    }
  }
  const handleClick = (index: number) => {
    if (interactive && onChange) {
      onChange(index + 1)
    }
  }
  const getStarFill = (index: number): 'full' | 'half' | 'empty' => {
    const currentValue = hoverValue ?? value

    if (allowHalf) {
      if (currentValue >= index + 1) {
        return 'full'
      } else if (currentValue >= index + 0.5) {
        return 'half'
      } else {
        return 'empty'
      }
    } else {
      // Round the value when allowHalf is false
      const roundedValue = Math.round(currentValue)
      return roundedValue >= index + 1 ? 'full' : 'empty'
    }
  }

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {stars.map((_, index) => {
          const fillType = getStarFill(index)

          return (
            <div
              key={index}
              className={cn(
                'relative',
                interactive && 'cursor-pointer transition-transform hover:scale-110',
              )}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              {fillType === 'half' ? (
                <div className="relative">
                  <Star size={size} className="fill-gray-300 text-gray-300" />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                    <Star size={size} className="fill-[#E97958] text-[#E97958]" />
                  </div>
                </div>
              ) : (
                <Star
                  size={size}
                  className={cn(
                    fillType === 'full'
                      ? 'fill-[#E97958] text-[#E97958]'
                      : 'fill-chart-3 text-chart-3',
                    'transition-colors',
                  )}
                />
              )}
            </div>
          )
        })}
      </div>

      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-600">({value.toFixed(1)})</span>
      )}
    </div>
  )
}

//read-only rating display component
interface StarDisplayProps {
  rating: number
  maxStars?: number
  size?: number
  className?: string
  showValue?: boolean
}

export const StarDisplay: React.FC<StarDisplayProps> = ({
  rating,
  maxStars = 5,
  size = 16,
  className,
  showValue = false,
}) => {
  return (
    <Rating
      value={rating}
      maxStars={maxStars}
      size={size}
      interactive={false}
      showValue={showValue}
      allowHalf={false}
      className={className}
    />
  )
}

// Interactive rating input component
interface StarRatingProps {
  value: number
  onChange: (rating: number) => void
  maxStars?: number
  size?: number
  className?: string
}

export const StarRating: React.FC<StarRatingProps> = ({
  value,
  onChange,
  maxStars = 5,
  size = 24,
  className,
}) => {
  return (
    <Rating
      value={value}
      onChange={onChange}
      maxStars={maxStars}
      size={size}
      interactive={true}
      showValue={false}
      className={className}
    />
  )
}

export { Rating }
export default Rating
