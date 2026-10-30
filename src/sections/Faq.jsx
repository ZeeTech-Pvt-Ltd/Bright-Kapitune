import Link from 'next/link'
import FaqList from '../components/FaqList'
import { FAQS } from '../data/content'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function Faq() {
  return (
    <section className="section" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <p>Answers to the questions we hear most often.</p>
        </div>

        <FaqList items={FAQS} />

        <div className="faq-more" data-reveal>
          <Link href="/faqs" className="btn btn--outline">
            Visit all FAQs
          </Link>
          <Link href="/contact-us" className="btn btn--lime">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
