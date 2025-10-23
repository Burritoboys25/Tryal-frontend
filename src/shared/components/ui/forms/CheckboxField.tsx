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
    <div className="flex flex-col">
      <div className='flex flex-row gap-2'>
        <Checkbox
          id={id}
          checked={checked}
          required={required}
          onCheckedChange={checked => onChange(!!checked, value)}
          disabled={disabled}
          className="border-border border-2 mt-1"
        />
        <Label>{label}</Label>
      </div>
      <div>
        <p
          id={errorId}
          className={cn(
            'text-destructive mt-1 text-xs',
            'transition-opacity duration-300 ease-in-out',
            error ? 'opacity-100' : 'pointer-events-none opacity-0',
          )}
        >
          {error}
        </p>
      </div>
    </div>
  )
}

export default CheckboxField
