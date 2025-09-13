import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import SplitText from 'gsap/SplitText'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, useGSAP, SplitText, ScrollTrigger }
