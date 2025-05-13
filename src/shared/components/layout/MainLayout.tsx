import React from 'react'
import Navbar from '@/shared/components/layout/Navbar'
import Footer from '@/shared/components/layout/Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow pt-[72px]">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout