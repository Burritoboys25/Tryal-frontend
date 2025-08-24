import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Manrope, Rubik } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import NextAuthSessionProvider from '@/shared/contexts/NextAuthSessionProvider'
import UserProvider from '@/shared/contexts/UserProvider'

import 'mapbox-gl/dist/mapbox-gl.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  title: 'Tryal',
  description: 'Sign up to enjoy life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${rubik.variable} `}>
      <body className="w-full">
        <NextAuthSessionProvider>
          <UserProvider>
            <Toaster />
            {children}
          </UserProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
