import { NextResponse } from 'next/server';
import { optimize } from 'svgo';

export const runtime = 'nodejs';

export async function POST(request) {
    try {
        const formData   = await request.formData();
        const file       = formData.get('file');

        if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        if (file.size > 5 * 1024 * 1024) return NextResponse.json({ error: 'SVG too large. Max 5 MB.' }, { status: 400 });

        const text = await file.text();

        if (!text.trim().startsWith('<') && !text.includes('<svg')) {
            return NextResponse.json({ error: 'Not a valid SVG file.' }, { status: 400 });
        }

        const result = optimize(text, {
            multipass: true,
            plugins: [
                'removeDoctype',
                'removeXMLProcInst',
                'removeComments',
                'removeMetadata',
                'removeEditorsNSData',
                'cleanupAttrs',
                'mergeStyles',
                'inlineStyles',
                'minifyStyles',
                'cleanupIds',
                'removeUselessDefs',
                'cleanupNumericValues',
                'convertColors',
                'removeUnknownsAndDefaults',
                'removeNonInheritableGroupAttrs',
                'removeUselessStrokeAndFill',
                'removeViewBox',
                'cleanupEnableBackground',
                'removeHiddenElems',
                'removeEmptyText',
                'convertShapeToPath',
                'moveElemsAttrsToGroup',
                'moveGroupAttrsToElems',
                'collapseGroups',
                'convertPathData',
                'convertEllipseToCircle',
                'convertTransform',
                'removeEmptyAttrs',
                'removeEmptyContainers',
                'mergePaths',
                'removeUnusedNS',
                'sortDefsChildren',
                'removeTitle',
                'removeDesc',
            ],
        });

        const originalSize  = Buffer.byteLength(text,          'utf8');
        const optimizedSize = Buffer.byteLength(result.data,   'utf8');
        const reduction     = originalSize > 0
            ? ((originalSize - optimizedSize) / originalSize * 100).toFixed(1)
            : '0';

        return new NextResponse(result.data, {
            status: 200,
            headers: {
                'Content-Type':      'image/svg+xml',
                'X-Original-Size':   originalSize.toString(),
                'X-Optimized-Size':  optimizedSize.toString(),
                'X-Reduction':       reduction,
            },
        });

    } catch (error) {
        console.error('SVG optimize error:', error);
        return NextResponse.json({ error: 'Failed to optimize SVG: ' + error.message }, { status: 500 });
    }
}
