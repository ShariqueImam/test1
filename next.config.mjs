/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ensure this is enabled
  },
};

export default nextConfig;
