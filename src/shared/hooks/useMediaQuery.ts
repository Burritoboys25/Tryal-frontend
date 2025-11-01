/**
 * Custom hook to check if the media query matches
 *
 * Use to check if mobile to conditionally render components
 *
 * Example:
 *  const isMobile = useMediaQuery("(max-width: 1023px)")
 *  Check if user is on desktop (≥ 1024px)
 *  const isDesktop = useMediaQuery("(min-width: 1024px)")
 *
 *  Check for tablet range (between 768px and 1024px)
 *  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
 *
 *  Orientation example (useful for responsive sliders)
 *  const isPortrait = useMediaQuery("(orientation: portrait)")
 *
 */

'use client'
import { useState, useEffect } from 'react'

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // guard for SSR
    if (typeof window === 'undefined') return
    const media = window.matchMedia(query)

    // set initial
    setMatches(media.matches)

    // listener
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [query])

  return matches
}
