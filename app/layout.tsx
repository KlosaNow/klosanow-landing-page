import { Providers } from './providers'
import './globals.css'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Klosanow',
  description: 'An online education platform for sub-Saharan Africa'
}
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
          {children}
        </Providers>
      </body>
    </html>
  )
}
