/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deploy anywhere (Netlify, Cloudflare Pages, Vercel, S3, any host).
  output: "export",
  trailingSlash: true,
  images: {
    // Required for static export; we ship optimized SVG/inline assets so this is safe.
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
