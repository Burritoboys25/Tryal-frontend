import * as React from 'react'

import { cn } from '@/shared/lib/utils'

interface InputProps extends React.ComponentProps<'input'> {
  icon?: React.ReactNode
}

function Input({ className, type, icon, ...props }: InputProps) {
  return (
    <div className={cn(icon && 'relative', className)}>
      {icon && (
        <span className="text-icon-input pointer-events-none absolute top-1/2 left-3 flex -translate-y-1/2 items-center">
          {icon}
        </span>
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'h-10 w-full rounded-sm border-1 px-3 py-2 shadow-xs',
          'bg-background text-foreground placeholder:text-muted-foreground border-input',

          // Interaction states
          'transition-colors duration-300 ease-in-out outline-none',
          'hover:border-primary-hover/30 aria-invalid:hover:border-destructive',
          'hover:ring-1 hover:ring-[--ring]',
          'focus:border-primary/60 focus-visible:ring-1 focus-visible:ring-[--ring]',

          // Error
          'aria-invalid:border-destructive',

          // Disabled
          'disabled:bg-muted disabled:text-muted-foreground disabled:border-border disabled:pointer-events-none disabled:opacity-100',
          icon ? 'pl-10' : '',
        )}
        {...props}
      />
    </div>
  )
}

export { Input }
