import { Slider } from '@/shared/components/ui/base/slider'
import React from 'react'

interface RangedSliderDropdownBodyProps {
  min: number
  max: number
  value: [number, number]
  onChange: (value: [number, number]) => void
}

const RangedSliderDropdownBody = ({ min, max, value, onChange }: RangedSliderDropdownBodyProps) => {
  const handleChange = (value: [number, number]) => {
    onChange(value)
  }

  return (
    <div className="min-w-xs space-y-4">
      <div className="flex items-center gap-1 font-semibold">
        <span>{value[0]}</span>
        <span> - </span>
        <span>{value[1]}</span>
      </div>

      <Slider
        min={min}
        max={max}
        step={1}
        className="w-full"
        value={value as [number, number]}
        onValueChange={handleChange}
      />
    </div>
  )
}

export default RangedSliderDropdownBody
