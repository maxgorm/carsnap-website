/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@material-tailwind/react'],
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Add resolve fallback for client-side dependencies
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
      };
    }

    // Optimize Material Tailwind
    config.resolve.alias = {
      ...config.resolve.alias,
      '@material-tailwind/react': require.resolve('@material-tailwind/react'),
    };

    return config;
  },
  // Ensure proper production optimization
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  poweredByHeader: false
};

module.exports = nextConfig;
