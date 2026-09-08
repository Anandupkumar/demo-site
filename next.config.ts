import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Plain HTML/CSS/JS in `out/` — deployable to Netlify, GitHub Pages, etc.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
