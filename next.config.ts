import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {hostname: 'recordfree.b-cdn.net', protocol: 'https', port: '', pathname: '/**'},
      {hostname: 'lh3.googleusercontent.com', protocol: 'https', port: '', pathname: '/**'},
    ]
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': '.',
    };
    return config;
  }
};

export default nextConfig;