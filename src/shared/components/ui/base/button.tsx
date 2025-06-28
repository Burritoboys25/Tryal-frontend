import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed h-[2.5rem]',
  {
    variants: {
      variant: {
        solid: 'bg-primary text-primary-foreground hover:bg-primary-hover',
        outline: 'border border-primary text-primary bg-white hover:bg-outline-hover',
        text: 'bg-transparent text-primary hover:bg-outline-hover',
        link: 'text-link underline hover:opacity-80',
      },
      size: {
        default: 'px-[1rem] py-[0.5rem]',
        sm: 'px-[0.75rem] py-[0.375rem] text-sm',
        lg: 'px-[1.25rem] py-[0.75rem] text-base',
        icon: 'p-[0.5rem]',
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
