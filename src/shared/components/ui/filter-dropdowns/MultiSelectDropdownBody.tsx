import React from 'react'
import { Checkbox } from '@/shared/components/ui/base/checkbox'
import { FilterOption } from '../../../../../modules/explore/types/filterTypes'

type Props = {
  options: FilterOption[]
  selected: string[]
  onToggle: (option: string) => void
}

const MultiSelectDropdownBody: React.FC<Props> = ({ options, selected, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-x-3">
      {options.map(option => (
        <label
          key={option.value}
          className="text-foreground text-body1 hover:bg-accent flex cursor-pointer items-center gap-[0.5rem] rounded-md px-[0.75rem] py-[0.375rem]"
        >
          <Checkbox
            checked={selected.includes(option.value.toString())}
            onCheckedChange={() => onToggle(option.value.toString())}
            className="text-foreground border-icon-input size-[1rem] border-2"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}

export default MultiSelectDropdownBody
