// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/website/Navbar'
import Home from './main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Celebrity Insights',
  description: 'Discover in-depth information about celebrities from various fields',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Home />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}