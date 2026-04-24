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

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Use effective type — browsers often report empty type for HEIC on Windows
        const effectiveType = file.type || mimeFromName(file.name);

        let compressedBuffer;
        let outputType;

        if (effectiveType === 'image/png') {
            compressedBuffer = await sharp(buffer)
                .png({ quality: 80, compressionLevel: 9, palette: true, effort: 10 })
                .toBuffer();
            outputType = 'image/png';
        } else if (effectiveType === 'image/jpeg' || effectiveType === 'image/jpg') {
            compressedBuffer = await sharp(buffer)
                .jpeg({ quality: 82, mozjpeg: true, progressive: true, optimiseScans: true })
                .toBuffer();
            outputType = 'image/jpeg';
        } else if (effectiveType === 'image/webp') {
            compressedBuffer = await sharp(buffer)
                .webp({ quality: 80, alphaQuality: 90, effort: 6 })
                .toBuffer();
            outputType = 'image/webp';
        } else if (effectiveType === 'image/avif') {
            compressedBuffer = await sharp(buffer)
                .avif({ quality: 60, effort: 6 })
                .toBuffer();
            outputType = 'image/avif';
        } else if (effectiveType === 'image/heic' || effectiveType === 'image/heif' ||
                   effectiveType === 'image/heic-sequence' || effectiveType === 'image/heif-sequence') {
            // Sharp reads HEIC via libvips; we compress/output as JPEG
            compressedBuffer = await sharp(buffer)
                .jpeg({ quality: 82, mozjpeg: true, progressive: true })
                .toBuffer();
            outputType = 'image/jpeg';
        } else if (effectiveType === 'image/gif') {
            // Pass-through GIF (Sharp doesn't animate); just return original
            compressedBuffer = buffer;
            outputType = 'image/gif';
        } else if (effectiveType === 'image/tiff' || effectiveType === 'image/tif') {
            compressedBuffer = await sharp(buffer)
                .jpeg({ quality: 85, mozjpeg: true })
                .toBuffer();
            outputType = 'image/jpeg';
        } else if (effectiveType === 'image/bmp') {
            compressedBuffer = await sharp(buffer)
                .jpeg({ quality: 85, mozjpeg: true })
                .toBuffer();
            outputType = 'image/jpeg';
        } else {
            // Try to process with Sharp anyway — it supports many formats
            try {
                compressedBuffer = await sharp(buffer)
                    .jpeg({ quality: 82, mozjpeg: true })
                    .toBuffer();
                outputType = 'image/jpeg';
            } catch {
                return NextResponse.json(
                    { error: `Unsupported file type. Supported: JPG, PNG, WebP, AVIF, HEIC, TIFF, BMP.` },
                    { status: 400 }
                );
            }
        }

        const originalSize = buffer.length;
        const compressedSize = compressedBuffer.length;
        let finalBuffer, reduction;

        if (compressedSize >= originalSize) {
            finalBuffer = buffer;
            reduction = 0;
        } else {
            finalBuffer = compressedBuffer;
            reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
        }

        return new NextResponse(finalBuffer, {
            status: 200,
            headers: {
                'Content-Type':      outputType,
                'Content-Length':    finalBuffer.length.toString(),
                'X-Original-Size':   originalSize.toString(),
                'X-Compressed-Size': finalBuffer.length.toString(),
                'X-Reduction':       reduction.toString(),
            },
        });
    } catch (error) {
        console.error('Compression error:', error);
        const msg = error.message?.toLowerCase().includes('input buffer contains unsupported image format')
            ? 'Unsupported image format. Please try a different file.'
            : 'Failed to compress image: ' + error.message;
        return NextResponse.json({ error: msg }, { status: 500 });
    }
}
