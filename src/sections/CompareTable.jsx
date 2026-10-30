import { COMPARE_ROWS } from '../data/content'

export default function CompareTable() {
  return (
    <section className="section compare">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">The difference</span>
          <h2>AI-Assisted Trading vs Doing It All Yourself</h2>
        </div>

        <div className="compare-table" data-reveal>
          <div className="compare-table__row compare-table__head" aria-hidden="true">
            <div />
            <div>Manual Trading</div>
            <div className="compare-table__brand">Bright Kapitune</div>
          </div>

          {COMPARE_ROWS.map(({ label, manual, ai }) => (
            <div className="compare-table__row" key={label}>
              <div className="compare-table__label">{label}</div>
              <div>{manual}</div>
              <div className="compare-table__brand">{ai}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
