import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/base/select'

import { Label } from '@/shared/components/ui/base/label'
type FormSelectProps = {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  options: string[] // array of options to display
  placeholder?: string
  error?: string
  required?: boolean
}

export const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select',
  error,
}: FormSelectProps) => {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={name} className="text-label">
        {label}
      </Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger id={name} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-destructive">{error}</p>}
    </div>
  )
}
