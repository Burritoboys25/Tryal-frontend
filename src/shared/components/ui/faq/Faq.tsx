'use client'
import { useRef, useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqUsers, faqPartners, Faq } from './faqdata'
import Section from '@/shared/components/layout/Section'
import { useGSAP, gsap, SplitText } from '@/shared/lib/gsap'

type FaqSectionProps = {
  audience: 'user' | 'partner'
}

const FaqSection = ({ audience }: FaqSectionProps) => {
  const faqData: Faq[] = audience === 'user' ? faqUsers : faqPartners

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
      background="light-teal"
      id="faq"
      full
      className="mx-4 rounded-[0.9375rem] py-6 md:py-7 xl:py-18"
      ref={scope}
    >
      <div className="relative grid grid-cols-1 gap-[1.88rem] px-4 md:gap-[2.75rem] md:px-8 lg:grid-cols-2 lg:gap-0">
        <div className="text-left md:text-center lg:sticky lg:top-[96px] lg:col-span-full lg:text-left">
          <h2
            className="mx-auto max-w-[18rem] text-[2rem] font-semibold text-[#09272E] lg:mx-0 lg:max-w-[550px] lg:text-[3.5rem] lg:font-extrabold"
            data-anim="split-reveal"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6 md:space-y-4 lg:col-start-2 lg:-translate-y-8 lg:space-y-3">
          {faqData.map((item, i) => {
            const isOpen = openQuestions.includes(i)
            return (
              <div key={i} className="border-b border-black/20 pb-6 md:pb-3">
                <button
                  onClick={() => toggleQuestion(i)}
                  className="flex w-full items-center gap-3 text-left text-[#09272E] transition-opacity hover:cursor-pointer hover:opacity-80 sm:gap-4"
                >
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={24} className="sm:h-5 sm:w-5" />
                    ) : (
                      <Plus size={24} className="sm:h-5 sm:w-5" />
                    )}
                  </div>
                  <span
                    className="flex-1 text-sm md:text-base lg:text-lg xl:text-xl"
                    data-anim="split-reveal"
                  >
                    {item.question}
                  </span>
                </button>

                <div
                  className={`ml-9 overflow-hidden text-xs transition-all duration-300 md:text-sm lg:text-base ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.answer}
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
