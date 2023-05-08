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
}

module.exports = nextConfig
