import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Compress Images & Videos Without Quality Loss</h1>
        <p className="home-subtitle">Reduce file size or convert formats using professional-grade compression. Supports PNG, JPEG, WebP, MP4, MOV, and WebM.</p>

        <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", maxWidth: "1100px" }}>
          {/* Image Converter Card */}
          <div className="tool-card-detailed">
            <div className="card-icon">🔄</div>
            <h2 className="tool-card-title">Image Converter</h2>
            <p className="tool-card-description">Convert images between WebP, PNG, and JPEG while preserving clarity and detail.</p>

            <Link href="/image/converter" className="tool-card-button">
              Open Image Converter
            </Link>

            <div className="tool-card-links">
              <Link href="/image/converter/webp">• Convert to WebP</Link>
              <Link href="/image/converter/png">• Convert to PNG</Link>
              <Link href="/image/converter/jpeg">• Convert to JPEG</Link>
            </div>
          </div>

          {/* Image Compressor Card */}
          <div className="tool-card-detailed">
            <div className="card-icon">⚡</div>
            <h2 className="tool-card-title">Image Compressor</h2>
            <p className="tool-card-description">Compress images to smaller file sizes with minimal or no visible quality loss.</p>

            <Link href="/image/compressor" className="tool-card-button">
              Open Image Compressor
            </Link>

            <div className="tool-card-links">
              <Link href="/image/compressor/png">• Compress PNG</Link>
              <Link href="/image/compressor/jpeg">• Compress JPEG</Link>
              <Link href="/image/compressor/webp">• Compress WebP</Link>
            </div>
          </div>

          {/* Video Compressor Card */}
          <div className="tool-card-detailed">
            <div className="card-icon">🎬</div>
            <h2 className="tool-card-title">Video Compressor</h2>
            <p className="tool-card-description">Compress MP4, MOV, and WebM videos in your browser. No uploads — 100% private.</p>

            <Link href="/video/compressor" className="tool-card-button">
              Open Video Compressor
            </Link>

            <div className="tool-card-links">
              <Link href="/video/compressor/mp4">• Compress MP4</Link>
              <Link href="/video/compressor/webm">• Compress WebM</Link>
              <Link href="/video/compressor/mov">• Compress MOV</Link>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem", opacity: 0.7, fontSize: "0.875rem", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/image/compare" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compare Compressor vs Converter</Link>
          <Link href="/compress-video-for-website" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compress Video for Website</Link>
          <Link href="/compress-mp4-online" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compress MP4 Online</Link>
        </div>
      </div>
    </div>
  );
}
