import { BRAND, SITE_URL } from '../data/content'

// Builds per-page metadata: the same title/description/canonical strings
// the old useMeta hook set client-side, now served in the initial HTML,
// plus matching OG/Twitter tags.
export function pageMeta({ title, description, path }) {
  const url = `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type: 'website',
      locale: 'en_AU',
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  }
}
