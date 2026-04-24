import sharp from 'sharp';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

// Detect MIME type from filename extension when browser doesn't report one
// (common for HEIC on Windows Chrome/Edge)
function mimeFromName(name = '') {
    const ext = name.split('.').pop().toLowerCase();
    const map = {
        heic: 'image/heic', heif: 'image/heif',
        jpg: 'image/jpeg', jpeg: 'image/jpeg',
        png: 'image/png', webp: 'image/webp',
        avif: 'image/avif', gif: 'image/gif',
        tiff: 'image/tiff', tif: 'image/tiff',
        bmp: 'image/bmp',
    };
    return map[ext] || '';
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');
        const targetFormat = formData.get('targetFormat'); // 'webp', 'png', 'jpeg', 'avif'

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        if (!targetFormat || !['webp', 'png', 'jpeg', 'avif'].includes(targetFormat)) {
            return NextResponse.json(
                { error: 'Invalid target format. Use webp, png, jpeg, or avif.' },
                { status: 400 }
            );
        }

        const effectiveType = file.type || mimeFromName(file.name);
        if (!effectiveType.startsWith('image/')) {
            return NextResponse.json(
                { error: `Unsupported file type: ${file.name}. Please upload an image file (JPG, PNG, WebP, HEIC, AVIF, etc.).` },
                { status: 400 }
            );
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        let convertedBuffer;
        let outputType;

        // Sharp reads HEIC/HEIF natively via libvips — no special handling needed for input.
        // Just pipe through the desired output format.
        if (targetFormat === 'webp') {
            convertedBuffer = await sharp(buffer)
                .webp({ quality: 85, alphaQuality: 90, effort: 6 })
                .toBuffer();
            outputType = 'image/webp';
        } else if (targetFormat === 'png') {
            convertedBuffer = await sharp(buffer)
                .png({ quality: 90, compressionLevel: 9 })
                .toBuffer();
            outputType = 'image/png';
        } else if (targetFormat === 'jpeg') {
            convertedBuffer = await sharp(buffer)
                .jpeg({ quality: 85, mozjpeg: true, progressive: true })
                .toBuffer();
            outputType = 'image/jpeg';
        } else if (targetFormat === 'avif') {
            convertedBuffer = await sharp(buffer)
                .avif({ quality: 60, effort: 4 })
                .toBuffer();
            outputType = 'image/avif';
        }

        return new NextResponse(convertedBuffer, {
            status: 200,
            headers: {
                'Content-Type': outputType,
                'Content-Length': convertedBuffer.length.toString(),
                'X-Original-Size': buffer.length.toString(),
                'X-Converted-Size': convertedBuffer.length.toString(),
            },
        });
    } catch (error) {
        console.error('Conversion error:', error);
        const msg = error.message?.toLowerCase().includes('input buffer contains unsupported image format')
            ? 'Unsupported image format. Please try a different file.'
            : 'Failed to convert image: ' + error.message;
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
