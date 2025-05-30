'use client'

import { Business } from '@/shared/mock/MockTypes'
import mapboxgl from 'mapbox-gl'
import { useRef, useEffect, useState } from 'react'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

// Austin Texas coordinates
const DEFAULT_CENTER = {
  lng: -97.73333,
  lat: 30.266666,
}
const DEFAULT_ZOOM = 11

type MapProps = {
  items: Business[]
  selectedId?: string
}

// export default function Map() {
export default function Map({ items, selectedId }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[] | null>([]) // Reference for all the markers present

  const [zoom, setZoom] = useState(DEFAULT_ZOOM)

  // Mount the map on first render and prevent duplicate mounts
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
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

    items.forEach(item => {
      const marker = new mapboxgl.Marker().setLngLat([item.lng, item.lat]).addTo(mapRef.current!)

      markersRef.current?.push(marker)
    })
  }, [items, selectedId])

  useEffect(() => {
    if (!mapRef.current || !selectedId) return

    const selected = items.find(item => item.business_id === selectedId)

    if (selected) {
      mapRef.current.flyTo({
        center: [selected.lng, selected.lat],
        zoom: 15,
        essential: true,
      })
    }
  }, [selectedId, items])

  return <div ref={mapContainer} className="h-full w-full" />
}
