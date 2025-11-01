import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
  ' inline-flex items-center justify-center rounded-full text-sm font-bold transition-colors focus:outline-none disabled:text-icon-input disabled:cursor-not-allowed h-[2.5rem]',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-primary-disabled',
        outline: 'border-2 border-primary text-primary bg-transparent hover:bg-surface-light-orange disabled:border-primary-disabled disabled:bg-white ',
        text: 'bg-transparent text-primary hover:bg-surface-light-orange disabled:bg-transparent',
        secondary: 'bg-surface-dark text-primary-foreground hover:bg-[#1C7589] disabled:bg-primary-disabled',
        link: 'text-link text-[#1C8BF9] hover:underline hover:opacity-80',
        filter:
          'focus:ring-primary data-[state=open]:ring-primary text-foreground bg-background border-muted-foreground hover:border-primary-hover/30 flex items-center gap-[0.25rem] rounded-full border px-[1rem] py-[0.5rem] text-sm font-medium transition-colors focus:ring-1 focus:outline-none data-[state=open]:ring-1',
        tab: 'bg-primary text-white ring-1 ring-white/10 hover:bg-primary-hover',
        tabInactive: 'border-primary ring-primary border-2 bg-white text-primary ring-2',
      },
      size: {
        default: 'px-[1.5rem] py-[0.5rem]',
        // icon: 'p-[0.5rem]',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, iconLeft, iconRight, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    )
  },
)

Button.displayName = 'Button'
export { Button, buttonVariants }
