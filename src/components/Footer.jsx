import Link from 'next/link'
import Logo from './Logo'
import { BRAND, CONTACT_EMAIL } from '../data/content'

// Mirrors the header menu plus the new content pages (Home is covered
// by the logo link)
const PLATFORM_LINKS = [
  { label: 'About Us', to: '/about-us' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Features', to: '/features' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact Us', to: '/contact-us' },
  { label: 'FAQs', to: '/faqs' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms-of-use' },
  { label: 'Risk Disclosure', to: '/risk-disclosure' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p>
              {BRAND} is an online trading platform for Australians - combining a broad range of
              markets with tools designed to make trading accessible to everyone.
            </p>
            <div className="site-footer__contact">
              <span>Contact us:</span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="site-footer__col">
            <h4>Platform</h4>
            <ul>
              {PLATFORM_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link href={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__col">
            <h4>Legal</h4>
            <ul>
              {LEGAL_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link href={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="site-footer__risk">
          Risk Disclosure: Trading crypto, forex, stocks and commodities involves significant risk
          and may not suit every investor. You may lose some or all of your capital. Past
          performance does not guarantee future results. Only trade with money you can afford to
          lose.
        </p>

        <div className="site-footer__bottom">
          <span>© 2026 {BRAND}. All rights reserved.</span>
          <span>Trading carries risk. Invest only what you can afford to lose.</span>
        </div>
      </div>
    </footer>
  )
}
