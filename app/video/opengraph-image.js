import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Video Compressor – Compress MP4, MOV & WebM Online Free';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0f2e 50%, #150e28 100%)',
        fontFamily: 'system-ui, -apple-system, sans-serif', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-60px', left: '-60px', width: '380px', height: '380px', background: 'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(167,139,250,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />

        <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎬</div>
        <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginBottom: '14px', letterSpacing: '3px', textTransform: 'uppercase' }}>Webpifyy</div>
        <div style={{ fontSize: '52px', fontWeight: '800', background: 'linear-gradient(90deg, #a78bfa 0%, #c4b5fd 100%)', backgroundClip: 'text', color: 'transparent', letterSpacing: '-1.5px', lineHeight: 1, marginBottom: '16px' }}>Video Compressor</div>
        <div style={{ fontSize: '22px', color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>MP4 · MOV · WebM — No Uploads, 100% Private</div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {['🎬 Compress MP4', '📱 Compress MOV', '🌐 Compress WebM'].map(t => (
            <div key={t} style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.35)', borderRadius: '10px', padding: '10px 18px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>{t}</div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '24px', fontSize: '14px', color: 'rgba(255,255,255,0.3)' }}>webpifyy.vercel.app/video</div>
      </div>
    ),
    { ...size }
  );
}
