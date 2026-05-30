import type { Metadata } from 'next'
import { Inter, DM_Serif_Display } from 'next/font/google'
import Script from 'next/script'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './globals.css'

const GA_ID = 'G-WT9DH9Y1ZB'

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
  metadataBase: new URL('https://www.jigarsoni.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${displayFont.variable}`}>
      <body className="font-sans bg-cream text-ink">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
