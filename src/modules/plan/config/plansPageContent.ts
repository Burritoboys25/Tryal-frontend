export const plansPageContent = {
  select: {
    title: 'Choose a Plan',
    description: 'Find a plan that best fits your needs.',
    disclaimer:
      'Your subscription will automatically renew at the end of each billing cycle unless canceled prior to the renewal date. You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period. We do not offer refunds for unused credits or partial billing periods. See our terms and conditions for more information.',
  },
  change: {
    title: 'Change Plan',
    description: 'Switch to a different plan that best fits your needs.',
    disclaimer:
      'Your subscription will automatically renew at the end of each billing cycle unless canceled prior to the renewal date. You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of the current billing period. We do not offer refunds for unused credits or partial billing periods. See our terms and conditions for more information.',
  },
} as const

export type PlansPageMode = keyof typeof plansPageContent
