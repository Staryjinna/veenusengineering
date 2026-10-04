/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // /about/ -> out/about/index.html works on any static host (cPanel, Apache, Vercel)
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};
export default nextConfig;
