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
  // Track seen filenames (full name) to deduplicate — JSZip silently
  // overwrites earlier entries when two files share the same name.
  const seen = {};
  for (const { blob, filename } of entries) {
    const ext  = filename.includes(".") ? "." + filename.split(".").pop() : "";
    const base = ext ? filename.slice(0, -ext.length) : filename;
    const n    = seen[filename] || 0;
    seen[filename] = n + 1;
    const name = n === 0 ? filename : `${base} (${n})${ext}`;
    zip.file(name, blob);
  }

  // compression: "STORE" — images/videos are already compressed.
  // Do NOT use streamFiles:true with generateAsync/type:blob — it is a
  // Node.js streaming API and silently drops files in browser contexts.
  const out = await zip.generateAsync({ type: "blob", compression: "STORE" });

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
