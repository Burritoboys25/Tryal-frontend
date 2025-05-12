import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
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
    <html lang="en" className={manrope.variable}>
      <body className="min-h-screen">
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <main className="flex-grow pt-[72px]">{children}</main>
        </div>
      </body>
    </html>
  )
}
