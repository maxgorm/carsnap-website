/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Force static site generation
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
