import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'text-body2',
        'h-10 w-full rounded-sm border-2 px-3 py-2 shadow-xs',
        'bg-background text-foreground placeholder:text-muted-foreground',

        // Interaction states
        'transition-colors duration-300 ease-in-out outline-none',
        'hover:border-primary-hover/30 aria-invalid:hover:border-destructive',
        'hover:ring-1 hover:ring-[--ring]',
        'focus:border-primary/60 focus-visible:ring-1 focus-visible:ring-[--ring]',

        // Error
        'aria-invalid:border-destructive',

        // Disabled
        'disabled:bg-muted disabled:text-muted-foreground disabled:border-border disabled:pointer-events-none disabled:opacity-100',

        className,
      )}
      {...props}
    />
  )
}

export { Input }
