import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/shared/components/layout/Navbar'
import Footer from '@/shared/components/layout/Footer'

export const metadata: Metadata = {
  title: 'XPASS',
  description: 'Sign up to enjoy life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow pt-[72px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
