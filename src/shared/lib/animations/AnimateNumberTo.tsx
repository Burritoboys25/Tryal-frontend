import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

type Props = {
  start?: number
  end: number
  suffix?: string
  duration?: number
  ease?: string
}

export default function AnimateNumberTo({
  start = 0,
  end,
  suffix = '',
  duration = 1,
  ease = 'power1.out',
}: Props) {
  const [display, setDisplay] = useState(`${start}${suffix}`)

  const obj = useRef<{ value: number }>({ value: start })
  const el = useRef<HTMLSpanElement | null>(null)

  useGSAP(
    () => {
      if (!el.current) return
      gsap.fromTo(
        obj.current,
        { value: start },
        {
          value: end,
          duration,
          ease,
          scrollTrigger: {
            trigger: el.current,
            start: 'top 80%',
            once: true,
          },
          onUpdate: () => {
            setDisplay(`${Math.round(obj.current.value)}${suffix}`)
          },
        },
      )
    },
    { scope: el, dependencies: [start, end, suffix, duration, ease] },
  )

  return <span ref={el}>{display}</span>
}
