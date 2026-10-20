import { pageMeta } from '../../lib/seo'
import { FAQ_QUICK_CARDS } from '../../data/content'
import Stats from '../../sections/Stats'
import HowItWorks from '../../sections/HowItWorks'
import Faq from '../../sections/Faq'
import FinalCta from '../../sections/FinalCta'

export const metadata = pageMeta({
  title: 'How It Works - Bright Kapitune',
  description:
    'How Bright Kapitune works - open a free account, deposit funds and start trading crypto, forex and more in three simple steps.',
  path: '/how-it-works',
})

export default function HowItWorksPage() {
  return (
    <main>
      {/* Hero header, matching the FAQs page pattern */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          HIW
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(64px, 8vw, 110px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              How it works
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              How Bright Kapitune <span className="accent">Works</span>
            </h1>
            <p className="hero__sub">
              Getting started with Bright Kapitune is simple. Open a free account, add funds, and
              you can be trading crypto, forex, shares and more in minutes - manually or with
              automated tools.
            </p>

            <div className="faqs-quick" data-reveal>
              {FAQ_QUICK_CARDS.map(({ title, text }) => (
                <div className="faqs-quick__card" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform in numbers */}
      <Stats />

      {/* The three steps */}
      <HowItWorks />

      {/* Getting-started questions */}
      <Faq />

      <FinalCta />
    </main>
  )
}
