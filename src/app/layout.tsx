import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Manrope, Rubik } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import NextAuthSessionProvider from '@/shared/components/layout/NextAuthSessionProvider'

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
      <body className="min-h-screen w-full">
        <NextAuthSessionProvider>
          <Toaster />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
