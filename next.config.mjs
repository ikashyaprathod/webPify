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
      {
        // Audio tools use FFmpeg.wasm
        source: '/audio/:path*',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // ── Legacy short redirects ─────────────────────────────────────────
      { source: '/compressor', destination: '/image/compress',          permanent: true },
      { source: '/resize',     destination: '/image/resize',            permanent: true },
      { source: '/tool',       destination: '/image/convert/to-webp',   permanent: true },

      // ── Phase 3A: URL restructure 301 redirects ────────────────────────
      // Image compress
      { source: '/image/compressor',          destination: '/image/compress',                   permanent: true },
      { source: '/image/compressor/png',      destination: '/image/compress/png',               permanent: true },
      { source: '/image/compressor/jpeg',     destination: '/image/compress/jpeg',              permanent: true },
      { source: '/image/compressor/webp',     destination: '/image/compress/webp',              permanent: true },
      // Image convert
      { source: '/image/converter',           destination: '/image/convert',                    permanent: true },
      { source: '/image/converter/webp',      destination: '/image/convert/to-webp',            permanent: true },
      { source: '/image/converter/png',       destination: '/image/convert/to-png',             permanent: true },
      { source: '/image/converter/jpeg',      destination: '/image/convert/to-jpeg',            permanent: true },
      { source: '/image/heic-to-jpg',         destination: '/image/convert/heic-to-jpg',        permanent: true },
      { source: '/image/to-pdf',              destination: '/image/convert/image-to-pdf',       permanent: true },
      // Image resize
      { source: '/image/resizer',             destination: '/image/resize',                     permanent: true },
      { source: '/image/resizer/png',         destination: '/image/resize/png',                 permanent: true },
      { source: '/image/resizer/jpeg',        destination: '/image/resize/jpeg',                permanent: true },
      { source: '/image/resizer/webp',        destination: '/image/resize/webp',                permanent: true },
      // Image edit
      { source: '/image/compare',             destination: '/image/edit/compare',               permanent: true },
      { source: '/image/crop',                destination: '/image/edit/crop',                  permanent: true },
      { source: '/image/rotate',              destination: '/image/edit/rotate',                permanent: true },
      { source: '/image/watermark',           destination: '/image/edit/watermark',             permanent: true },
      { source: '/image/remove-background',   destination: '/image/edit/remove-background',     permanent: true },
      // PDF
      { source: '/pdf-to-jpg',                destination: '/pdf/pdf-to-jpg',                   permanent: true },
      // Video
      { source: '/video/compressor',          destination: '/video/compress',                   permanent: true },
      { source: '/video/compressor/mp4',      destination: '/video/compress/mp4',               permanent: true },
      { source: '/video/compressor/webm',     destination: '/video/compress/webm',              permanent: true },
      { source: '/video/compressor/mov',      destination: '/video/compress/mov',               permanent: true },
      { source: '/video/to-gif',              destination: '/video/convert/video-to-gif',       permanent: true },
      // GIF
      { source: '/gif/compressor',            destination: '/gif/compress',                     permanent: true },
      { source: '/gif/compressor/gif',        destination: '/gif/compress/gif',                 permanent: true },
      { source: '/gif/compressor/mp4',        destination: '/gif/convert/gif-to-mp4',           permanent: true },
      { source: '/gif/compressor/webm',       destination: '/gif/convert/gif-to-webm',          permanent: true },
      // SVG
      { source: '/svg-optimizer',             destination: '/svg/optimize',                     permanent: true },
    ];
  },
};

export default nextConfig;
