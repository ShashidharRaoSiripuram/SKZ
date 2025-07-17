import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: "export"' if you're using dynamic routes or API routes
  // output: "export", 
  images: {
    domains: ["readdy.ai"],
    unoptimized: true, // Add this if you're having image optimization issues
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors during build
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TypeScript errors during build
  },
};

export default nextConfig;
