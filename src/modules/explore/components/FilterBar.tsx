'use client'

import React from 'react'
import FilterDropdown from './FilterDropdown'
import { Button } from '@/shared/components/ui/base/button'
import CreditIcon from '@/shared/assets/icons/credit.svg'

const filterTypes = ['Type', 'Skill level', 'Group type', 'Duration', 'Distance', 'Credit Range']

const FilterBar = ({ credits = 30 }: { credits?: number }) => {
  return (
    <div className="flex w-full gap-3 py-2">
      {filterTypes.map(type => (
        <FilterDropdown key={type} label={type} />
      ))}
      <Button variant="text" className="cursor-pointer">
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
