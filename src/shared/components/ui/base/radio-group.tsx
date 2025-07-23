'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/shared/lib/utils'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  value,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      value={value}
      className={cn(
        'border-input-icon data-[state=checked]:border-primary relative aspect-square size-4 rounded-full border-2 transition-colors',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="bg-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
