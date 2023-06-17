/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false,
      },
    ]
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
