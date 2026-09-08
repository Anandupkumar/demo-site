import type { NextConfig } from "next";

// Project Pages URL is https://anandu-dooth.github.io/demo-site/
// Set GITHUB_PAGES=true in CI so assets resolve under /demo-site.
const repoName = "demo-site";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
      }
    : {}),
};

export default nextConfig;
