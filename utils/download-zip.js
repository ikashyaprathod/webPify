/**
 * downloadAsZip — reliably package N files into a single ZIP download.
 *
 * Uses STORE (no re-compression) because images and videos are already
 * compressed. DEFLATE on already-compressed data wastes CPU/memory and
 * can cause silent failures for large batches.
 *
 * @param {Array<{blob: Blob|File, filename: string}>} entries
 * @param {string} zipName  — suggested download filename
 * @returns {Promise<number>}  — ZIP size in bytes
 */
export async function downloadAsZip(entries, zipName) {
  if (!entries.length) return 0;

  const { default: JSZip } = await import("jszip");
  const zip = new JSZip();

  // Deduplicate filenames to avoid silently overwriting entries inside JSZip
  const seen = new Map();
  for (const { blob, filename } of entries) {
    const ext  = filename.includes(".") ? filename.slice(filename.lastIndexOf(".")) : "";
    const base = filename.slice(0, filename.length - ext.length);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const dedupedName = count === 0 ? filename : `${base} (${count})${ext}`;
    zip.file(dedupedName, blob, { compression: "STORE" });
  }

  const out = await zip.generateAsync({ type: "blob", streamFiles: true });

  const url = URL.createObjectURL(out);
  const a   = document.createElement("a");
  a.href     = url;
  a.download = zipName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 10_000);

  return out.size;
}
