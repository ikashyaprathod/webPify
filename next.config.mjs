/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Required for FFmpeg.wasm SharedArrayBuffer support
        source: '/video/:path*',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/compressor',
        destination: '/image/compressor',
        permanent: true, // 301 redirect
      },
      {
        source: '/video',
        destination: '/video/compressor',
        permanent: false,
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
