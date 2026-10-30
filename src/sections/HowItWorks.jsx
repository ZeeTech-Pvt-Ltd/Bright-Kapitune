import Icon from '../components/Icon'
import { STEPS } from '../data/content'

// `cta` renders a call-to-action under the steps (homepage links back
// to the registration form at the top of the page).
export default function HowItWorks({ cta }) {
  return (
    <section className="steps-band has-coins" id="how-it-works">
      <img className="coin coin--xrp" src="/assets/img/coins/xrp-l-320.png" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <img className="coin coin--tether-l" src="/assets/img/coins/tether-l-320.png" alt="" loading="lazy" decoding="async" fetchPriority="low" />
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Three steps to your first trade</h2>
          <p>From sign-up to the markets in three simple steps.</p>
        </div>

        <div className="steps-band__grid" data-reveal-grid>
          {STEPS.map(({ title, text, points }, i) => (
            <div className="steps-band__item" data-reveal key={title}>
              <span className="steps-band__num" aria-hidden="true">
                0{i + 1}
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul className="steps-band__points">
                {points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={14} strokeWidth={2.5} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {cta && (
          <div className="steps-band__cta" data-reveal>
            <a href="#register" className="btn btn--lime">
              {cta}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
