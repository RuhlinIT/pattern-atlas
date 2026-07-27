import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@atlas-patterns/content", "@atlas-patterns/schemas", "@atlas-patterns/ui"]
};

export default nextConfig;
