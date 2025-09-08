import React from 'react'
import LandingNavbar from '@/shared/components/layout/LandingNavbar'
import MainFooter from '@/shared/components/layout/MainFooter'
import MainHeader from './MainHeader'

type LayoutType = 'landing' | 'partner' | 'explore' | 'default' | 'temp'

type ViewLayoutProps = {
  type?: LayoutType | null
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
}

const ViewLayout = ({ type, children, header, footer }: ViewLayoutProps) => {
  let defaultNavbar: React.ReactNode = null
  let defaultFooter: React.ReactNode = null
  switch (type) {
    case 'landing':
      defaultNavbar = <LandingNavbar />
      defaultFooter = <MainFooter />
      break
    case 'partner':
      defaultNavbar = <LandingNavbar disablePartner={true} />
      defaultFooter = <MainFooter />
      break
    case 'explore':
      defaultNavbar = <MainHeader showSearch={true} />
      defaultFooter = null
      break
    case 'default':
      defaultNavbar = <MainHeader showSearch={false} />
      defaultFooter = <MainFooter />
      break
    case 'temp':
      defaultNavbar = <LandingNavbar />
      defaultFooter = null
    default:
      break
  }

  return (
    <>
      {header ?? defaultNavbar}
      <main className="main-container">
        {children}
        {footer ?? defaultFooter}
      </main>
    </>
  )
}

export default ViewLayout
