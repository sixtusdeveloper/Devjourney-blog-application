import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        // This is the pattern to match the domain of the image URL
        protocol: "https",
        hostname: '*', // This is the domain of the image URL
      },
    ],
  },
};

export default nextConfig;
