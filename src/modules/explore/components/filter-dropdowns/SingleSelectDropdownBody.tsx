'use client'
import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/base/radio-group'
import { Label } from '@/shared/components/ui/base/label'
import { FilterOption } from '../../types/filterTypes'

type Props = {
  options: FilterOption[]
  selected: string | number | null
  onSelect: (val: string | number) => void
}

const SingleSelectDropdownBody: React.FC<Props> = ({ options, selected, onSelect }) => {
  const handleValueChange = (val: string) => {
    // Find the option to determine if we should return string or number
    const option = options.find(opt => opt.value.toString() === val)
    if (option) {
      onSelect(option.value)
    }
  }

  return (
    <RadioGroup
      value={selected?.toString() || ''}
      onValueChange={handleValueChange}
      className="grid grid-cols-2 gap-x-[1rem] px-[0.75rem]"
    >
      {options.map(option => {
        const id = option.value.toString()
        return (
          <div
            key={id}
            className="hover:bg-accent flex items-center gap-[0.5rem] rounded-md px-[0.75rem] py-[0.5rem]"
          >
            <RadioGroupItem value={id} id={id} />
            <Label htmlFor={id}>{option.label}</Label>
          </div>
        )
      })}
    </RadioGroup>
  )
}

export default SingleSelectDropdownBody
