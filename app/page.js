import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Compress and Convert Images Without Quality Loss</h1>
        <p className="home-subtitle">Reduce image file size or convert formats using professional-grade compression. Supports PNG, JPEG, and WebP.</p>

        <div className="tools-grid">
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
        </div>

        <div style={{ textAlign: "center", marginTop: "2rem", opacity: 0.7, fontSize: "0.875rem" }}>
          Not sure which tool to use? <Link href="/image/compare" style={{ color: "var(--primary)", textDecoration: "underline" }}>Compare Compressor vs Converter</Link>
        </div>
      </div>
    </div>
  );
}
