import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/base/radio-group'
import { Label } from '@/shared/components/ui/base/label'
import { FilterOption } from '../../types/filterTypes'

type Props = {
  options: FilterOption[]
  selected: string
  onSelect: (val: string) => void
}

const SingleSelectDropdownBody: React.FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <RadioGroup
      value={selected}
      onValueChange={onSelect}
      className="grid grid-cols-2 gap-x-[1rem] px-[0.75rem]"
    >
      {options.map(option => (
        <div
          key={option.value}
          className="hover:bg-accent flex items-center gap-[0.5rem] rounded-md px-[0.75rem] py-[0.5rem]"
        >
          <RadioGroupItem
            value={option.value.toString()}
            id={option.value.toString()}
            className="data-[state=checked]:border-primary border-input-icon border-2"
          />
          <Label htmlFor={option.label}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default SingleSelectDropdownBody
