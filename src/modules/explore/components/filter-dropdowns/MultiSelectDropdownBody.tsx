import React from 'react'
import { Checkbox } from '@/shared/components/ui/base/checkbox'

type Props = {
  options: string[]
  selected: string[]
  onToggle: (option: string) => void
}

const MultiSelectDropdownBody: React.FC<Props> = ({ options, selected, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-x-3">
      {options.map(option => (
        <label
          key={option}
          className="text-foreground text-body1 flex cursor-pointer items-center gap-[0.5rem] px-[0.75rem] py-[0.375rem]"
        >
          <Checkbox
            checked={selected.includes(option)}
            onCheckedChange={() => onToggle(option)}
            className="text-foreground border-icon-input size-[1rem] border-2"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

export default MultiSelectDropdownBody
