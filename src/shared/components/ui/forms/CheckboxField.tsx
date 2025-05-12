import { Checkbox } from './base/checkbox'
import { Label } from './base/label'

type CheckboxFieldProps = {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: (checked: boolean, value: string) => void
  required?: boolean
  disabled?: boolean
}

const CheckboxField = ({
  label,
  name,
  value,
  checked,
  onChange,
  required,
  disabled,
}: CheckboxFieldProps) => {
  const id = `${name}-${value}`

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={checked => onChange(!!checked, value)}
        disabled={disabled}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  )
}

export default CheckboxField
