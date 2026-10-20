import Icon from '../components/Icon'
import { DEPOSIT_STEPS } from '../data/content'

export default function Deposits() {
  return (
    <section className="section section--tight" id="deposits">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Funding your account</span>
          <h2>Deposits & withdrawals made simple</h2>
          <p>
            Move money in and out on your terms - with every cost shown before you commit.
          </p>
        </div>

        <div className="about-feature-list" data-reveal-grid>
          {DEPOSIT_STEPS.map(({ title, text, icon }, i) => (
            <div className="about-feature-row" data-reveal key={title}>
              <span className="about-feature-row__num" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="about-feature-row__icon" aria-hidden="true">
                <Icon name={icon} size={22} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
