import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

const repoName = 'me';

process.env.NEXT_PUBLIC_BASE_PATH = isProduction ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;