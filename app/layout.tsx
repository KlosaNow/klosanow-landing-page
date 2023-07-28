'use client'
import { Providers } from './providers'
import './globals.css'
import { Footer, Navbar } from '@/components/navigation'
import { Box } from '@chakra-ui/react'


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
          <Box mt={20}> 
          {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
