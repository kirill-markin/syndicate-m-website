import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ["src"],
  },
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: "./tsconfig.json",
  },
};

export default nextConfig;
