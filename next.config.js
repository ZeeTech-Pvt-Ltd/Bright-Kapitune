// Site config: keep URLs free of trailing slashes (same rule as the
// previous vercel.json redirect) and let Next.js handle the rest.
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/(.+)/', destination: '/$1', permanent: true }]
  },
}

export default nextConfig
