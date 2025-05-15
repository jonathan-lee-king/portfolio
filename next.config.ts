import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    // Ignore specific modules that use Promise.withResolvers
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      http: false,
      https: false,
      zlib: false,
    };

    return config;
  },
};

export default nextConfig;
