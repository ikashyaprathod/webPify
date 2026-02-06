import sharp from 'sharp';
import { NextResponse } from 'next/server';

// Configure API route
export const runtime = 'nodejs';
export const maxDuration = 30; // 30 seconds timeout

export async function POST(request) {
    try {
        // Parse form data
        const formData = await request.formData();
        const file = formData.get('file');
        const targetFormat = formData.get('targetFormat'); // 'webp', 'png', 'jpeg'

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }

        if (!targetFormat || !['webp', 'png', 'jpeg'].includes(targetFormat)) {
            return NextResponse.json(
                { error: 'Invalid target format. Use webp, png, or jpeg.' },
                { status: 400 }
            );
        }

        // Check file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'File too large. Maximum size is 10MB.' },
                { status: 400 }
            );
        }

        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        let convertedBuffer;
        let outputType;

        // Convert to target format
        if (targetFormat === 'webp') {
            convertedBuffer = await sharp(buffer)
                .webp({
                    quality: 85,
                    alphaQuality: 90,
                    effort: 6,
                })
                .toBuffer();
            outputType = 'image/webp';
        }
        else if (targetFormat === 'png') {
            convertedBuffer = await sharp(buffer)
                .png({
                    quality: 90,
                    compressionLevel: 9,
                })
                .toBuffer();
            outputType = 'image/png';
        }
        else if (targetFormat === 'jpeg') {
            convertedBuffer = await sharp(buffer)
                .jpeg({
                    quality: 85,
                    mozjpeg: true,
                    progressive: true,
                })
                .toBuffer();
            outputType = 'image/jpeg';
        }

        // Return converted image
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
        return NextResponse.json(
            { error: 'Failed to convert image: ' + error.message },
            { status: 500 }
        );
    }
}
