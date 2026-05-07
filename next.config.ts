import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimized image handling for local images
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Enable gzip compression
  compress: true,
};

export default nextConfig;
