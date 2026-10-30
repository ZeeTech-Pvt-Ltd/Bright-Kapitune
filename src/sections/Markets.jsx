import Icon from '../components/Icon'
import { MARKETS } from '../data/content'

// Numbered hairline rows - one per market, with example-instrument
// chips on the right.
export default function Markets() {
  return (
    <section className="section" id="markets">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Markets</span>
          <h2>One Platform, Four Markets</h2>
          <p>
            Four major markets from one account - trade them manually, or let the AI do the
            legwork.
          </p>
        </div>

        <div className="markets-list" data-reveal-grid>
          {MARKETS.map(({ title, text, icon, examples }, i) => (
            <div className="markets-row" data-reveal key={title}>
              <span className="markets-row__num" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="markets-row__icon" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div className="markets-row__tags">
                {examples.map((example) => (
                  <span key={example}>{example}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
