import Icon from '../components/Icon'
import { WHY_AUSTRALIANS } from '../data/content'

export default function WhyAustralians() {
  return (
    <section className="section" id="why-australians">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Made for Australia</span>
          <h2>Built Around How Australians Trade</h2>
          <p>
            Most trading tools are made for US or European hours. Bright Kapitune is set up for
            life in Australia.
          </p>
        </div>

        <div className="why-grid" data-reveal-grid>
          {WHY_AUSTRALIANS.map(({ title, text, icon }) => (
            <div className="why-card" data-reveal key={title}>
              <div className="why-card__icon">
                <Icon name={icon} size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <p className="why-close" data-reveal>
          That is why more Australians are choosing Bright Kapitune - an AI trading platform
          Australia can relate to, not one built for somewhere else.
        </p>
      </div>
    </section>
  )
}
