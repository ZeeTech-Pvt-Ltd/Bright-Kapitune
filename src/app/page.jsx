import { pageMeta } from '../lib/seo'
import Hero from '../sections/Hero'
import TrustStrip from '../sections/TrustStrip'
import WhatIs from '../sections/WhatIs'
import HowItWorks from '../sections/HowItWorks'
import Markets from '../sections/Markets'
import KeyFeatures from '../sections/KeyFeatures'
import WhyAustralians from '../sections/WhyAustralians'
import CompareTable from '../sections/CompareTable'
import SafeSection from '../sections/SafeSection'
import ReviewsBand from '../sections/ReviewsBand'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import FinalCta from '../sections/FinalCta'

export const metadata = pageMeta({
  title: 'Bright Kapitune | AI Trading Platform Australia from 347 A$',
  description:
    'Bright Kapitune is a browser-based AI trading platform for Australians. Trade crypto, forex, stocks and commodities with AI market insights. Start from 347 A$.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhatIs />
      <HowItWorks cta="Start Step 1 Now" />
      <Markets />
      <KeyFeatures />
      <WhyAustralians />
      <CompareTable />
      <SafeSection />
      <ReviewsBand />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  )
}
