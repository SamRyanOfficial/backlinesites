import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Allow local images in /public — Next.js handles these by default.
    // Add remote domains here if you later host images on a CDN:
    // domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
