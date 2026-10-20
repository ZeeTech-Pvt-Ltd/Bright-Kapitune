import { pageMeta } from '../../lib/seo'
import ReviewsBand from '../../sections/ReviewsBand'
import Testimonials from '../../sections/Testimonials'
import FinalCta from '../../sections/FinalCta'

export const metadata = pageMeta({
  title: 'Bright Kapitune Reviews - Ratings & Testimonials',
  description:
    'Bright Kapitune reviews - verified member feedback, ratings and success stories from traders across Australia.',
  path: '/reviews',
})

export default function Reviews() {
  return (
    <main>
      {/* Hero header, matching the FAQs page pattern */}
      <section className="hero">
        <div className="hero__glow hero__glow--1" aria-hidden="true" />
        <span className="cta-final__ghost" aria-hidden="true">
          RVW
        </span>
        <div className="container hero__inner" data-reveal style={{ paddingBlock: 'clamp(64px, 8vw, 110px)', gridTemplateColumns: '1fr' }}>
          <div style={{ maxWidth: 860 }}>
            <span className="hero__eyebrow">
              <span className="dot" aria-hidden="true" />
              Reviews
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 5.5vw, 68px)' }}>
              Bright Kapitune <span className="accent">Reviews</span>
            </h1>
            <p className="hero__sub">
              Verified feedback from Bright Kapitune members across Australia - real experiences
              with sign-up, deposits, withdrawals and platform support.
            </p>
          </div>
        </div>
      </section>

      {/* Rating summary + member quote */}
      <ReviewsBand />

      {/* Full testimonial carousel */}
      <Testimonials />

      <FinalCta />
    </main>
  )
}
