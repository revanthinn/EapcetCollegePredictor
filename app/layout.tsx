import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TS EAMCET Predictor',
  description: 'TS EAMCET College Predictor - Find your best college matches based on your rank and preferences',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}