import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/character/1505",
        permanent: false,
      },
      {
        source: "/character",
        destination: "/character/1505",
        permanent: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "enka.network",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.neonteam.dev",
      },
      {
        protocol: "https",
        hostname: "fribbels.github.io",
      },
      {
        protocol: "https",
        hostname: "api.yatta.top",
      },
    ],
  },
};

export default nextConfig;
