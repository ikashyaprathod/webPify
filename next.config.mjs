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
      { source: '/compressor', destination: '/image/compressor',    permanent: true },
      { source: '/video',      destination: '/video/compressor',    permanent: true },
      { source: '/tool',       destination: '/image/converter/webp', permanent: true },
      { source: '/gif',        destination: '/gif/compressor',      permanent: true },
      { source: '/resize',     destination: '/image/resizer',       permanent: true },
      { source: '/svg',        destination: '/svg-optimizer',       permanent: true },
    ];
  },
};

export default nextConfig;
