import Icon from '../components/Icon'
import { KEY_FEATURES } from '../data/content'

export default function KeyFeatures() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Platform features</span>
          <h2>Tools That Make Trading Easier</h2>
          <p>
            Everything you need to trade with confidence - from AI market scanning to a dashboard
            that makes sense.
          </p>
        </div>

        <div className="benefits-grid" data-reveal-grid>
          {KEY_FEATURES.map(({ title, text, icon }) => (
            <div className="benefit-card" data-reveal key={title}>
              <div className="benefit-card__icon">
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
