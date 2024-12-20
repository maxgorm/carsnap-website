/** @type {import('next').NextConfig} */

// Force new Vercel deployment
const nextConfig = {
  transpilePackages: ['@material-tailwind/react'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-tailwind/react': require.resolve('@material-tailwind/react'),
    };
    return config;
  }
};

module.exports = nextConfig;
