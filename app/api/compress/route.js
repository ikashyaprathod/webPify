import sharp from 'sharp';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file');

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json({ error: 'File too large. Maximum size is 10MB.' }, { status: 400 });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const fileType = file.type;
        let compressedBuffer;
        let outputType = fileType;

        if (fileType === 'image/png') {
            compressedBuffer = await sharp(buffer)
                .png({ quality: 80, compressionLevel: 9, palette: true, effort: 10 })
                .toBuffer();
            outputType = 'image/png';
        } else if (fileType === 'image/jpeg' || fileType === 'image/jpg') {
            compressedBuffer = await sharp(buffer)
                .jpeg({ quality: 82, mozjpeg: true, progressive: true, optimiseScans: true })
                .toBuffer();
            outputType = 'image/jpeg';
        } else if (fileType === 'image/webp') {
            compressedBuffer = await sharp(buffer)
                .webp({ quality: 80, alphaQuality: 90, effort: 6 })
                .toBuffer();
            outputType = 'image/webp';
        } else if (fileType === 'image/avif') {
            compressedBuffer = await sharp(buffer)
                .avif({ quality: 60, effort: 6 })
                .toBuffer();
            outputType = 'image/avif';
        } else {
            return NextResponse.json(
                { error: 'Unsupported file type. Use PNG, JPG, WebP, or AVIF.' },
                { status: 400 }
            );
        }

        const originalSize   = buffer.length;
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
                'Content-Type':        outputType,
                'Content-Length':      finalBuffer.length.toString(),
                'X-Original-Size':     originalSize.toString(),
                'X-Compressed-Size':   finalBuffer.length.toString(),
                'X-Reduction':         reduction.toString(),
            },
        });

    } catch (error) {
        console.error('Compression error:', error);
        return NextResponse.json(
            { error: 'Failed to compress image: ' + error.message },
            { status: 500 }
        );
    }
}
