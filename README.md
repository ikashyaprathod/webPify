# WebPify

**Free, privacy-first image and video optimization tools — 100% in-browser.**

Live at → [webpify.vercel.app](https://webpify.vercel.app)

---

## What is WebPify?

WebPify is a collection of high-performance media optimization tools built for speed and privacy. No file uploads, no accounts, no server-side processing — everything runs directly in your browser using WebAssembly.

### Core Tools

| Tool | Description |
|------|-------------|
| **Image Converter** | Convert PNG, JPEG, or WebP images to any other format |
| **Image Compressor** | Compress PNG, JPEG, and WebP with quality control |
| **Video Compressor** | Smart adaptive MP4/WebM compression via FFmpeg.wasm |

---

## Video Compressor — Smart Adaptive Mode

The video compressor uses an intelligent per-video analysis pipeline before encoding:

### How it works

1. **Analyze** — reads resolution, duration, and estimates bitrate from file metadata
2. **Target** — sets an optimal target bitrate based on the video's original bitrate:
   - `> 3 Mbps` → compress to 55% of original
   - `1.5–3 Mbps` → compress to 65% of original
   - `< 1.5 Mbps` → compress to 85% of original
3. **Encode** — chooses the best encoding path:
   - **Two-pass H.264** for MP4 files > 20 MB (better quality/size ratio)
   - **Single-pass ABR** for smaller files or WebM
   - **CRF fallback** when bitrate reduction would be < 10%
4. **Guard** — if the compressed output is larger than the original, the original is returned with an "Already optimized" status

### Worker Pool Architecture

- Auto-detects CPU cores → spawns `min(3, floor(cores / 2))` parallel Web Workers
- Each worker runs its own FFmpeg.wasm instance
- WASM blob URLs cached — no re-download between files
- FFmpeg instance terminated after each file (memory safety)
- Worker crash recovery: auto-restart + retry once

### Compression Options

**Speed presets**
- Ultra Fast — fastest encode, good for quick previews
- Balanced — recommended for most use cases
- Max Compression — slowest, smallest output

**Quality presets**
- High — lower compression, best visual quality
- Balanced — optimal tradeoff
- Maximum — highest compression

**Aggressive Mode** — CRF+7, auto 720p downscale, 64 kbps audio, strip metadata, 30 fps cap

**Output formats** — MP4 (H.264 + AAC) or WebM (VP9 + Opus)

**Bulk processing** — up to 20 files at once with per-file progress, overall batch progress, and Download All as ZIP

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Image processing | Sharp (server-side API route) |
| Video processing | FFmpeg.wasm (`@ffmpeg/ffmpeg@0.12.15`, `@ffmpeg/core@0.12.6`) |
| Parallel processing | Web Workers (Webpack 5 bundled) |
| ZIP download | jszip |
| Deployment | Vercel |

---

## Route Structure

```
/                                              → Homepage
/image/converter                               → Image converter hub
/image/converter/webp|png|jpeg                 → Format-specific converters
/image/compressor                              → Image compressor hub
/image/compressor/webp|png|jpeg                → Format-specific compressors
/video/compressor                              → Video compressor hub
/video/compressor/mp4|webm|mov                 → Format-specific pages
/compress-mp4-online                           → Programmatic SEO page
/reduce-mp4-file-size                          → Programmatic SEO page
/compress-video-for-website                    → Programmatic SEO page
/compress-video-for-seo                        → Programmatic SEO page
/shrink-video-without-losing-quality           → Programmatic SEO page
/reduce-video-file-size-without-losing-quality → Programmatic SEO page
/blog/...                                      → Blog articles
```

**Redirects**
- `/compressor` → `/image/compressor`
- `/video` → `/video/compressor`
- `/tool` → `/image/converter/webp`

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Start on a specific port
npm run dev -- --port 4000

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) (or your specified port).

---

## Key Architecture Notes

### Privacy — no uploads
All image conversion/compression goes through a local Sharp API route (`/api/compress`). All video processing runs entirely in the browser via FFmpeg.wasm. No file ever leaves your device.

### COEP/COOP headers
SharedArrayBuffer support for FFmpeg.wasm is enabled only for `/video/*` routes in `next.config.mjs`. Single-threaded WASM mode is used everywhere else — no special headers needed on programmatic SEO pages.

### Internal linking
`utils/topical-graph.js` defines the full site authority graph. `components/RelatedTools.js` uses it to render related tool links on every page. Keep the graph in sync when adding new routes.

### SEO
Each page exports `metadata` and includes inline JSON-LD (BreadcrumbList + SoftwareApplication + FAQPage). The sitemap is manually maintained in `app/sitemap.js`.

---

## Project Structure

```
app/
  page.js                  → Homepage
  layout.js                → Root layout, fonts, analytics
  globals.css              → All shared CSS (.vc-* for VideoCompressor)
  sitemap.js               → XML sitemap
  blog/                    → Blog articles
  image/                   → Image tool pages
  video/                   → Video tool pages
  compress-mp4-online/     → Programmatic SEO
  ...
components/
  VideoCompressor.js       → FFmpeg.wasm video compressor (client-side)
  ImageCompressor.js       → Sharp image compressor
  RelatedTools.js          → Internal linking component
  Breadcrumb.js            → Breadcrumb nav
workers/
  videoWorker.js           → Web Worker: FFmpeg.wasm encode logic
utils/
  topical-graph.js         → Site authority graph for internal linking
```

---

## License

MIT
