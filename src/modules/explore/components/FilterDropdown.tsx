'use client'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/components/ui/base/popover'
import ArrowDropDownIcon from '@/shared/assets/icons/arrow_drop_down.svg'
import MultiSelectDropdownBody from './filter-dropdowns/MultiSelectDropdownBody'
import SingleSelectDropdownBody from './filter-dropdowns/SingleSelectDropdownBody'
import { Button } from '@/shared/components/ui/base/button'
import RangedSliderDropdownBody from './filter-dropdowns/RangedSliderDropdownBody'

interface FilterDropdownProps {
  label: string
  type: 'multi' | 'single' | 'range'
  options: string[] | [number, number] // [min, max]
  value: string[] | string | [number, number]
  onApply: (val: string[] | string | [number, number]) => void
  onClear: () => void
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  type,
  options,
  value,
  onApply,
  onClear,
}) => {
  // Flags for dropdowns.
  const isMulti = type === 'multi'
  const isRange = type === 'range'
  const isSingle = type === 'single'

  const [open, setOpen] = useState(false)
  const [localValue, setLocalValue] = useState<string[] | string | [number, number]>(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  // Filter options for local value for multi select dropdowns.
  const toggleMulti = (option: string) => {
    if (!Array.isArray(localValue)) return

    setLocalValue(prev => {
      const arr = prev as string[]
      return arr.includes(option) ? arr.filter(o => o !== option) : [...arr, option]
    })
  }

  // Takes local value and updates the top level form
  const handleApply = () => {
    onApply(localValue)
    setOpen(false)
  }

  // Reset local values to empty
  const handleClear = () => {
    if (isMulti) {
      setLocalValue([])
    } else if (isSingle) {
      setLocalValue('')
    } else if (isRange) {
      setLocalValue(options)
    }
    onClear()
    setOpen(false)
  }

  // Returns local state back to back to the original form value if applied or clear is not pressed.
  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      setLocalValue(value)
    }
    setOpen(open)
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <button className="focus:ring-primary data-[state=open]:ring-primary text-foreground border-input bg-background hover:border-primary-hover/30 flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:outline-none data-[state=open]:ring-2">
          <span>{label}</span>
          <ArrowDropDownIcon className="text-foreground h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto px-4 py-3">
        <div>
          {isMulti && (
            <MultiSelectDropdownBody
              options={options as string[]}
              selected={localValue as string[]}
              onToggle={toggleMulti}
            />
          )}

          {isSingle && (
            <SingleSelectDropdownBody
              options={options as string[]}
              selected={localValue as string}
              onSelect={val => setLocalValue(val)}
            />
          )}

          {isRange && (
            <RangedSliderDropdownBody
              min={options[0] as number}
              max={options[1] as number}
              value={localValue as [number, number]}
              onChange={val => setLocalValue(val)}
            />
          )}

          <div className="flex justify-end gap-2 border-t pt-3">
            <Button variant="outline" className="px-6 py-2" onClick={handleClear}>
              Clear
            </Button>
            <Button className="px-6 py-2" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default FilterDropdown
