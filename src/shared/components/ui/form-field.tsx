import React from 'react'
import { Input } from './input'
import { Label } from './label'
import { cn } from '@/shared/lib/utils'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  error?: string
  type?: string
  placeholder?: string
  required?: boolean
  className?: string
}

const FormField = ({
  label,
  name,
  type = 'text',
  placeholder,
  error,
  required,
  className,
  value,
  onChange,
  ...props
}: FormFieldProps) => {
  const inputId = React.useId()
  const errorId = `${inputId}-error`

  return (
    <div className="space-y-1.5">
      <Label htmlFor={inputId} className="text-label">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          required={required}
          className={cn(error && 'border-[--destructive]', className)}
          value={value}
          onChange={onChange}
          {...props}
        />
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
    </div>
  )
}

export default FormField
