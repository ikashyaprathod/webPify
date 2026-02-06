export const metadata = {
    title: "Image Compressor Online – Reduce Image Size Without Losing Quality",
    description: "Compress PNG, JPEG, and WebP images online while keeping original format and quality.",
};

const cardStyle = {
    padding: "2rem",
    border: "2px solid #e0e0e0",
    borderRadius: "12px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.3s ease",
    display: "block",
};

export default function CompressorHubPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        .compressor-card {
          padding: 2rem;
          border: 2px solid #e0e0e0;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
        }
        .compressor-card:hover {
          border-color: var(--primary);
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .hub-link {
          margin-top: 2rem;
          text-align: center;
          font-size: 0.875rem;
          opacity: 0.7;
        }
        .hub-link a {
          color: var(--primary);
          text-decoration: underline;
        }
      `}} />

            <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 700 }}>Image Compressor</h1>
                    <p style={{ fontSize: "1.125rem", marginBottom: "3rem", opacity: 0.8 }}>
                        Reduce image file size without losing quality. Keep the original format — PNG stays PNG, JPEG stays JPEG.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                        <a href="/image/compressor/png" className="compressor-card">
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🖼️</div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>PNG Compressor</h2>
                            <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Compress PNG without quality loss</p>
                        </a>

                        <a href="/image/compressor/jpeg" className="compressor-card">
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📷</div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>JPEG Compressor</h2>
                            <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Compress JPG images online</p>
                        </a>

                        <a href="/image/compressor/webp" className="compressor-card">
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔄</div>
                            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>WebP Compressor</h2>
                            <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>Reduce WebP file size</p>
                        </a>
                    </div>

                    <div className="hub-link">
                        Need to change format? <a href="/image/converter">Try Image Converter</a>
                    </div>
                </div>
            </div>
        </>
    );
}
