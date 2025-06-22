import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import React from 'react'
import { terms, TermsSection, termsUpdatedAt } from './data/terms'

const TermsPage = () => {
  return (
    <ViewLayout type={'landing'}>
      <Container>
        <div className="space-y-8 md:space-y-12 2xl:space-y-24">
          <section className="pt-10">
            <h1 className="mb-16 text-center">Terms of Use</h1>
            <p>Last Updated: {termsUpdatedAt}</p>
            <div className="header1 pt-10">
              <p className="text-h1 border-t pt-10">Welcome to Tryal!</p>
              <p className="pt-10">
                Please read these Terms of Use (“Terms”) carefully before using our platform. These
                Terms govern your access to and use of Tryal&apos;s website, mobile application, and
                related services (collectively, the “Platform”). By accessing or using the Platform,
                you agree to be bound by these Terms.
              </p>
            </div>
          </section>
          {terms.map((section: TermsSection) => (
            <section key={section.number} className="mb-16">
              <h2 className="mb-2 text-xl font-semibold">
                {section.number}. {section.title}
              </h2>
              <p>{section.description}</p>
              <ul className="list-inside list-disc space-y-1">
                {section.bullets.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </ViewLayout>
  )
}

export default TermsPage
