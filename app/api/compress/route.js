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

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
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

        // Detect file type
        const fileType = file.type;
        let compressedBuffer;
        let outputType = fileType;

        // Apply format-specific compression
        if (fileType === 'image/png') {
            // PNG compression using pngquant algorithm
            compressedBuffer = await sharp(buffer)
                .png({
                    quality: 80,           // Quality 70-90 (adaptive)
                    compressionLevel: 9,   // Maximum compression
                    palette: true,         // Use pngquant palette optimization
                    effort: 10,            // Maximum effort (slower but better)
                })
                .toBuffer();

            outputType = 'image/png';
        }
        else if (fileType === 'image/jpeg' || fileType === 'image/jpg') {
            // JPEG compression using mozjpeg
            compressedBuffer = await sharp(buffer)
                .jpeg({
                    quality: 82,          // Adaptive quality
                    mozjpeg: true,        // Use mozjpeg encoder
                    progressive: true,    // Progressive JPEG
                    optimiseScans: true,  // Optimize scan scripts
                })
                .toBuffer();

            outputType = 'image/jpeg';
        }
        else if (fileType === 'image/webp') {
            // WebP compression
            compressedBuffer = await sharp(buffer)
                .webp({
                    quality: 80,          // Quality 70-90
                    alphaQuality: 90,     // Preserve transparency quality
                    effort: 6,            // Compression effort (0-6)
                })
                .toBuffer();

            outputType = 'image/webp';
        }
        else {
            return NextResponse.json(
                { error: 'Unsupported file type. Use PNG, JPG, or WebP.' },
                { status: 400 }
            );
        }

        // Smart stopping: if compressed is larger, return original
        const originalSize = buffer.length;
        const compressedSize = compressedBuffer.length;

        let finalBuffer;
        let reduction;

        if (compressedSize >= originalSize) {
            // Return original if compression didn't help
            finalBuffer = buffer;
            reduction = 0;
        } else {
            finalBuffer = compressedBuffer;
            reduction = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
        }

        // Return compressed image with metadata
        return new NextResponse(finalBuffer, {
            status: 200,
            headers: {
                'Content-Type': outputType,
                'Content-Length': finalBuffer.length.toString(),
                'X-Original-Size': originalSize.toString(),
                'X-Compressed-Size': finalBuffer.length.toString(),
                'X-Reduction': reduction.toString(),
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
