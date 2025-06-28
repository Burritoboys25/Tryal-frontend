export interface PolicySection {
  number: number
  title: string
  description: string
  bullets: string[]
  sections?: PolicySubSection[]
}

export interface PolicySubSection {
  number: number | string
  title: string
  description?: string
  bullets: string[]
}

export const policyEffectiveAt = 'June 16, 2025'

export const policies: PolicySection[] = [
  {
    number: 1,
    title: 'Information We Collect',
    description: '',
    bullets: [],
    sections: [
      {
        number: 1.1,
        title: 'Information You Provide to Us',
        bullets: [
          'Account Information: Name, email address, phone number, password, and age verification.',
          'Billing Information: Payment details, subscription plans, and credit transactions handled securely via Stripe.',
          'Activity Details: Booked classes, cancellations, preferences, and reviews.',
          'Business Partner Data: Business name, contact information, listing content, scheduling, and payout details.',
        ],
      },
      {
        number: 1.2,
        title: 'Information We Collect Automatically',
        bullets: [
          'Device identifiers (e.g., IP address, browser type, operating system).',
          'Usage data (e.g., pages visited, features used, actions taken).',
          'Location information (with your consent).',
        ],
      },
    ],
  },
  {
    number: 2,
    title: 'How We Use Your Information',
    description: '',
    bullets: [
      'To provide and maintain the Platform and services.',
      'To process bookings, payments, and refunds.',
      'To recommend experiences based on preferences and history.',
      'To communicate updates, confirmations, and support.',
      'To conduct research and improve our services.',
      'To comply with legal obligations and enforce our Terms of Service.',
    ],
  },
  {
    number: 3,
    title: 'Sharing Your Information',
    description: 'We do not sell your personal information. We may share your information with:',
    bullets: [
      'Service Providers: Including payment processors (e.g., Stripe), analytics providers, and communication tools.',
      'Business Partners: Limited user information is shared with partner businesses to fulfill bookings and manage experiences.',
      'Legal Obligations: In response to lawful requests or to protect Tryal and our users.',
    ],
  },
  {
    number: 4,
    title: 'Data Security',
    description:
      'We implement industry-standard security measures to protect your information. However, no system is completely secure. You are responsible for maintaining the confidentiality of your login credentials.',
    bullets: [],
  },
  {
    number: 5,
    title: 'Data Retention',
    description:
      'We retain your information for as long as necessary to provide services and fulfill legal obligations, or until you request deletion, subject to regulatory compliance.',
    bullets: [],
  },
  {
    number: 6,
    title: 'Your Rights & Choices',
    description: '',
    bullets: [
      'Access or update your account information.',
      'Request deletion of your data.',
      'Opt-out of marketing communications.',
      'Disable location services via your device settings.',
    ],
  },
  {
    number: 7,
    title: "Children's Privacy",
    description:
      'The Platform is not intended for individuals under 16. Users under 18 may only use the Platform under supervision. We do not knowingly collect personal information from children under 16.',
    bullets: [],
  },
  {
    number: 8,
    title: 'Changes to This Policy',
    description:
      'We may update this Privacy Policy. If changes are material, we will notify you by email or through the Platform. Continued use of our services after changes constitutes acceptance.',
    bullets: [],
  },
  {
    number: 9,
    title: 'Contact Us',
    description: 'For questions or concerns, contact us at: Tryal, LLC.',
    bullets: [],
  },
]
