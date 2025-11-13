'use client'

import { Business } from '@/modules/explore/types/businessTypes'
import mapboxgl from 'mapbox-gl'
import { useRef, useEffect } from 'react'

import DefaultPin from '@/shared/assets/icons/default-pin.svg'
import SelectedPin from '@/shared/assets/icons/selected-pin.svg'
import ReactDOMServer from 'react-dom/server'

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
  hoveredId?: string | null
}

// export default function Map() {
export default function Map({ items, selectedId, hoveredId }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)
  const markersRef = useRef<mapboxgl.Marker[]>([])

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return
    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [DEFAULT_CENTER.lng, DEFAULT_CENTER.lat],
      zoom: DEFAULT_ZOOM,
    })
    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  // Add markers
  useEffect(() => {
    if (!mapRef.current) return

    // Remove old markers
    markersRef.current.forEach(marker => marker.remove())
    markersRef.current = []

    items?.forEach(item => {
      const el = document.createElement('div')
      el.className = 'marker'

      const isHovered = item.businessId === hoveredId
      const hoverStyle = `${isHovered ? 'marker-icon-hover' : ''}`

      el.innerHTML = ReactDOMServer.renderToString(
        <div className={hoverStyle}>
          {item.businessId === selectedId ? <SelectedPin /> : <DefaultPin />}
        </div>,
      )

      el.style.transform = 'translate(-50%, -100%)'
      el.style.position = 'absolute'
      el.style.cursor = 'pointer'

      const marker = new mapboxgl.Marker(el)
        .setLngLat([item.longitude, item.latitude])
        .addTo(mapRef.current!)
      markersRef.current?.push(marker)
    })
  }, [items, selectedId, hoveredId])

  // Fly to selected
  useEffect(() => {
    if (!mapRef.current || !selectedId) return

    const selected = items.find(item => item.businessId === selectedId)

    if (selected) {
      mapRef.current.flyTo({
        center: [selected.longitude, selected.latitude],
        zoom: 11,
        essential: true,
      })
    }
  }, [selectedId, items])

  return <div ref={mapContainer} className="h-full w-full" />
}
