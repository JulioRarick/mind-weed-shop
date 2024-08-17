import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--fm-inter' })

export const metadata: Metadata = {
  title: {
    template: '%s | MindWeed',
    default: 'MindWeed',
  },
  description: 'Developed by Julio Rarick',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.variable} lang="en">
      <body className="select-none bg-stone-100 text-stone-950 antialiased">
        {children}
      </body>
    </html>
  )
}
