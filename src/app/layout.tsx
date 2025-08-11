import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
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
        <ClerkProvider 
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: '#8B5CF6', // Your accent color
              colorBackground: '#0F172A', // Your primary-900
              colorInputBackground: '#1E293B', // Your primary-800
              colorInputText: '#F8FAFC', // Your primary-50
              colorText: '#F8FAFC', // Your primary-50
              colorTextSecondary: '#CBD5E1', // Your primary-300
              colorShimmer: '#334155', // Your primary-700
              colorNeutral: '#CBD5E1', // Additional neutral text color
              borderRadius: '0.5rem',
            },
            elements: {
              formButtonPrimary: {
                backgroundColor: '#8B5CF6',
                '&:hover': {
                  backgroundColor: '#7C3AED',
                },
              },
              card: {
                backgroundColor: '#1E293B',
                border: '1px solid #334155',
              },
              headerTitle: {
                color: '#F8FAFC',
              },
              headerSubtitle: {
                color: '#CBD5E1',
              },
              socialButtonsBlockButton: {
                backgroundColor: '#334155',
                border: '1px solid #475569',
                color: '#F8FAFC',
                '&:hover': {
                  backgroundColor: '#475569',
                },
              },
              dividerLine: {
                backgroundColor: '#334155',
              },
              dividerText: {
                color: '#CBD5E1',
              },
              formFieldLabel: {
                color: '#CBD5E1',
              },
              formFieldInput: {
                backgroundColor: '#334155',
                border: '1px solid #475569',
                color: '#F8FAFC',
                '&:focus': {
                  border: '1px solid #8B5CF6',
                },
              },
              footerActionLink: {
                color: '#8B5CF6',
                '&:hover': {
                  color: '#7C3AED',
                },
              },
              footerActionText: {
                color: '#CBD5E1',
              },
              footer: {
                '& > div': {
                  color: '#CBD5E1',
                },
              },
              alternativeMethodsBlockButton: {
                backgroundColor: '#334155',
                border: '1px solid #475569',
                color: '#F8FAFC',
                '&:hover': {
                  backgroundColor: '#475569',
                },
              },
              // More specific footer targeting
              footerAction: {
                color: '#CBD5E1',
                '& > p': {
                  color: '#CBD5E1 !important',
                },
                '& > div': {
                  color: '#CBD5E1 !important',
                },
              },
              footerPages: {
                color: '#CBD5E1',
              },
              // Catch-all for any remaining text elements
              rootBox: {
                color: '#F8FAFC',
                '& *': {
                  color: '#F8FAFC !important',
                },
                '& a': {
                  color: '#8B5CF6 !important',
                },
                '& p': {
                  color: '#CBD5E1 !important',
                },
                '& span': {
                  color: '#CBD5E1 !important',
                },
              },
            }
          }}
        >
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}