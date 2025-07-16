import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["readdy.ai"], // ✅ allow remote image domains
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
