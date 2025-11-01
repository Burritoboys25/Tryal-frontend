export type Slide = {
  id: string
  tab: string
  title: string
  body: string
  image: string
  accent?: string
  imageClassName?: string
}

export const USER_SLIDES: Slide[] = [
  {
    id: 'events',
    tab: 'Events',
    title: 'Stay in the know\nwith live events.',
    body: 'Discover workshops, pop-ups, and unique local experiences happening near you. From weekend classes to special events across town, Tryal keeps you in the loop so you can plan, book, and go—all in one place.',
    image: '/events.png',
    accent: 'bg-[#ABE7F4]',
  },
  {
    id: 'community',
    tab: 'Community',
    title: 'Connect with Like-Minded Explorers',
    body: 'Join a community of curious adventurers who love trying new things. Meet others who share your passions, exchange tips, and find inspiration through shared experiences.',
    image: '/community.png',
    accent: 'bg-[#F4BCAB]',
  },
  {
    id: 'seasonal',
    tab: 'Seasonal',
    title: 'Celebrate the Season',
    body: 'Make every season special with curated experiences that fit the moment. From cozy fall workshops to sunny summer adventures, Tryal helps you explore, create, and enjoy year-round.',
    image: '/lantern.png',
    accent: 'bg-[#B3E2D9]',
  },
]

export const PARTNER_SLIDES: Slide[] = [
  {
    id: 'pricing',
    tab: 'Smart Pricing & Optimization',
    title: 'Smarter Pricing, Bigger Impact',
    body: 'Automatically adjust your prices based on demand. Raise prices during peak times to maximize revenue, or lower them during slow periods to encourage bookings.',
    image: '/demos/peaktimes.gif',
    accent: 'bg-[#F4BCAB]',
  },
  {
    id: 'dashboard',
    tab: 'All-in-One Dashboard',
    title: 'Manage Everything from One Smart Hub',
    body: 'Manage your entire business from a single place. Track bookings, monitor performance, and gain insights that help you grow—without juggling multiple tools.',
    image: '/demos/spider.gif',
    accent: 'bg-[#81CFC0]',
  },
  {
    id: 'booking',
    tab: 'Real-Time Flexibility',
    title: 'Reschedule Without the Stress',
    body: 'Weather, cancellations, or shifting schedules? No problem. Easily edit or reschedule your experiences in just a few clicks, keeping your business running smoothly.',
    image: '/demos/calendar.gif',
    accent: 'bg-[#ABE7F4]',
    imageClassName: 'scale-100 2xl:scale-120 2xl:py-14',
  },
]
