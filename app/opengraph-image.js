import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Webpifyy – Free Image, Video & GIF Tools Online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow blobs */}
        <div style={{
          position: 'absolute', top: '-80px', left: '-80px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(0,112,243,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', right: '-60px',
          width: '350px', height: '350px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', top: '50%', right: '120px',
          width: '250px', height: '250px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '100px',
          padding: '8px 20px',
          marginBottom: '28px',
          fontSize: '15px',
          color: 'rgba(255,255,255,0.7)',
        }}>
          <span style={{ color: '#60a5fa' }}>●</span>
          Free · Browser-based · 100% Private
        </div>

        {/* Brand */}
        <div style={{
          fontSize: '72px',
          fontWeight: '800',
          background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)',
          backgroundClip: 'text',
          color: 'transparent',
          letterSpacing: '-2px',
          marginBottom: '16px',
          lineHeight: 1,
        }}>
          Webpifyy
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '26px',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '44px',
          letterSpacing: '-0.3px',
        }}>
          Compress, Convert & Optimize — Instantly
        </div>

        {/* Tool badges */}
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { label: '⚡ Image Compressor', color: 'rgba(0,112,243,0.15)', border: 'rgba(0,112,243,0.4)' },
            { label: '🔄 Image Converter',  color: 'rgba(6,182,212,0.15)',  border: 'rgba(6,182,212,0.4)' },
            { label: '📐 Image Resizer',    color: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.4)' },
            { label: '🎬 Video Compressor', color: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.4)' },
            { label: '🎞️ GIF Compressor',   color: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.4)' },
            { label: '✂️ SVG Optimizer',    color: 'rgba(99,102,241,0.15)', border: 'rgba(99,102,241,0.4)' },
          ].map((t) => (
            <div key={t.label} style={{
              background: t.color,
              border: `1px solid ${t.border}`,
              borderRadius: '10px',
              padding: '10px 18px',
              fontSize: '15px',
              color: 'rgba(255,255,255,0.88)',
            }}>
              {t.label}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute', bottom: '28px',
          fontSize: '15px', color: 'rgba(255,255,255,0.35)',
        }}>
          webpifyy.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
