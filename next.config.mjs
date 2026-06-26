const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: isGithubPages ? 'export' : undefined,
  basePath: isGithubPages ? '/Animation' : '',
  assetPrefix: isGithubPages ? '/Animation/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
