import type { Metadata } from 'next'
import { Providers } from './providers'


export const metadata: Metadata = {
  title: 'Klosanow',
  description: 'At Klosanow, we make the teaching and learning process a seamless one for people irrespective of their geographical locations. Our goal is to create an effective, efficient and seamless online teaching and learning platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <h1>header</h1>
          {children}
        </Providers>
      </body>
    </html>
  )
}
