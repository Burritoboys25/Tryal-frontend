import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/components/ui/base/popover'
import ArrowDropDownIcon from '@/shared/assets/icons/arrow_drop_down.svg'

interface FilterDropdownProps {
  label: string
  children?: React.ReactNode
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="focus:ring-primary data-[state=open]:ring-primary text-foreground border-input bg-background hover:border-primary-hover/30 flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:outline-none data-[state=open]:ring-2">
          <span>{label}</span>
          <ArrowDropDownIcon className="text-foreground h-4 w-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-48">
        {children || <div className="text-label">{label} filter options go here</div>}
      </PopoverContent>
    </Popover>
  )
}

export default FilterDropdown
