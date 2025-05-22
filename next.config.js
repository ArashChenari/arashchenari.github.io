/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // enables next export
  images: {
    unoptimized: true, // disables image optimization, required for static export
  },
  // If your repo is not at the root domain, add this:
  // basePath: '/your-repo-name', 
  // assetPrefix: '/your-repo-name/',
}

module.exports = nextConfig;
