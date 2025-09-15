import Section from '@/shared/components/layout/Section'
import React from 'react'

const Pricing: React.FC = () => {
  return (
    <Section
      id="pricing"
      className="flex min-h-[70dvh] snap-center flex-col justify-center py-16 md:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-4">
        <h2 className="mb-4 text-3xl font-bold">Dynamic Pricing & Scheduling Made Easy</h2>
        <p className="mb-8 text-lg">
          Your business isn’t one-size-fits-all — your pricing and scheduling shouldn’t be either.
          With Tryal, you have the freedom to:
        </p>

        <ul className="mb-10 space-y-4">
          <li>
            <strong>Smart Pricing Adjustments:</strong> Increase prices when demand is high and
            lower them to fill empty slots during off-peak times.
            <br />
            <em>“Think of it as surge-pricing, but tailored for your business.”</em>
          </li>
          <li>
            <strong>Seasonal & Event-Based Pricing:</strong> Adapt pricing for holidays, seasons, or
            local events.
          </li>
          <li>
            <strong>Real-Time Flexibility:</strong> Edit or reschedule experiences instantly.
            <br />
            <em>Example: “Rain in the forecast? Reschedule your outdoor event in a few clicks.”</em>
          </li>
          <li>
            <strong>Class Size Optimization:</strong> Adjust available slots based on demand.
            <br />
            <em>
              Example: Open more seats for a fully booked class or reduce for a premium workshop.
            </em>
          </li>
          <li>
            <strong>
              AI-Driven Recommendations <span className="text-xs">(Future Vision)</span>:
            </strong>{' '}
            Get suggestions for optimal pricing and time slots.
            <br />
            <em>
              “Our system learns which experiences perform best at which times — so you can focus on
              delivering, not spreadsheets.”
            </em>
          </li>
        </ul>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Dynamic Calendar UI */}
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4">
            <div className="mb-2 flex h-32 w-32 items-center justify-center rounded bg-gradient-to-br from-green-300 via-yellow-200 to-red-400">
              <span className="text-sm text-gray-700">[Calendar UI]</span>
            </div>
            <p className="text-center text-sm">
              Color-coded calendar for demand signals. Drag-and-drop to adjust classes or prices.
            </p>
          </div>
          {/* Simple Pricing Graph */}
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4">
            <div className="mb-2 flex h-32 w-32 items-center justify-center rounded bg-gradient-to-br from-blue-200 to-purple-300">
              <span className="text-sm text-gray-700">[Pricing Graph]</span>
            </div>
            <p className="text-center text-sm">
              Bookings vs. price adjustments over time.
              <br />
              <em>“See how flexible pricing helps you fill more seats and increase revenue.”</em>
            </p>
          </div>
          {/* Before/After Comparison */}
          <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4">
            <div className="mb-2 flex h-32 w-32 items-center justify-center rounded bg-gradient-to-br from-gray-300 to-green-200">
              <span className="text-sm text-gray-700">[Before/After]</span>
            </div>
            <p className="text-center text-sm">
              Fixed Pricing (half-empty) vs. Dynamic Pricing (fully booked).
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
