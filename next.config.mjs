/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // NU opri build-ul dacă există erori ESLint
    ignoreDuringBuilds: true,
  },
  typescript: {
    // NU opri build-ul dacă există erori de tip TypeScript
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
