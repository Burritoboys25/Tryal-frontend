'use client'
import React, { useEffect, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/components/ui/base/popover'
import ArrowDropDownIcon from '@/shared/assets/icons/arrow_drop_down.svg'
import MultiSelectDropdownBody from './filter-dropdowns/MultiSelectDropdownBody'
import SingleSelectDropdownBody from './filter-dropdowns/SingleSelectDropdownBody'
import { Button } from '@/shared/components/ui/base/button'

interface FilterDropdownProps {
  label: string
  type: 'multi' | 'single'
  options: string[]
  value: string[] | string
  onApply: (val: string[] | string) => void
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
  const isMulti = type === 'multi'
  const [open, setOpen] = useState(false)
  const [localValue, setLocalValue] = useState<string[] | string>(value)

  useEffect(() => {
    setLocalValue(value)
  }, [value])

  const toggleMulti = (option: string) => {
    if (!Array.isArray(localValue)) return
    setLocalValue(prev =>
      prev.includes(option)
        ? (prev as string[]).filter(o => o !== option)
        : [...(prev as string[]), option],
    )
  }

  const handleApply = () => {
    onApply(localValue)
    setOpen(false)
  }

  const handleClear = () => {
    setLocalValue(isMulti ? [] : '')
    onClear()
    setOpen(false)
  }

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
      <PopoverContent className="w-auto">
        {isMulti ? (
          <MultiSelectDropdownBody
            options={options}
            selected={localValue as string[]}
            onToggle={toggleMulti}
          />
        ) : (
          <SingleSelectDropdownBody
            options={options}
            selected={localValue as string}
            onSelect={val => setLocalValue(val)}
          />
        )}
        <div className="mt-4 flex justify-end gap-2 border-t pt-3">
          <Button variant="outline" className="px-6 py-2" onClick={handleClear}>
            Clear
          </Button>
          <Button className="px-6 py-2" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default FilterDropdown
