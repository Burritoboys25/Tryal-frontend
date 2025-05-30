'use client'

import mapboxgl from 'mapbox-gl'
import { useRef, useEffect, useState } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

// Austin Texas coordinates
const DEFAULT_CENTER = {
  lng: -97.73333,
  lat: 30.266666,
}
const DEFAULT_ZOOM = 11

type Experience = {
  business_id: string
  name: string
  lat: number
  lng: number
}

type MapProps = {
  experiences: Experience[]
  selectedId?: string
}

// export default function Map() {
export default function Map({ experiences, selectedId }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[] | null>([]) // Reference for all the markers present

  const [zoom, setZoom] = useState(DEFAULT_ZOOM)

  // Mount the map on first render and prevent duplicate mounts
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: 'mapbox://styles/mapbox/standard',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat],
      zoom: DEFAULT_ZOOM,
    })
    return () => mapRef.current?.remove()
  }, [])

  // Add markers to the Map
  useEffect(() => {
    if (!mapRef.current) return

    markersRef.current?.forEach(marker => marker.remove())
    markersRef.current = []

    experiences.forEach(exp => {
      const marker = new mapboxgl.Marker().setLngLat([exp.lng, exp.lat]).addTo(mapRef.current!)

      markersRef.current?.push(marker)
    })
  }, [experiences, selectedId])

  return <div ref={mapContainer} className="h-full w-full" />
}
