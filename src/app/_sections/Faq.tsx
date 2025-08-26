'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqItems } from './faqdata'

const FaqSection = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="relative grid grid-cols-1 gap-8 rounded-3xl px-0 lg:grid-cols-2">
      <div className="text-center lg:sticky lg:top-[96px] lg:col-span-full lg:text-left">
        <h2 className="text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Frequently <br className="hidden sm:block" />
          Asked Questions
        </h2>
      </div>

      <div className="space-y-6 sm:space-y-8 md:space-y-8 lg:col-start-2">
        {faqItems.map((item, i) => {
          const isOpen = openQuestions.includes(i)
          return (
            <div key={i} className="border-b border-white/[.2] pb-6 sm:pb-4">
              <button
                onClick={() => toggleQuestion(i)}
                className="flex w-full items-start text-left text-sm font-semibold transition-opacity hover:opacity-80 sm:text-base md:text-lg"
              >
                <div
                  className={`mt-0.5 mr-3 flex-shrink-0 transition-transform duration-300 sm:mt-1 sm:mr-4 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  {isOpen ? (
                    <Minus size={16} className="sm:h-5 sm:w-5" />
                  ) : (
                    <Plus size={16} className="sm:h-5 sm:w-5" />
                  )}
                </div>
                <span className="flex-1 leading-relaxed">{item.question}</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? 'mt-3 max-h-96 opacity-100 sm:mt-1' : 'max-h-0 opacity-0'
                } text-foreground/80 ml-6 text-sm leading-relaxed sm:ml-8 sm:text-base md:ml-10`}
              >
                <div className="py-1">{item.answer}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FaqSection
