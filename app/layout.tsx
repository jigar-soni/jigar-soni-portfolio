import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const displayFont = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jigar Soni — Performance Marketing & D2C Growth',
    template: '%s — Jigar Soni',
  },
  description:
    'Performance marketer specializing in D2C brand growth. Managing Meta Ads, Google Ads, and growth strategy for apparel, skincare, and lifestyle brands.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${displayFont.variable}`}>
      <body className="font-sans bg-cream text-ink">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
