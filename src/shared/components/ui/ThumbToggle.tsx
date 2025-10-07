import React from 'react'

type Option = { value: string; label: string }

export function SegmentedToggle({
  options,
  value,
  onChange,
  className = '',
}: {
  options: Option[]
  value: string
  onChange: (v: string) => void
  className?: string
}) {
  const idx = Math.max(
    0,
    options.findIndex(o => o.value === value),
  )

  return (
    <div
      role="radiogroup"
      aria-label="Toggle"
      className={[
        'relative inline-grid items-center rounded-full',
        // background of the track
        'bg-white/20 ring-1 ring-white/30 backdrop-blur-md',
        'p-1 select-none',
        `grid-cols-${options.length}`, // works for 2–4 options (Tailwind needs safelist if dynamic)
        className,
      ].join(' ')}
      onKeyDown={e => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault()
          onChange(options[(idx + 1) % options.length].value)
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault()
          onChange(options[(idx - 1 + options.length) % options.length].value)
        }
      }}
    >
      {/* sliding thumb */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-1 left-1 w-[calc(100%/_var(--n)-0.5rem)] rounded-full bg-white shadow-sm transition-transform duration-200"
        style={
          {
            // number of segments + position
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ['--n' as any]: String(options.length),
            transform: `translateX(calc(${idx} * (100% + 0.5rem)))`,
          } as React.CSSProperties
        }
      />

      {options.map(o => (
        <button
          key={o.value}
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors ${value === o.value ? 'text-primary' : 'text-neutral-900/80'}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
