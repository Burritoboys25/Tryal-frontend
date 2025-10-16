import React from 'react'
import { policies, PolicySection, policyEffectiveAt } from './data/policy'
import Section from '@/shared/components/layout/Section'
import MainFooter from '@/shared/components/layout/MainFooter'

const PrivacyPage = () => {
  return (
    <>
      <Section id="privacy" background="white" className="overflow-hidden pt-[5rem] pb-[10rem]">
        <div className="pt-[2.75rem] pb-[5rem]">
          <section className="py-[2.5rem]">
            <h1 className="text-h2 mb-[1rem] text-center">Privacy Policy</h1>
            <p className="text-body2 text-chart-3">Effective Date: {policyEffectiveAt}</p>
            <p className="text-body2 pt-[1.5rem]">
              Tryal, LLC (“Tryal”, “we”, “our”, or “us”) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect,
              use, share, and protect information from users of our platform, including our website
              and mobile application (collectively, the “Platform”).
            </p>
          </section>
          {policies.map((section: PolicySection) => (
            <section key={section.number} className="mb-[2.5rem]">
              <h2 className="text-sub1 mb-[1rem]">
                {section.number}. {section.title}
              </h2>
              <p>{section.description}</p>
              {section.bullets.length > 0 && (
                <ul className="text-body2 list-inside list-disc space-y-[0.25rem]">
                  {section.bullets.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              )}
              {section.sections &&
                section.sections.map(sub => (
                  <div key={sub.number} className="mt-[1.5rem] ml-[1rem] border-l pl-[1rem]">
                    <h3 className="text-sub1">
                      {sub.number}. {sub.title}
                    </h3>
                    {sub.description && <p>{sub.description}</p>}
                    <ul className="text-body2 list-inside list-disc space-y-[0.25rem] pt-[0.5rem]">
                      {sub.bullets.map((value, idx) => (
                        <li key={idx}>{value}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </section>
          ))}
          <p className="py-[2.5rem]">
            This Privacy Policy is governed by the laws of the State of Texas.
          </p>
        </div>
      </Section>
      <div className="pt-12">
        <MainFooter />
      </div>
    </>
  )
}

export default PrivacyPage
