'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Icon from '../components/Icon'

// Closing soft-blue (#DBEAFE) band with a solid blue action button,
// visually distinct from the slate footer below. The button sends users
// to the registration form at the top of the home page (scrolling
// smoothly when we are already there).
export default function FinalCta() {
  const pathname = usePathname()
  const router = useRouter()

  const handleCta = (e) => {
    e.preventDefault()
    if (pathname === '/') {
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/')
      setTimeout(() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }

  return (
    <section className="cta-final-band" id="register-final">
      <div className="container cta-final-band__inner" data-reveal>
        <h2>
          Ready to try a smarter <span className="accent">AI trading platform in Australia?</span>
        </h2>
        <p>
          Join Bright Kapitune today. Sign up for free, start from 347 A$, and let the AI do the
          heavy market research for you.
        </p>

        <div className="cta-final-band__actions">
          <a href="/#register" onClick={handleCta} className="btn btn--blue">
            Create My Free Account
          </a>
          <Link href="/contact-us" className="cta-final-band__link">
            Talk to our team
          </Link>
        </div>

        <p className="cta-final-band__trust">
          <Icon name="check" size={14} strokeWidth={2.5} />
          Free sign-up · Takes under 2 minutes · Secure registration
        </p>
      </div>
    </section>
  )
}
