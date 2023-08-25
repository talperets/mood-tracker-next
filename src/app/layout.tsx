import './globals.css'
import type { Metadata } from 'next'
import {  Reem_Kufi } from 'next/font/google'

const inter = Reem_Kufi({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mood Tracker',
  description: 'Track your Mood',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
