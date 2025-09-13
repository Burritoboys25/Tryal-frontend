'use client'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqItems } from './faqdata'
import Section from '@/shared/components/layout/Section'
import { useGSAP, gsap, SplitText } from '@/shared/lib/gsap'

const FaqSection = () => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([])
  const scope = useRef<HTMLElement>(null)

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    )
  }

  useGSAP(
    () => {
      const el = scope.current!
      const targets = el.querySelectorAll('[data-anim="split-reveal"]')

      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 65%', toggleActions: 'play none none none' },
      })

      const splits: SplitText[] = []
      const allLines: Element[] = []

      targets.forEach(target => {
        const split = new SplitText(target, { type: 'lines', mask: 'lines' })
        splits.push(split)
        allLines.push(...split.lines) // collect every line into one array
      })

      tl.from(
        allLines,
        {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.08, // small stagger
        },
        0,
      )

      // revert all splits after the whole timeline finishes
      tl.eventCallback('onComplete', () => splits.forEach(s => s.revert()))

      return () => tl.kill()
    },
    { scope: scope },
  )

  return (
    <Section
      background="orange"
      roundedTop
      offsetSection
      className="pt-12 pb-24 md:pt-24 md:pb-32"
      ref={scope}
    >
      <div className="relative grid grid-cols-1 gap-8 rounded-3xl px-0 lg:grid-cols-2">
        <div className="text-center lg:sticky lg:top-[96px] lg:col-span-full lg:text-left">
          <h2
            className="text-2xl leading-tight font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            data-anim="split-reveal"
          >
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
                  <span className="flex-1 leading-relaxed" data-anim="split-reveal">
                    {item.question}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'mt-3 max-h-96 opacity-100 sm:mt-1' : 'max-h-0 opacity-0'
                  } ml-6 text-sm leading-relaxed sm:ml-8 sm:text-base md:ml-10`}
                >
                  <div className="py-1">{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default FaqSection
