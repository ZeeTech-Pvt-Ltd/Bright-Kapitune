import Link from 'next/link'
import Icon from '../../components/Icon'
import { pageMeta } from '../../lib/seo'

export const metadata = pageMeta({
  title: 'Thank You for Registering - Bright Kapitune',
  description: 'Thank you for registering with Bright Kapitune. Our team will contact you shortly.',
  path: '/thank-you',
})

export default function ThankYou() {
  return (
    <main className="hero thank-you">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="container thank-you__inner">
        <span className="thank-you__check" aria-hidden="true">
          <Icon name="check" size={40} strokeWidth={2.5} />
        </span>
        <h1>
          Thank <span className="accent">You!</span>
        </h1>
        <p className="hero__sub thank-you__sub">
          Your registration has been received. Our team will contact you shortly to get you
          started.
        </p>
        <Link href="/" className="btn btn--lime">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
