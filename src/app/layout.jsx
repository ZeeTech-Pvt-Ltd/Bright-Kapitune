import { Epilogue, Manrope } from 'next/font/google'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RevealManager from '../components/RevealManager'
import { BRAND, SITE_URL } from '../data/content'
import '../styles/global.css'

// Self-hosted via next/font - same families/weights as the previous
// Google Fonts links, now with automatic preload and zero render blocking.
const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-epilogue',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Bright Kapitune - Official Crypto Trading Platform Australia',
    template: '%s',
  },
  description:
    "Bright Kapitune - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
  keywords: [
    'Bright Kapitune',
    'Bright Kapitune platform',
    'Bright Kapitune Australia',
    'Bright Kapitune review',
    'crypto trading Australia',
    'automated crypto trading',
    'AI trading platform',
    'Bitcoin',
    'Ethereum',
    'Solana',
  ],
  robots: 'index, follow, max-image-preview:large',
  icons: { icon: '/favicon.svg' },
  verification: { google: 'DvVaFfQNLx5cgJoNWjebNPGBKOAqFXP5pk4wy0v4q8k' },
  openGraph: {
    type: 'website',
    siteName: BRAND,
    locale: 'en_AU',
    title: 'Bright Kapitune - Official Crypto Trading Platform Australia',
    description:
      "Bright Kapitune - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bright Kapitune - Official Crypto Trading Platform Australia',
    description:
      "Bright Kapitune - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
    images: [`${SITE_URL}/og-image.png`],
  },
}

export const viewport = {
  themeColor: '#1e2939',
}

// Structured data: Organization + WebSite (same @graph as the old index.html).
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: BRAND,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.svg`,
      email: 'support@bright-kapitune-au.com',
      areaServed: 'AU',
      description:
        "Bright Kapitune - Australia's online trading platform. Trade crypto, forex, equities and more with AI-powered analysis and 24/7 access.",
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: BRAND,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-AU',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${manrope.variable}`}>
      <body>
        {/* Gates the [data-reveal] CSS: runs before first paint, mirroring
            the class the old main.jsx added on boot. Without JS the
            elements simply stay visible. */}
        <Script
          id="reveal-gate"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9DL4E3BQW6" strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-9DL4E3BQW6');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <Header />
        {children}
        <Footer />
        <RevealManager />
      </body>
    </html>
  )
}
