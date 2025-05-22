/**Fiilter config used to render UI types */
export const filterConfig: Record<
  FilterKey,
  { label: string; type: 'single' | 'multi' | 'range' }
> = {
  type: { label: 'Type', type: 'multi' },
  skillLevel: { label: 'Skill Level', type: 'multi' },
  groupType: { label: 'Group Type', type: 'single' },
  duration: { label: 'Duration', type: 'single' },
  credits: { label: 'Credits', type: 'range' },
  distance: { label: 'Distance', type: 'single' },
}

export type FilterKey = 'type' | 'skillLevel' | 'groupType' | 'duration' | 'credits' | 'distance'

export const filterOptions: Record<FilterKey, string[] | [number, number]> = {
  type: [
    'Arts & Crafts',
    'Culinary Experiences',
    'Cultural & Educational',
    'DIY & Hands-on',
    'Music & Dance',
    'Outdoor & Adventure',
    'Social & Networking Events',
    'Wellness & Mindfulness',
    'Historical & Cultural',
    'Boozy (21+)',
  ],
  skillLevel: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
  groupType: [
    'Any',
    'Solo Friendly',
    'Couples & Date Night',
    'Family-Friendly',
    'Group & Team-Building',
  ],
  duration: ['Any', '30 mins', '45 mins', '1 hour', '1.5 hours', '2+ hours'],
  credits: [2, 15],
  distance: ['Auto', '1/2 mile', '1 mile', '5 miles', '10 miles', '25+ miles'],
}
