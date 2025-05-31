import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    if (!config.experiments) {
      config.experiments = {};
    }
    config.experiments.topLevelAwait = true;
    /* config options here */
    return config;
  },
};

export default nextConfig;
