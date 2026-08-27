import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: Removed `output: "export"` — ISR requires a Node.js server runtime.
  // Deploy to Vercel (default mode) to get ISR support.
  // If you need static export, use client-side image fetching instead.
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:  "res.cloudinary.com",
        pathname:  "/**",
      },
    ],
  },
};

export default nextConfig;
