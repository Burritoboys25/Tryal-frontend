'use client'

import React from 'react'
import FilterDropdown from './FilterDropdown'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import { filterConfig, FilterKey, filterOptions } from '../libs/FilterConstants'

type FilterBarProps = {
  filters: Record<FilterKey, string[] | string>
  onChange: (key: FilterKey, value: string[] | string) => void
  onReset: () => void
  credits?: number
}

const FilterBar = ({ filters, onChange, onReset, credits = 30 }: FilterBarProps) => {
  return (
    <div className="flex w-full gap-3 py-2">
      {Object.entries(filterConfig).map(([key, config]) => {
        const k = key as FilterKey
        // Skip range filters for now
        if (config.type === 'range') return null

        return (
          <FilterDropdown
            key={k}
            label={config.label}
            type={config.type}
            options={filterOptions[k] as string[]}
            value={filters[k]}
            onApply={val => onChange(k, val)}
            onClear={() => onChange(k, config.type === 'multi' ? [] : '')}
          />
        )
      })}

      <Button variant="text" className="cursor-pointer" onClick={onReset}>
        <span className="text-button">Reset All Filters</span>
      </Button>
      <Button variant="outline" className="ml-auto cursor-pointer">
        <CreditIcon />
        <span className="text-button ml-2">Credits: {credits}</span>
      </Button>
    </div>
  )
}

export default FilterBar
