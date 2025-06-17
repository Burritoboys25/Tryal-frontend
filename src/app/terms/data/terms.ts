export interface TermsSection {
  number: number
  title: string
  description: string
  bullets: string[]
}

export const termsUpdatedAt = "June 16, 2025"

export const terms: TermsSection[] = [
  {
    number: 1,
    title: "The Tryal Service",
    description:
      "Tryal is a subscription-based marketplace that allows users to discover, book, and attend unique local classes, experiences, and activities using a credit system. We partner with independent businesses to offer a curated selection of experiences.",
    bullets: [],
  },
  {
    number: 2,
    title: "Eligibility",
    description: "",
    bullets: [
      "You must be at least 16 years old.",
      "Users under 18 may book experiences only if supervised by an adult.",
      "One account per individual is permitted.",
    ],
  },
  {
    number: 3,
    title: "Subscription & Billing",
    description: "",
    bullets: [
      "Subscriptions auto-renew monthly unless canceled.",
      "Users can select from multiple pricing tiers. Each plan provides a set number of credits per billing cycle.",
      "You may top off credits if you run out, subject to your plan's rollover cap.",
      "You may pause your subscription at any time and retain your remaining credits, but excessive or abusive use of this feature may result in restrictions or suspension."
    ],
  },
  {
    number: 4,
    title: "Credit System",
    description: "Credits have no cash value and function solely as a mechanism to access and book experiences on the Tryal platform. They are non-transferrable and expire according to the following:",
    bullets: [
      "Active Subscribers: May roll over unused credits, up to the next plans credit limit.",
      "Plan Downgrade: May roll over credits only up to the new plan's credit limit.",
      "Top-Off Credits: Count toward rollover but are still capped by the active plan's limit.",
      "Subscription Cancellation: All remaining credits are forfeited at the end of the current billing cycle.",
      "Trial Credits: Do not roll over unless explicitly stated as part of a promotion.",
    ],
  },
  {
    number: 5,
    title: "Trials",
    description: "",
    bullets: [
      "Trial users must complete their trial period before subscribing.",
      "The trial will default to the Standard Plan after renewal unless canceled.",
      "Trials require valid payment information and are opt-in for auto-renewal.",
      "Trial credits do not roll over unless a subscription is activated.",
      "Users may top off during a trial but cannot subscribe early.",
    ],
  },
  {
    number: 6,
    title: "Booking, Cancellations, & Refunds",
    description: "",
    bullets: [
      "Classes are booked using credits. Each class has limited availability and may vary in credit cost depending on external pricing and demand.",
      "Users may cancel a booking within a limited timeframe (TBD). Late cancellations or no-shows will result in forfeited credits.",
      "Classes cannot be rescheduled. Users must rebook manually and credit costs may vary.",
      "If a business cancels a class, users will receive a credit refund.",
      "Tryal is not responsible for rescheduling or replacing canceled experiences.",
      "Refunds and credit-backs are discretionary and assessed on a case-by-case basis, such as on class cancellations by a business or verified user dissatisfaction.",
      "Subscriptions are generally non-refundable.",
    ],
  },
  {
    number: 7,
    title: "Marketplace & Liability",
    description: "",
    bullets: [
      "Tryal acts solely as a marketplace connecting users with third-party businesses (“Partners”).",
      "Partners are solely responsible for the safety, quality, and legality of their offerings.",
      "Some activities may involve physical risk. Participants must sign a waiver when required.",
      "Tryal is not liable for injury, loss, or damage that occurs during an experience.",
    ],
  },
  {
    number: 8,
    title: "Reviews & Feedback",
    description: "",
    bullets: [
      "Users may be asked to provide feedback or rate experiences.",
      "Reviews must be honest, non-abusive, and relevant to the booked class.",
    ],
  },
  {
    number: 9,
    title: "Payment",
    description: "",
    bullets: [
      "Payments and payouts are securely processed through Stripe.",
      "Businesses on Tryal are on boarded through Stripe Connect.",
      "Tryal does not store full payment data directly.",
      "Businesses receive direct payouts based on bookings and revenue share agreements.",
    ],
  },
  {
    number: 10,
    title: "Account Suspension & Termination",
    description: "We reserve the right to suspend or terminate accounts that:",
    bullets: [
      "Abuse the pause, refund, and/or credit systems.",
      "Engage in fraudulent, abusive, or harmful behavior.",
      "Violate these Terms.",
    ],
  },
  {
    number: 11,
    title: "Dispute Resolution (Placeholder Arbitration Clause)",
    description: "In the event of a dispute, users agree to first attempt informal resolution by contacting Tryal support. If unresolved, parties agree to binding arbitration under a neutral arbitrator located in Texas, unless otherwise agreed. This clause is subject to change pending legal consultation.",
    bullets: [
    ],
  },
  {
    number: 12,
    title: "Updating These Terms",
    description: "We may change our Service and policies, and we may need to make changes to these Terms so that they accurately reflect our Service and policies. Unless otherwise required by law, we will notify you (for example, through our Service) before we make changes to these Terms and give you an opportunity to review them before they go into effect. Then, if you continue to access or use the Service, you will be bound by the updated Terms. If you do not agree to any updated Terms or wish to terminate your agreement to this contract, you can do so by deleting your account and no longer accessing or using any part of the Tryal Service.",
    bullets: [
    ],
  },
]
