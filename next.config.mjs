/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Old short doctor URLs (without /doctors/ prefix) - 301 permanent redirect
      {
        source: '/dr-sandeep-kumar',
        destination: '/doctors/dr-sandeep-kumar',
        permanent: true,
      },
      {
        source: '/dr-ritu-saneja',
        destination: '/doctors/dr-ritu-saneja',
        permanent: true,
      },
      // Common misspellings / old URL patterns
      {
        source: '/doctor/dr-sandeep-kumar',
        destination: '/doctors/dr-sandeep-kumar',
        permanent: true,
      },
      {
        source: '/doctor/dr-ritu-saneja',
        destination: '/doctors/dr-ritu-saneja',
        permanent: true,
      },
      // Old treatment paths if any existed
      {
        source: '/treatment/:slug',
        destination: '/treatments/:slug',
        permanent: true,
      },
      // Trailing slash normalization
      {
        source: '/doctors/dr-sandeep-kumar/',
        destination: '/doctors/dr-sandeep-kumar',
        permanent: true,
      },
      {
        source: '/doctors/dr-ritu-saneja/',
        destination: '/doctors/dr-ritu-saneja',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
