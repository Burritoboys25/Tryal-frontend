import { cn } from '@/shared/lib/utils'
import { Checkbox } from '../base/checkbox'
import { Label } from '../base/label'

type CheckboxFieldProps = {
  label: string | React.ReactNode
  name: string
  value: string | boolean
  checked: boolean
  onChange: (checked: boolean, value: string | boolean) => void
  required?: boolean
  disabled?: boolean
  error?: string
}

const CheckboxField = ({
  label,
  name,
  value,
  checked,
  onChange,
  required,
  error,
  disabled,
}: CheckboxFieldProps) => {
  const id = `${name}-${value}`
  const errorId = `${id}-error`

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={checked}
        required={required}
        onCheckedChange={checked => onChange(!!checked, value)}
        disabled={disabled}
        className="border-border border-2"
      />
      <Label>{label}</Label>
      <p
        id={errorId}
        className={cn(
          'text-destructive absolute left-3 text-xs',
          'transition-opacity duration-300 ease-in-out',
          error ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        {error}
      </p>
    </div>
  )
}

export default CheckboxField
