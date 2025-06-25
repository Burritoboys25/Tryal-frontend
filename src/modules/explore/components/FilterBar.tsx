'use client'

import React from 'react'
import FilterDropdown from './FilterDropdown'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'

import { filterConfig } from '../config/filterConfig'
import { FilterKey, Filters, FilterOptionMap } from '../types/filterTypes'

type FilterBarProps = {
  filters: Filters
  filterOptions: FilterOptionMap
  onChange: (key: FilterKey, value: Filters[FilterKey]) => void
  onReset: () => void
  credits?: number
}

const FilterBar = ({ filters, filterOptions, onChange, onReset, credits = 30 }: FilterBarProps) => {
  return (
    <div className="flex w-full gap-3 py-[0.5rem]">
      {filterConfig.map(({ key, label, type }) => {
        const options = filterOptions[key]
        const value = filters[key]

        return (
          <FilterDropdown
            key={key}
            label={label}
            type={type}
            options={options}
            value={value}
            onApply={val => onChange(key, val as Filters[FilterKey])}
            onClear={() => {
              if (type === 'multi') return onChange(key, []) // reset to empty array
              if (type === 'range') return onChange(key, options as [number, number]) // reset to [min, max]
              if (type === 'single') return onChange(key, null) // reset to null
            }}
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
