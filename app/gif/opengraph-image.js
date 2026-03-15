import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GIF Compressor – Compress GIF & Convert to MP4/WebM Online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1f0a1e 50%, #1a0f18 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(244,114,182,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎞️</div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginBottom: '14px', letterSpacing: '3px', textTransform: 'uppercase' }}>Webpifyy</div>
        <div style={{ fontSize: '52px', fontWeight: '800', background: 'linear-gradient(90deg, #f472b6 0%, #fb7185 100%)', backgroundClip: 'text', color: 'transparent', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '16px' }}>GIF Compressor</div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>Compress GIF · Convert to MP4/WebM · Video to GIF</div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {['🗜️ Compress GIF', '🎬 GIF to MP4', '🌐 GIF to WebM'].map(t => (
            <div key={t} style={{ background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.35)', borderRadius: '10px', padding: '10px 18px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>{t}</div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '24px', fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>webpifyy.vercel.app/gif</div>
      </div>
    ),
    { ...size }
  );
}
