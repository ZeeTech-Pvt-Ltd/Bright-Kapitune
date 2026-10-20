'use client'

import useReveal from '../hooks/useReveal'

// Mounted once in the root layout: sets up the IntersectionObserver
// that reveals [data-reveal] elements (the html.js class gate itself
// is added by an inline script in the layout head, before first paint).
export default function RevealManager() {
  useReveal()
  return null
}
