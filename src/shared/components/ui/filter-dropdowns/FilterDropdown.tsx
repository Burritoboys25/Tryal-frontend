'use client'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/components/ui/base/popover'
import ArrowDropDownIcon from '@/shared/assets/icons/arrow_drop_down.svg'
import MultiSelectDropdownBody from './MultiSelectDropdownBody'
import SingleSelectDropdownBody from './SingleSelectDropdownBody'
import { Button } from '@/shared/components/ui/base/button'
import { cn } from '@/shared/lib/utils'
import RangedSliderDropdownBody from './RangedSliderDropdownBody'
import { FilterKey, FilterOption, Filters } from '../../../../modules/explore/types/filterTypes'

interface FilterDropdownProps {
  label: string | React.ReactNode
  type: 'multi' | 'single' | 'range'
  options: FilterOption[] | [number, number]
  value: Filters[FilterKey]
  onApply: (val: Filters[FilterKey]) => void
  onClear: () => void
  className?: string
  disableSelected?: boolean
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  type,
  options,
  value,
  onApply,
  onClear,
  className,
  disableSelected = false,
}) => {
  // Flags for dropdowns.
  const isMulti = type === 'multi'
  const isRange = type === 'range'
  const isSingle = type === 'single'

  const [open, setOpen] = useState(false)
  const [localValue, setLocalValue] = useState<Filters[FilterKey]>(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const isFilterApplied = (): boolean => {
    if (isMulti) {
      return Array.isArray(value) && value.length > 0
    } else if (isSingle) {
      return value !== '' && value !== Infinity
    } else if (isRange) {
      return (
        Array.isArray(value) &&
        Array.isArray(options) &&
        typeof options[0] === 'number' &&
        typeof options[1] === 'number' &&
        (value[0] !== options[0] || value[1] !== options[1])
      )
    }
    return false
  }

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
      setLocalValue([] as Filters[FilterKey])
    } else if (isSingle) {
      setLocalValue('' as Filters[FilterKey])
    } else if (isRange) {
      setLocalValue(options as Filters[FilterKey])
    }
    onClear()
    setOpen(false)
  }

  // Returns local state back to back to the original form value if applied or clear is not pressed.
  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (open) {
      setLocalValue(value) // ← sync from applied filters when opening
    }
  }

  const isApplied = disableSelected ? false : isFilterApplied()

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="filter"
          className={cn(className, isApplied ? 'border-primary' : 'border-input')}
        >
          <span>{label}</span>
          <ArrowDropDownIcon className="text-foreground h-[1rem] w-[1rem]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto px-0 pt-[0.25rem]" align="start">
        <div className="flex flex-col">
          <div className="px-[0.75rem] pt-0 pb-[1rem]">
            {isMulti && (
              <MultiSelectDropdownBody
                options={options as FilterOption[]}
                selected={localValue as string[]}
                onToggle={toggleMulti}
              />
            )}

            {isSingle && (
              <SingleSelectDropdownBody
                options={options as FilterOption[]}
                selected={localValue as string | number | null}
                onSelect={val => setLocalValue(val as Filters[FilterKey])}
              />
            )}
            {isRange &&
              Array.isArray(options) &&
              typeof options[0] === 'number' &&
              typeof options[1] === 'number' && (
                <RangedSliderDropdownBody
                  min={options[0]}
                  max={options[1]}
                  value={localValue as [number, number]}
                  onChange={val => setLocalValue(val as Filters[FilterKey])}
                />
              )}
          </div>

          <div className="border-border/50 flex justify-end gap-[0.5rem] border-t px-[0.75rem] pt-[0.75rem]">
            <Button variant="outline" className="px-[1.5rem] py-[0.5rem]" onClick={handleClear}>
              Clear
            </Button>
            <Button className="px-[1.5rem] py-[0.5rem]" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default FilterDropdown
