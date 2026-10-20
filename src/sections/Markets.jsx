import Icon from '../components/Icon'
import { MARKETS } from '../data/content'

export default function Markets() {
  return (
    <section className="section" id="markets">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Markets</span>
          <h2>What you can trade</h2>
          <p>
            One account, a broad range of markets - trade them manually, or let the analysis
            engine do the legwork.
          </p>
        </div>

        <div className="benefits-grid" data-reveal-grid>
          {MARKETS.map(({ title, text, icon }) => (
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
