/**
 * utils/image-client.js
 * Client-side image processing — Canvas API + heic2any.
 * No server calls, no file size limits.
 */

// ─── MIME / type helpers ───────────────────────────────────────────────────

export function isHeic(file) {
    const t = (file.type || '').toLowerCase();
    if (['image/heic', 'image/heif', 'image/heic-sequence', 'image/heif-sequence'].includes(t)) return true;
    const ext = file.name.split('.').pop().toLowerCase();
    return ext === 'heic' || ext === 'heif';
}

export function getEffectiveType(file) {
    if (file.type) return file.type;
    const ext = file.name.split('.').pop().toLowerCase();
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

// ─── Folder-aware drop helpers ─────────────────────────────────────────────

async function filesFromEntry(entry) {
    if (entry.isFile) {
        return new Promise(res => entry.file(f => res([f]), () => res([])));
    }
    if (entry.isDirectory) {
        const reader = entry.createReader();
        const all = [];
        while (true) {
            const batch = await new Promise((res, rej) => reader.readEntries(res, rej));
            if (!batch.length) break;
            all.push(...batch);
        }
        const nested = await Promise.all(all.map(filesFromEntry));
        return nested.flat();
    }
    return [];
}

async function allFilesFromDrop(e) {
    const items = Array.from(e.dataTransfer?.items || []);
    if (!items.length) return Array.from(e.dataTransfer?.files || []);
    const results = await Promise.all(
        items.map(item => {
            const entry = item.webkitGetAsEntry?.();
            if (entry) return filesFromEntry(entry);
            const f = item.getAsFile();
            return Promise.resolve(f ? [f] : []);
        })
    );
    return results.flat();
}

/** Get all image files from a drop event — supports folder drops */
export async function getImagesFromDrop(e) {
    const files = await allFilesFromDrop(e);
    return files.filter(f => {
        const t = getEffectiveType(f);
        return t.startsWith('image/') || isHeic(f);
    });
}

/** Get all video files from a drop event — supports folder drops */
export async function getVideosFromDrop(e) {
    const VIDEO_EXT = new Set([
        'mp4', 'm4v', 'mov', 'webm', 'mkv', 'avi', 'flv', 'wmv',
        '3gp', '3g2', 'ogv', 'ts', 'mts', 'm2ts', 'mpg', 'mpeg',
        'rm', 'rmvb', 'asf', 'f4v', 'vob', 'dv', 'divx',
    ]);
    const files = await allFilesFromDrop(e);
    return files.filter(f => {
        if (f.type.startsWith('video/')) return true;
        const ext = f.name.split('.').pop().toLowerCase();
        return VIDEO_EXT.has(ext);
    });
}

// ─── Display URL (handles HEIC → JPEG for img tags) ───────────────────────

export async function createDisplayUrl(file) {
    if (isHeic(file)) {
        try {
            const heic2any = (await import('heic2any')).default;
            const result = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.7 });
            const blob = Array.isArray(result) ? result[0] : result;
            return URL.createObjectURL(blob);
        } catch {
            return null;
        }
    }
    return URL.createObjectURL(file);
}

// ─── Client-side conversion ────────────────────────────────────────────────

/**
 * Convert any image file to a target MIME type using the Canvas API.
 * Supports optional resize. HEIC decoded via heic2any.
 *
 * @param {File} file
 * @param {string} outputMime  e.g. 'image/webp'
 * @param {{ resizeW?: number, resizeH?: number }} options
 * @returns {Promise<Blob>}
 */
export async function convertImage(file, outputMime, options = {}) {
    const { resizeW, resizeH } = options;

    let sourceBlob = file;

    // HEIC: decode to JPEG first, then re-encode to target
    if (isHeic(file)) {
        const heic2any = (await import('heic2any')).default;
        const result = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.95 });
        sourceBlob = Array.isArray(result) ? result[0] : result;
    }

    let bitmap;
    try {
        bitmap = await createImageBitmap(sourceBlob);
    } catch {
        throw new Error(`Cannot decode ${file.name} — unsupported format.`);
    }

    let outW = bitmap.width;
    let outH = bitmap.height;
    if (resizeW || resizeH) {
        const ratio = bitmap.width / bitmap.height;
        if (resizeW && resizeH) { outW = +resizeW; outH = +resizeH; }
        else if (resizeW)        { outW = +resizeW; outH = Math.round(+resizeW / ratio); }
        else                     { outH = +resizeH; outW = Math.round(+resizeH * ratio); }
        outW = Math.max(1, Math.round(outW));
        outH = Math.max(1, Math.round(outH));
    }

    const canvas = document.createElement('canvas');
    canvas.width  = outW;
    canvas.height = outH;
    canvas.getContext('2d').drawImage(bitmap, 0, 0, outW, outH);
    bitmap.close();

    const quality = outputMime === 'image/png' ? undefined : 0.85;

    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            if (blob && blob.size > 0) resolve(blob);
            else reject(new Error(
                `Your browser does not support encoding to ${outputMime}. Try WebP or JPEG instead.`
            ));
        }, outputMime, quality);
    });
}

// ─── Client-side compression ───────────────────────────────────────────────

/**
 * Compress an image client-side.
 * Returns { blob, outputMime }.
 * HEIC → compressed JPEG. TIFF/BMP/GIF → JPEG.
 * If compressed size >= original, returns original blob unchanged.
 *
 * @param {File} file
 * @returns {Promise<{ blob: Blob, outputMime: string }>}
 */
export async function compressImage(file) {
    let sourceBlob = file;
    let outputMime = (file.type || getEffectiveType(file) || 'image/jpeg');

    // HEIC / HEIF → JPEG
    if (isHeic(file)) {
        const heic2any = (await import('heic2any')).default;
        const result = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.85 });
        sourceBlob = Array.isArray(result) ? result[0] : result;
        outputMime = 'image/jpeg';
    }

    // Normalise
    if (outputMime === 'image/jpg') outputMime = 'image/jpeg';

    // Formats Canvas can't encode → JPEG
    if (['image/tiff', 'image/bmp', 'image/gif', 'image/svg+xml'].includes(outputMime)) {
        outputMime = 'image/jpeg';
    }

    // Unknown → JPEG
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/avif'].includes(outputMime)) {
        outputMime = 'image/jpeg';
    }

    let bitmap;
    try {
        bitmap = await createImageBitmap(sourceBlob);
    } catch {
        throw new Error(`Cannot decode ${file.name}.`);
    }

    const canvas = document.createElement('canvas');
    canvas.width  = bitmap.width;
    canvas.height = bitmap.height;
    canvas.getContext('2d').drawImage(bitmap, 0, 0);
    bitmap.close();

    const QUALITY = {
        'image/jpeg': 0.82,
        'image/webp': 0.80,
        'image/avif': 0.75,
        'image/png':  undefined, // PNG: Canvas ignores quality; uses its own compression
    };

    const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(b => {
            if (b && b.size > 0) resolve(b);
            else {
                // AVIF not supported → fall back to WebP
                if (outputMime === 'image/avif') {
                    canvas.toBlob(b2 => {
                        if (b2 && b2.size > 0) resolve(b2);
                        else reject(new Error(`Compression failed for ${file.name}`));
                    }, 'image/webp', 0.80);
                    outputMime = 'image/webp';
                } else {
                    reject(new Error(`Compression failed for ${file.name}`));
                }
            }
        }, outputMime, QUALITY[outputMime]);
    });

    // Size guard: never return something larger
    if (blob.size >= file.size) {
        return { blob: file, outputMime: file.type || outputMime, noChange: true };
    }

    return { blob, outputMime };
}
