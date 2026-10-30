import Icon from '../components/Icon'
import { TRUST_STRIP } from '../data/content'

// Four reassurance points directly under the hero.
export default function TrustStrip() {
  return (
    <section className="section section--tight trust-strip-section">
      <div className="container">
        <div className="trust-strip" data-reveal>
          {TRUST_STRIP.map(({ title, text, icon }) => (
            <div className="trust-strip__item" key={title}>
              <span className="trust-strip__icon" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
