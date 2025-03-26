import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Load Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Load Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Clearbon - Carbon Trading Made Simple',
  description: 'A minimalist carbon trading platform connecting businesses with sustainable projects to reduce emissions and combat climate change.',
  keywords: 'carbon trading, carbon offset, sustainability, climate change, emissions reduction',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#1A4D2E',
}

// Add a configuration flag for App Router
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 antialiased">
        <Header />
        <main className="flex-grow relative pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
