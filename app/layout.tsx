'use client'
import { Providers } from './providers'
import './globals.css'
import { Footer, Navbar } from '@/components/navigation'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
