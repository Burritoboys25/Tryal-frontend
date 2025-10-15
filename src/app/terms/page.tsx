import React from 'react'
import { terms, TermsSection, termsUpdatedAt } from './data/terms'
import Section from '@/shared/components/layout/Section'
import MainFooter from '@/shared/components/layout/MainFooter'

const TermsPage = () => {
  return (
    <>
      <Section id="privacy" background="white" className="overflow-hidden pt-[5rem] pb-[10rem]">
        <div className="pt-[2.75rem] pb-[5rem]">
          <section className="pt-[2.5rem]">
            <h1 className="text-h2 mb-[1rem] text-center">Terms of Use</h1>
            <p className="text-body2 text-chart-3">Last Updated: {termsUpdatedAt}</p>
            <div className="pt-[1.25rem] pb-[2.5rem]">
              <p className="text-h3">Welcome to Tryal!</p>
              <p className="text-body2 pt-[0.875rem]">
                Please read these Terms of Use (“Terms”) carefully before using our platform. These
                Terms govern your access to and use of Tryal&apos;s website, mobile application, and
                related services (collectively, the “Platform”). By accessing or using the Platform,
                you agree to be bound by these Terms.
              </p>
            </div>
          </section>
          {terms.map((section: TermsSection) => (
            <section key={section.number} className="mb-[2.5rem]">
              <h2 className="text-sub1 mb-[1rem]">
                {section.number}. {section.title}
              </h2>
              <p>{section.description}</p>
              <ul className="text-body2 list-inside list-disc space-y-[0.25rem]">
                {section.bullets.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>
      <div className="pt-12">
        <MainFooter />
      </div>
    </>
  )
}

export default TermsPage
