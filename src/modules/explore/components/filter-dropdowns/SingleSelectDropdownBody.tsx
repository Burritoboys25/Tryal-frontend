import React from 'react'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/base/radio-group'
import { Label } from '@/shared/components/ui/base/label'

type Props = {
  options: string[]
  selected: string
  onSelect: (val: string) => void
}

const SingleSelectDropdownBody: React.FC<Props> = ({ options, selected, onSelect }) => {
  return (
    <RadioGroup
      value={selected}
      onValueChange={onSelect}
      className="grid grid-cols-2 gap-x-12 gap-y-4"
    >
      {options.map(option => (
        <div key={option} className="flex items-center space-x-2">
          <RadioGroupItem value={option} id={option} />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  )
}

export default SingleSelectDropdownBody
