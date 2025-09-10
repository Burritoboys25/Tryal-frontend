// Utility to register GSAP's ScrollTrigger plugin globally

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let isRegistered = false

export function registerGSAPScrollTrigger() {
  if (!isRegistered) {
    gsap.registerPlugin(ScrollTrigger)
    isRegistered = true
  }
}
