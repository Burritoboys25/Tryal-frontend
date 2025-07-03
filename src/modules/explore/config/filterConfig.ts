import { FilterConfigItem } from '../types/filterTypes'

export const filterConfig: FilterConfigItem[] = [
  { key: 'type', label: 'Type', type: 'multi' },
  { key: 'skillLevel', label: 'Skill Level', type: 'multi' },
  { key: 'groupType', label: 'Group Type', type: 'single' },
  { key: 'duration', label: 'Duration', type: 'single' },
  { key: 'distance', label: 'Distance', type: 'single' },
  { key: 'credits', label: 'Credits', type: 'range' },
]
