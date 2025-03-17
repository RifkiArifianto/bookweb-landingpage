/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Ini untuk skip linting saat proses build (sementara)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
