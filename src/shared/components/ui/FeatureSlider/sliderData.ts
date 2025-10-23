export type Slide = {
  id: string
  tab: string
  eyebrow?: string
  title: string
  body: string
  image: string
  accent?: string
}

export const USER_SLIDES: Slide[] = [
  {
    id: 'events',
    tab: 'Events',
    title: 'Stay in the know\nwith live events.',
    body: 'Discover workshops, pop-ups, and unique local experiences happening near you. From weekend classes to special events across town, Tryal keeps you in the loop so you can plan, book, and go—all in one place.',
    image: '/events_test.png',
    accent: 'bg-[#ABE7F4]',
  },
  {
    id: 'community',
    tab: 'Community',
    title: 'Connect with Like-Minded Explorers',
    body: 'Join a community of curious adventurers who love trying new things. Meet others who share your passions, exchange tips, and find inspiration through shared experiences.',
    image: '/community_test_1.png',
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
    body: 'Let AI help you fine-tune prices based on real demand, seasonality, and class popularity — not just raise them. Adjust class sizes or offer special rates to fill slow days, while insights guide you toward the best times and price points to increase bookings and overall revenue.',
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
    body: 'Stay adaptable when plans change. Update class times, adjust capacity, or reschedule experiences in just a few clicks — no hassle, no lost opportunities.',
    image: '/demos/calendar.gif',
    accent: 'bg-[#ABE7F4]',
  },
]
