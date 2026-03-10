import sharp from 'sharp';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file   = formData.get('file');
        const width  = parseInt(formData.get('width')  || '0', 10) || null;
        const height = parseInt(formData.get('height') || '0', 10) || null;
        const fit    = formData.get('fit') || 'inside'; // inside | cover | contain | fill

        if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        if (!width && !height) return NextResponse.json({ error: 'Provide at least width or height' }, { status: 400 });
        if (file.size > 20 * 1024 * 1024) return NextResponse.json({ error: 'File too large. Max 20 MB.' }, { status: 400 });

        const supported = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/avif'];
        if (!supported.includes(file.type)) {
            return NextResponse.json({ error: 'Unsupported format. Use PNG, JPEG, WebP, or AVIF.' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer      = Buffer.from(arrayBuffer);

        let image = sharp(buffer).resize({ width, height, fit, withoutEnlargement: true });

        // Re-encode in same format
        if      (file.type === 'image/png')                      image = image.png({ compressionLevel: 6 });
        else if (file.type === 'image/jpeg' || file.type === 'image/jpg') image = image.jpeg({ quality: 90, mozjpeg: true });
        else if (file.type === 'image/webp')                     image = image.webp({ quality: 90 });
        else if (file.type === 'image/avif')                     image = image.avif({ quality: 75 });

        const outBuffer = await image.toBuffer();
        const meta      = await sharp(outBuffer).metadata();

        return new NextResponse(outBuffer, {
            status: 200,
            headers: {
                'Content-Type':       file.type,
                'Content-Length':     outBuffer.length.toString(),
                'X-Original-Size':    buffer.length.toString(),
                'X-Resized-Size':     outBuffer.length.toString(),
                'X-Output-Width':     String(meta.width  || ''),
                'X-Output-Height':    String(meta.height || ''),
            },
        });

    } catch (error) {
        console.error('Resize error:', error);
        return NextResponse.json({ error: 'Failed to resize: ' + error.message }, { status: 500 });
    }
}
