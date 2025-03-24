/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensures static export
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: '/magistri-dev', // Replace with your actual repo name
  assetPrefix: '/magistri-dev',
};

export default nextConfig;
