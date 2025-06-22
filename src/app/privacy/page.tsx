import ViewLayout from '@/shared/components/layout/ViewLayout'
import Container from '@/shared/components/layout/Container'
import React from 'react'
import { policies, PolicySection, policyEffectiveAt } from './data/policy'

const PrivacyPage = () => {
  return (
    <ViewLayout type={'landing'}>
      <Container>
        <div className="space-y-8 md:space-y-12 2xl:space-y-24">
          <section className="pt-10">
            <h1 className="mb-16 text-center">Privacy Policy</h1>
            <p>Effective Date: {policyEffectiveAt}</p>
            <div className="header1 pt-10">
              <p className="pt-10 border-t">
                Tryal, LLC (“Tryal”, “we”, “our”, or “us”) respects your privacy and is committed to
                protecting your personal information. This Privacy Policy explains how we collect,
                use, share, and protect information from users of our platform, including our
                website and mobile application (collectively, the “Platform”).
              </p>
            </div>
          </section>
          {policies.map((section: PolicySection) => (
            <section key={section.number} className="mb-16">
              <h2 className="mb-2 text-xl font-semibold">
                {section.number}. {section.title}
              </h2>
              <p>{section.description}</p>
              {section.bullets.length > 0 && (
                <ul className="list-inside list-disc space-y-1">
                  {section.bullets.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              )}
              {section.sections &&
                section.sections.map(sub => (
                  <div key={sub.number} className="mt-6 ml-4 border-l pl-4">
                    <h3 className="text-lg font-semibold">
                      {sub.number}. {sub.title}
                    </h3>
                    {sub.description && <p>{sub.description}</p>}
                    <ul className="list-inside list-disc space-y-1 pt-2">
                      {sub.bullets.map((value, idx) => (
                        <li key={idx}>{value}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </section>
          ))}
          <p className="pt-10 pb-10 border-t">
            This Privacy Policy is governed by the laws of the State of Texas.
          </p>
        </div>
      </Container>
    </ViewLayout>
  )
}

export default PrivacyPage
