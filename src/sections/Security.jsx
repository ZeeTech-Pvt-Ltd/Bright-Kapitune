import Icon from '../components/Icon'
import { SECURITY_FEATURES } from '../data/content'

export default function Security() {
  return (
    <section className="section" id="security">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Security first</span>
          <h2>Security built into everything we do</h2>
          <p>
            Your account and your capital are protected by multiple independent safeguards, day
            and night.
          </p>
        </div>

        <div className="security-grid" data-reveal-grid>
          {SECURITY_FEATURES.map(({ title, text, icon }) => (
            <div className="security-card" data-reveal key={title}>
              <div className="security-card__icon">
                <Icon name={icon} size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
