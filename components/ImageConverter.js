"use client";

import { useRef, useState, useEffect } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";
import { convertImage, getEffectiveType, isHeic, createDisplayUrl, getImagesFromDrop } from "../utils/image-client";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { downloadAsZip } from "../utils/download-zip";

const IDB_STORE = 'recent_converter';

function blobToDataUrl(blob) {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
}

function dataUrlToFile(dataUrl, fileName, type) {
    const arr = dataUrl.split(','), bstr = atob(arr[1]);
    let n = bstr.length; const u8 = new Uint8Array(n);
    while (n--) u8[n] = bstr.charCodeAt(n);
    return new File([u8], fileName, { type });
}

export default function ImageConverter({
    outputFormat     = 'image/webp',
    outputFormatName = "WebP",
    title            = "",
    description      = "",
}) {
    const [files,          setFiles]         = useState([]);
    const [processing,     setProcessing]    = useState(false);
    const [selectedIds,    setSelectedIds]   = useState(new Set());
    const [errorMessage,   setErrorMessage]  = useState("");
    const [recentFiles,    setRecentFiles]   = useState([]);
    const [compareId,      setCompareId]     = useState(null);
    const [zipGenerating,  setZipGenerating] = useState(false);

    // Resize options
    const [enableResize, setEnableResize] = useState(false);
    const [resizeW,      setResizeW]      = useState("");
    const [resizeH,      setResizeH]      = useState("");

    const fileInputRef   = useRef(null);
    const folderInputRef = useRef(null);

    const getTargetFormat = (fmt) => {
        if (fmt === 'image/webp')  return 'webp';
        if (fmt === 'image/png')   return 'png';
        if (fmt === 'image/jpeg')  return 'jpeg';
        return 'webp';
    };

    // ── Persist / restore recent files ──────────────────────────────────────
    useEffect(() => {
        loadRecent(IDB_STORE).then(items => {
            if (!items.length) return;
            setRecentFiles(items.map(item => ({
                id:            item.id,
                originalFile:  { name: item.originalName },
                convertedFile: dataUrlToFile(item.preview, item.fileName, item.fileType),
                originalSize:  item.originalSize,
                convertedSize: item.convertedSize,
                preview:       item.preview,
                status:        "complete",
                statusMessage: item.statusMessage,
            })));
        });
    }, []);

    useEffect(() => {
        if (!recentFiles.length) return;
        saveRecent(IDB_STORE, recentFiles.map(f => ({
            id:           f.id,
            originalName: f.originalFile.name,
            fileName:     f.convertedFile?.name || f.originalFile.name,
            originalSize: f.originalSize,
            convertedSize:f.convertedSize,
            fileType:     f.convertedFile?.type || outputFormat,
            statusMessage:f.statusMessage,
            preview:      f.preview,
        })));
    }, [recentFiles]);

    // ── Core conversion (fully client-side) ─────────────────────────────────
    const doConvert = async (file, updateProgress) => {
        updateProgress("converting", `Converting to ${outputFormatName}…`);

        const options = enableResize
            ? { resizeW: resizeW ? +resizeW : undefined, resizeH: resizeH ? +resizeH : undefined }
            : {};

        const blob        = await convertImage(file, outputFormat, options);
        const extension   = getTargetFormat(outputFormat);
        const baseName    = file.name.replace(/\.[^/.]+$/, "");
        const newFileName = `${baseName}.${extension}`;
        const preview     = await blobToDataUrl(blob);
        const convertedFile = new File([blob], newFileName, { type: outputFormat, lastModified: Date.now() });

        // Get a displayable URL for the original (needed for HEIC before/after)
        const originalDisplayUrl = await createDisplayUrl(file);

        return {
            id:            Math.random().toString(36).substr(2, 9),
            originalFile:  file,
            originalUrl:   originalDisplayUrl,
            convertedFile,
            originalSize:  file.size,
            convertedSize: blob.size,
            preview,
            status:        "complete",
            statusMessage: `Converted to ${outputFormatName}`,
        };
    };

    // ── Process a batch of files ─────────────────────────────────────────────
    const processFiles = async (fileList) => {
        setProcessing(true);
        setErrorMessage("");

        const validFiles = Array.from(fileList).filter(file => {
            const t = getEffectiveType(file);
            const ok = t.startsWith('image/') || isHeic(file);
            if (!ok) setErrorMessage(
                `Unsupported file: ${file.name}. Please upload an image (JPG, PNG, WebP, HEIC, AVIF, etc.).`
            );
            return ok;
        });

        if (!validFiles.length) { setProcessing(false); return; }

        const placeholders = validFiles.map(file => ({
            id:            Math.random().toString(36).substr(2, 9),
            originalFile:  file,
            status:        "pending",
            statusMessage: "Waiting…",
        }));
        setFiles(prev => [...prev, ...placeholders]);

        for (let i = 0; i < validFiles.length; i++) {
            const file   = validFiles[i];
            const tempId = placeholders[i].id;
            const updateProgress = (status, message) =>
                setFiles(prev => prev.map(f => f.id === tempId ? { ...f, status, statusMessage: message } : f));

            if (validFiles.length > 1)
                updateProgress("processing", `Processing ${i + 1} of ${validFiles.length}…`);

            try {
                const result = await doConvert(file, updateProgress);
                setFiles(prev => prev.map(f => f.id === tempId ? result : f));
                setSelectedIds(prev => new Set([...prev, result.id]));
                setRecentFiles(prev => [result, ...prev].slice(0, 20));
            } catch (err) {
                const msg = err.message?.includes('not support')
                    ? `${outputFormatName} encoding not supported in your browser. Try WebP or JPEG.`
                    : err.message || `Failed to convert ${file.name}`;
                setErrorMessage(msg);
                setFiles(prev => prev.filter(f => f.id !== tempId));
            }
        }
        setProcessing(false);
    };

    // ── Event handlers ───────────────────────────────────────────────────────
    const handleFileSelect  = e => { if (e.target.files?.length) processFiles(e.target.files); };
    const handleFolderSelect= e => { if (e.target.files?.length) processFiles(e.target.files); };
    const handleDrop = async e => {
        e.preventDefault();
        const imgs = await getImagesFromDrop(e);
        if (imgs.length) processFiles(imgs);
    };
    const handleDragOver    = e => e.preventDefault();
    const handleClick       = () => { if (!processing) fileInputRef.current?.click(); };

    const handleDownload = file => {
        const a    = document.createElement("a");
        a.href     = file.convertedFile ? URL.createObjectURL(file.convertedFile) : file.preview;
        a.download = file.convertedFile?.name || file.originalFile.name;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(a.href), 10_000);
    };

    const handleSelectAll  = () => setSelectedIds(new Set(files.filter(f => f.status === "complete").map(f => f.id)));
    const handleSelectNone = () => setSelectedIds(new Set());
    const handleToggle     = id => {
        const s = new Set(selectedIds);
        s.has(id) ? s.delete(id) : s.add(id);
        setSelectedIds(s);
    };

    const handleDownloadSelected = async () => {
        const selected = files.filter(f => selectedIds.has(f.id) && f.status === "complete");
        if (!selected.length) return;
        if (selected.length === 1) { handleDownload(selected[0]); return; }
        setZipGenerating(true);
        try {
            const entries = selected.map(f => ({
                blob:     f.convertedFile || f.preview,
                filename: f.convertedFile?.name || f.originalFile.name,
            }));
            await downloadAsZip(entries, `converted-${selected.length}-images.zip`);
        } catch {
            for (const f of selected) {
                handleDownload(f);
                await new Promise(r => setTimeout(r, 200));
            }
        } finally {
            setZipGenerating(false);
        }
    };

    const handleReset = () => {
        setFiles([]); setSelectedIds(new Set()); setErrorMessage("");
        setCompareId(null); setRecentFiles([]);
        if (fileInputRef.current)   fileInputRef.current.value = "";
        if (folderInputRef.current) folderInputRef.current.value = "";
        clearRecent(IDB_STORE);
    };

    const formatBytes = bytes => {
        if (!bytes) return "0 B";
        const k = 1024, sizes = ["B", "KB", "MB", "GB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
    };

    const completedCount = files.filter(f => f.status === "complete").length;
    const compareFile    = files.find(f => f.id === compareId);

    // ── Render ───────────────────────────────────────────────────────────────
    return (
        <div className="tc-wrap">
            {/* Hidden file inputs */}
            <input ref={fileInputRef}   type="file" accept="image/*,.heic,.heif" multiple onChange={handleFileSelect}   style={{ display: "none" }} />
            <input ref={folderInputRef} type="file" accept="image/*,.heic,.heif" multiple webkitdirectory="" onChange={handleFolderSelect} style={{ display: "none" }} />

            {/* Error banner */}
            {errorMessage && (
                <div className="tc-error">
                    <span>{errorMessage}</span>
                    <button onClick={() => setErrorMessage("")} className="tc-error-close">×</button>
                </div>
            )}

            {/* Resize options */}
            <div className="tc-options-bar" style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.75rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
                    <input type="checkbox" checked={enableResize} onChange={e => setEnableResize(e.target.checked)} />
                    Resize
                </label>
                {enableResize && (
                    <>
                        <input
                            type="number" min="1" placeholder="Width px"
                            value={resizeW} onChange={e => setResizeW(e.target.value)}
                            style={{ width: 100, padding: "0.3rem 0.5rem", borderRadius: 6, border: "1px solid var(--border, #e2e8f0)", fontSize: "0.85rem" }}
                        />
                        <span style={{ opacity: 0.5 }}>×</span>
                        <input
                            type="number" min="1" placeholder="Height px"
                            value={resizeH} onChange={e => setResizeH(e.target.value)}
                            style={{ width: 100, padding: "0.3rem 0.5rem", borderRadius: 6, border: "1px solid var(--border, #e2e8f0)", fontSize: "0.85rem" }}
                        />
                        <span style={{ fontSize: "0.75rem", opacity: 0.55 }}>Leave one blank to preserve aspect ratio</span>
                    </>
                )}
            </div>

            {/* Before/After compare panel */}
            {compareFile?.originalUrl && compareFile?.preview && (
                <div className="tc-compare-wrap">
                    <div className="tc-compare-hd">
                        <p className="tc-compare-hd-title">Before / After: {compareFile.originalFile.name}</p>
                        <button onClick={() => setCompareId(null)} className="tc-compare-close">×</button>
                    </div>
                    <BeforeAfterSlider
                        beforeUrl={compareFile.originalUrl}
                        afterUrl={compareFile.preview}
                        beforeLabel="Original"
                        afterLabel={outputFormatName}
                    />
                </div>
            )}

            {files.length === 0 ? (
                <div className="tc-drop-card" onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
                    <div className="tc-drop-icon">📤</div>
                    <div>
                        <p className="tc-drop-title">Drag &amp; Drop Files or Folders</p>
                        <p className="tc-drop-subtitle">Converts to {outputFormatName} &nbsp;·&nbsp; JPG, PNG, WebP, HEIC, AVIF &amp; more &nbsp;·&nbsp; No size limit</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <button className="tc-drop-btn" onClick={e => { e.stopPropagation(); handleClick(); }} disabled={processing}>
                            {processing ? "Converting…" : "Select Files"}
                        </button>
                        <button className="tc-drop-btn" style={{ background: "var(--secondary, #64748b)" }}
                            onClick={e => { e.stopPropagation(); folderInputRef.current?.click(); }} disabled={processing}>
                            📁 Select Folder
                        </button>
                    </div>
                </div>
            ) : (
                <div className="tc-queue-card">
                    <div className="tc-queue-hd">
                        <div className="tc-queue-hd-left">
                            <div className="tc-queue-hd-icon">📋</div>
                            <h3 className="tc-queue-hd-title">Batch Queue</h3>
                        </div>
                        <div className="tc-queue-actions">
                            <button className="tc-queue-btn tc-queue-btn-primary" onClick={handleClick} disabled={processing}>+ Add Files</button>
                            <button className="tc-queue-btn" onClick={() => folderInputRef.current?.click()} disabled={processing}>📁 Add Folder</button>
                            <button className="tc-queue-btn" onClick={handleSelectAll}>Select All</button>
                            <button className="tc-queue-btn" onClick={handleSelectNone}>Select None</button>
                            <button className="tc-queue-btn tc-queue-btn-success" onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing || zipGenerating}>
                                {zipGenerating ? "Preparing ZIP…" : `Download (${selectedIds.size})`}
                            </button>
                            <button className="tc-queue-btn tc-queue-btn-danger" onClick={handleReset}>Reset</button>
                        </div>
                    </div>

                    <div className="tc-queue-list">
                        {files.map(file => (
                            <div
                                key={file.id}
                                className={`tc-file-item${selectedIds.has(file.id) ? " tc-file-item--selected" : ""}${file.status !== "complete" ? " tc-file-item--pending" : ""}`}
                                onClick={() => file.status === "complete" && handleToggle(file.id)}
                            >
                                <input
                                    type="checkbox" className="tc-file-checkbox"
                                    checked={selectedIds.has(file.id)}
                                    onChange={() => handleToggle(file.id)}
                                    disabled={file.status !== "complete"}
                                    onClick={e => e.stopPropagation()}
                                />
                                {file.preview
                                    ? <img src={file.preview} alt={file.originalFile.name} className="tc-file-thumb" />
                                    : <div className="tc-file-thumb-ph">⏳</div>
                                }
                                <div className="tc-file-info">
                                    <div className="tc-file-name-row">
                                        <p className="tc-file-name">{file.originalFile.name}</p>
                                        {file.status === "complete" && (
                                            <>
                                                <span className="tc-file-format-arrow">→</span>
                                                <span className="tc-file-format-badge">{outputFormatName}</span>
                                            </>
                                        )}
                                    </div>
                                    {file.status === "complete" ? (
                                        <>
                                            <p className="tc-file-sizes">{formatBytes(file.originalSize)} → {formatBytes(file.convertedSize)}</p>
                                            {file.statusMessage && (
                                                <p className="tc-file-status-ok">
                                                    <span className="tc-file-status-dot" />
                                                    {file.statusMessage.toUpperCase()}
                                                </p>
                                            )}
                                        </>
                                    ) : (
                                        <p className="tc-file-status">{file.statusMessage}</p>
                                    )}
                                </div>
                                <div className="tc-file-btns">
                                    {file.status === "complete" && file.originalUrl && (
                                        <button
                                            className={`tc-file-cmp-btn${compareId === file.id ? " tc-file-cmp-btn--active" : ""}`}
                                            onClick={e => { e.stopPropagation(); setCompareId(compareId === file.id ? null : file.id); }}
                                        >Compare</button>
                                    )}
                                    <button
                                        className="tc-file-dl-btn"
                                        onClick={e => { e.stopPropagation(); handleDownload(file); }}
                                        disabled={file.status !== "complete" || processing}
                                    >Download</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="tc-queue-ft">
                        <span className="tc-queue-ft-info">{completedCount} of {files.length} converted</span>
                        <button className="tc-queue-cta-btn" onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing || zipGenerating}>
                            {zipGenerating ? "⏳ Preparing ZIP…" : `⚡ Download Selected (${selectedIds.size})`}
                        </button>
                        <button className="tc-queue-clear-btn" onClick={handleReset}>Clear Queue</button>
                    </div>
                </div>
            )}

            {/* Recent files */}
            {recentFiles.length > 0 && (
                <div className="tc-recent-card">
                    <div className="tc-recent-hd">
                        <div className="tc-recent-hd-left">
                            <div className="tc-recent-hd-icon">🕐</div>
                            <h3 className="tc-recent-hd-title">Recent Assets</h3>
                        </div>
                        <button className="tc-recent-view-all">View all {recentFiles.length} assets →</button>
                    </div>
                    <div className="tc-recent-scroll">
                        {recentFiles.map(file => (
                            <div key={file.id} className="tc-recent-item">
                                <div className="tc-recent-thumb">
                                    {file.preview
                                        ? <img src={file.preview} alt={file.originalFile.name} />
                                        : <span>📄</span>
                                    }
                                    <button className="tc-recent-dl-btn" onClick={() => handleDownload(file)} title="Download">↓</button>
                                </div>
                                <p className="tc-recent-name">{file.originalFile.name.replace(/\.[^/.]+$/, "")}</p>
                                <p className="tc-recent-sizes">{formatBytes(file.originalSize)} → {formatBytes(file.convertedSize)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
