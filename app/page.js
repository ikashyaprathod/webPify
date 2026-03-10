import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Compress, Convert & Optimize — Images, Videos, GIFs</h1>
        <p className="home-subtitle">Professional-grade tools for images, videos, and GIFs. All free, fast, and privacy-first.</p>

        <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", maxWidth: "1200px" }}>

          {/* Image Converter */}
          <div className="tool-card-detailed">
            <div className="card-icon">🔄</div>
            <h2 className="tool-card-title">Image Converter</h2>
            <p className="tool-card-description">Convert images between WebP, PNG, and JPEG while preserving clarity and detail.</p>
            <Link href="/image/converter" className="tool-card-button">Open Image Converter</Link>
            <div className="tool-card-links">
              <Link href="/image/converter/webp">• Convert to WebP</Link>
              <Link href="/image/converter/png">• Convert to PNG</Link>
              <Link href="/image/converter/jpeg">• Convert to JPEG</Link>
            </div>
          </div>

          {/* Image Compressor */}
          <div className="tool-card-detailed">
            <div className="card-icon">⚡</div>
            <h2 className="tool-card-title">Image Compressor</h2>
            <p className="tool-card-description">Compress PNG, JPEG, WebP, and AVIF with before/after comparison and clipboard paste support.</p>
            <Link href="/image/compressor" className="tool-card-button">Open Image Compressor</Link>
            <div className="tool-card-links">
              <Link href="/image/compressor/png">• Compress PNG</Link>
              <Link href="/image/compressor/jpeg">• Compress JPEG</Link>
              <Link href="/image/compressor/webp">• Compress WebP</Link>
            </div>
          </div>

          {/* Video Compressor */}
          <div className="tool-card-detailed">
            <div className="card-icon">🎬</div>
            <h2 className="tool-card-title">Video Compressor</h2>
            <p className="tool-card-description">Compress MP4, MOV, and WebM videos in your browser. Smart Adaptive Mode. 100% private.</p>
            <Link href="/video/compressor" className="tool-card-button">Open Video Compressor</Link>
            <div className="tool-card-links">
              <Link href="/video/compressor/mp4">• Compress MP4</Link>
              <Link href="/video/compressor/webm">• Compress WebM</Link>
              <Link href="/video/compressor/mov">• Compress MOV</Link>
            </div>
          </div>

          {/* GIF Compressor */}
          <div className="tool-card-detailed">
            <div className="card-icon">🎞️</div>
            <h2 className="tool-card-title">GIF Compressor</h2>
            <p className="tool-card-description">Compress GIFs or convert them to MP4/WebM for up to 90% size reduction. Browser-based.</p>
            <Link href="/gif/compressor" className="tool-card-button">Open GIF Compressor</Link>
            <div className="tool-card-links">
              <Link href="/gif/compressor/gif">• Compress GIF</Link>
              <Link href="/gif/compressor/mp4">• GIF to MP4</Link>
              <Link href="/video/to-gif">• Video to GIF</Link>
            </div>
          </div>

          {/* Image Resizer */}
          <div className="tool-card-detailed">
            <div className="card-icon">📐</div>
            <h2 className="tool-card-title">Image Resizer</h2>
            <p className="tool-card-description">Resize PNG, JPEG, WebP, and AVIF images to any dimension with 4 fit modes. Bulk support.</p>
            <Link href="/image/resizer" className="tool-card-button">Open Image Resizer</Link>
            <div className="tool-card-links">
              <Link href="/image/resizer/png">• Resize PNG</Link>
              <Link href="/image/resizer/jpeg">• Resize JPEG</Link>
              <Link href="/image/resizer/webp">• Resize WebP</Link>
            </div>
          </div>

          {/* SVG Optimizer */}
          <div className="tool-card-detailed">
            <div className="card-icon">✨</div>
            <h2 className="tool-card-title">SVG Optimizer</h2>
            <p className="tool-card-description">Minify and optimize SVG files with SVGO. Remove metadata, merge styles, shrink path data.</p>
            <Link href="/svg-optimizer" className="tool-card-button">Open SVG Optimizer</Link>
            <div className="tool-card-links">
              <Link href="/optimize-svg-online">• Optimize SVG Online</Link>
            </div>
          </div>

        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem", opacity: 0.7, fontSize: "0.875rem", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/image/compare" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compare Tools</Link>
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compress Video for Website</Link>
          <Link href="/gif-to-mp4" style={{ color: "var(--primary)", textDecoration: "underline" }}>GIF to MP4</Link>
          <Link href="/resize-image-online" style={{ color: "var(--primary)", textDecoration: "underline" }}>Resize Image Online</Link>
        </div>
      </div>
    </div>
  );
}
