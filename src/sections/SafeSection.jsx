import Link from 'next/link'
import Icon from '../components/Icon'
import { SAFE_POINTS } from '../data/content'

export default function SafeSection() {
  return (
    <section className="section" id="security">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Safety first</span>
          <h2>Is Bright Kapitune Safe to Use?</h2>
          <p>We know trust matters before you sign up. Here is how we protect you:</p>
        </div>

        <div className="why-grid" data-reveal-grid>
          {SAFE_POINTS.map(({ title, text, icon }) => (
            <div className="why-card" data-reveal key={title}>
              <div className="why-card__icon">
                <Icon name={icon} size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="safe-note" data-reveal>
          <p>
            Bright Kapitune is a genuine AI trading platform in Australia that puts honesty first.
            Trading always carries risk, and we will never promise guaranteed profits. Our{' '}
            <Link href="/terms-of-use">terms of use</Link>,{' '}
            <Link href="/privacy-policy">privacy policy</Link> and{' '}
            <Link href="/risk-disclosure">risk disclosure</Link> are easy to find.
          </p>
          <a href="#register" className="btn btn--lime">
            Open My Free Account
          </a>
        </div>
      </div>
    </section>
  )
}
