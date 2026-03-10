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
      {
        // GIF tools also use FFmpeg.wasm
        source: '/gif/:path*',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/compressor',  destination: '/image/compressor', permanent: true  },
      { source: '/video',       destination: '/video/compressor',  permanent: false },
      { source: '/tool',        destination: '/image/converter/webp', permanent: true },
      { source: '/gif',         destination: '/gif/compressor',    permanent: false },
      { source: '/resize',      destination: '/image/resizer',     permanent: false },
      { source: '/svg',         destination: '/svg-optimizer',     permanent: false },
    ];
  },
};

export default nextConfig;
