import React from 'react'
import { Checkbox } from '@/shared/components/ui/base/checkbox'

type Props = {
  options: string[]
  selected: string[]
  onToggle: (option: string) => void
}

const MultiSelectDropdownBody: React.FC<Props> = ({ options, selected, onToggle }) => {
  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-2">
      {options.map(option => (
        <label key={option} className="flex cursor-pointer items-center gap-2 text-sm">
          <Checkbox checked={selected.includes(option)} onCheckedChange={() => onToggle(option)} />
          <span>{option}</span>
        </label>
      ))}
    </div>
  )
}

export default MultiSelectDropdownBody
