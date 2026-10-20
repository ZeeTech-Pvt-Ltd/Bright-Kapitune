import { pageMeta } from '../../lib/seo'
import About from '../../sections/About'
import Benefits from '../../sections/Benefits'
import Security from '../../sections/Security'
import FinalCta from '../../sections/FinalCta'

export const metadata = pageMeta({
  title: 'Bright Kapitune Features - Tools Built for Australian Traders',
  description:
    'Bright Kapitune features - AI-powered market analysis, fast order execution, bank-grade security and a dashboard designed for everyday traders.',
  path: '/features',
})

export default function Features() {
  return (
    <main>
      {/* Hero header, matching the FAQs page pattern */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          FTR
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(64px, 8vw, 110px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Features
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              Bright Kapitune <span className="accent">Features</span>
            </h1>
            <p className="hero__sub">
              From AI-powered market analysis to bank-grade security, Bright Kapitune brings
              together the tools Australian traders need - all in one clean, easy-to-use platform.
            </p>
          </div>
        </div>
      </section>

      {/* Core platform features */}
      <About />

      {/* Why traders choose us */}
      <Benefits />

      {/* Security features */}
      <Security />

      <FinalCta />
    </main>
  )
}
