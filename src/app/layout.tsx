import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext'
import { HeroUIProvider } from '@heroui/react'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'CultrCode™ - Precision Audience Intelligence for Creator Brands',
  description: 'Mobile-first audience intelligence platform that helps creators identify and target their ideal customers for successful brand launches.',
  keywords: 'creator economy, audience intelligence, brand launch, segmentation, mobile-first',
  authors: [{ name: 'CultrCode Team' }],
  creator: 'CultrCode',
  publisher: 'CultrCode',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CultrCode',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'CultrCode',
    title: 'CultrCode™ - Precision Audience Intelligence for Creator Brands',
    description: 'Mobile-first audience intelligence platform that helps creators identify and target their ideal customers for successful brand launches.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CultrCode - Market Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CultrCode™ - Precision Audience Intelligence for Creator Brands',
    description: 'Mobile-first audience intelligence platform that helps creators identify and target their ideal customers for successful brand launches.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CultrCode" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon-32x32.svg" />
        <link rel="icon" type="image/svg+xml" sizes="16x16" href="/favicon-16x16.svg" />
        <link rel="preload" href="/images/hero.png" as="image" type="image/png" />
      </head>
      <body className={`${inter.className} antialiased mobile-safe-area custom-scrollbar`}>
        <HeroUIProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </HeroUIProvider>
      </body>
    </html>
  )
}