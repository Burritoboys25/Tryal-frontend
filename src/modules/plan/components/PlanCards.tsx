import { ScrollArea } from '@/shared/components/ui/base/scroll-area'
import { Plan } from '@/shared/types/planTypes'
import CreditIcon from '@/shared/assets/icons/credit.svg'
import React, { useState } from 'react'
import { Button } from '@/shared/components/ui/base/button'

interface PlanCardsProps {
  plans: Plan[]
  currentPlanId?: string
}

const PlanCards = ({ plans, currentPlanId }: PlanCardsProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const middleIndex = Math.floor(plans.length / 2)

  //TODO: Selecting a changed plan card should route to /api/stripe/update in backend

  return (
    <section>
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex flex-row gap-4 pb-2">
          {plans.map((plan, index) => {
            const isCurrent = plan.planId === currentPlanId
            const pricePerCredit = plan.credits > 0 ? plan.price / plan.credits : 0

            return (
              <div key={plan.planId} className="relative flex flex-col">
                {index === middleIndex && (
                  <div className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-md px-2 py-1 text-xs font-semibold text-white">
                    Best Value!
                  </div>
                )}

                <div
                  className={`mb-4 flex h-[22.625rem] w-[15.625rem] flex-col justify-between rounded-xl border-2 bg-white p-5 shadow-md transition-all duration-300 ${
                    selectedId === plan.planId ? 'border-primary' : 'border-transparent'
                  } ${isCurrent ? 'opacity-50' : 'hover:bg-muted/50'}`}
                >
                  <div className="flex flex-col">
                    <h2 className="mb-2 text-xl font-bold">{plan.name}</h2>

                    <div className="text-muted-foreground mb-2 flex items-center gap-2 text-sm">
                      <CreditIcon className="h-5 w-5" />
                      <span>{plan.credits} credits</span>
                    </div>

                    <div className="mb-1 text-lg font-semibold">
                      ${plan.price.toFixed(2)}
                      {plan.planType === 'MONTH' ? '/mo' : plan.planType === 'YEAR' ? '/yr' : ''}
                    </div>

                    <div className="text-muted-foreground mb-3 text-sm">
                      ${pricePerCredit.toFixed(2)} per credit
                    </div>

                    <p className="text-muted-foreground line-clamp-3 text-sm">{plan.description}</p>
                  </div>

                  <Button
                    type="button"
                    className={`mx-auto mt-4 h-[2.5rem] w-[8.3125rem] rounded-full ${!isCurrent ? 'cursor-pointer' : ''}`}
                    disabled={isCurrent}
                    onClick={() => !isCurrent && setSelectedId(plan.planId)}
                  >
                    {isCurrent ? 'Current Plan' : 'Choose Plan'}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </ScrollArea>
    </section>
  )
}

export default PlanCards
