/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/compressor',
        destination: '/image/compressor',
        permanent: true, // 301 redirect
      },
      {
        source: '/tool',
        destination: '/image/converter/webp',
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
