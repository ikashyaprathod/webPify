"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";
import { compressImage, getEffectiveType, isHeic, createDisplayUrl, getImagesFromDrop } from "../utils/image-client";
import BeforeAfterSlider from "./BeforeAfterSlider";

const IDB_STORE = 'recent_compressor';

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

function formatBytes(bytes) {
    if (!bytes) return "0 B";
    const k = 1024, sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(1) + " " + sizes[i];
}

function newId() { return Math.random().toString(36).substr(2, 9); }

export default function ImageCompressor({
    allowedFormats = null,   // null = accept everything; array = restrict (for format-specific pages)
    title          = "",
    description    = "",
    formatName     = null,
}) {
    const [files,        setFiles]       = useState([]);
    const [processing,   setProcessing]  = useState(false);
    const [selectedIds,  setSelectedIds] = useState(new Set());
    const [errorMessage, setErrorMessage]= useState("");
    const [compareId,    setCompareId]   = useState(null);
    const [recentFiles,  setRecentFiles] = useState([]);

    const fileInputRef   = useRef(null);
    const folderInputRef = useRef(null);

    // ── Persist / restore recent files ──────────────────────────────────────
    useEffect(() => {
        loadRecent(IDB_STORE).then(items => {
            if (!items.length) return;
            setRecentFiles(items.map(item => ({
                id:             item.id,
                originalFile:   { name: item.originalName },
                originalUrl:    null,
                compressedFile: dataUrlToFile(item.preview, item.originalName, item.fileType),
                originalSize:   item.originalSize,
                compressedSize: item.compressedSize,
                reduction:      item.reduction,
                preview:        item.preview,
                status:         "complete",
                statusMessage:  item.statusMessage,
            })));
        });
    }, []);

    useEffect(() => {
        if (!recentFiles.length) return;
        saveRecent(IDB_STORE, recentFiles.map(f => ({
            id:            f.id,
            originalName:  f.originalFile.name,
            originalSize:  f.originalSize,
            compressedSize:f.compressedSize,
            reduction:     f.reduction,
            fileType:      f.compressedFile?.type || 'image/jpeg',
            statusMessage: f.statusMessage,
            preview:       f.preview,
        })));
    }, [recentFiles]);

    // ── Core compression (fully client-side) ────────────────────────────────
    const doCompress = async (file, updateProgress) => {
        updateProgress("processing", "Compressing…");

        const { blob, outputMime, noChange } = await compressImage(file);

        const originalSize   = file.size;
        const compressedSize = blob.size;
        const reduction      = noChange ? 0
            : parseFloat(((originalSize - compressedSize) / originalSize * 100).toFixed(1));

        const t = getEffectiveType(file);
        const fmtLabel = isHeic(file) ? 'HEIC'
            : t === 'image/png' ? 'PNG'
            : (t === 'image/jpeg' || t === 'image/jpg') ? 'JPG'
            : t === 'image/webp' ? 'WebP'
            : t === 'image/avif' ? 'AVIF'
            : t === 'image/gif'  ? 'GIF'
            : t === 'image/tiff' ? 'TIFF'
            : t === 'image/bmp'  ? 'BMP' : '';

        const previewDataUrl  = await blobToDataUrl(blob);
        const compressedFile  = new File([blob], file.name, { type: outputMime, lastModified: Date.now() });
        const originalUrl     = await createDisplayUrl(file);

        return {
            id:             newId(),
            originalFile:   file,
            originalUrl,
            compressedFile,
            originalSize,
            compressedSize,
            reduction,
            preview:        previewDataUrl,
            status:         "complete",
            statusMessage:  noChange ? "Already optimized" : `${fmtLabel} compressed`,
        };
    };

    // ── Process a batch of files ─────────────────────────────────────────────
    const processFiles = async (fileList) => {
        setProcessing(true);
        setErrorMessage("");

        const validFiles = Array.from(fileList).filter(file => {
            const t = getEffectiveType(file);
            // Format-specific page: enforce restriction
            if (formatName && allowedFormats && !allowedFormats.includes(t)) {
                setErrorMessage(`This tool only accepts ${formatName} images.`);
                return false;
            }
            const ok = t.startsWith('image/') || isHeic(file);
            if (!ok) {
                setErrorMessage(`Unsupported file: ${file.name}. Upload an image (JPG, PNG, WebP, HEIC, AVIF, etc.).`);
            }
            return ok;
        });

        if (!validFiles.length) { setProcessing(false); return; }

        const placeholders = validFiles.map(file => ({
            id: newId(), originalFile: file, status: "pending", statusMessage: "Waiting…",
        }));
        setFiles(prev => [...prev, ...placeholders]);

        for (let i = 0; i < validFiles.length; i++) {
            const file   = validFiles[i];
            const tempId = placeholders[i].id;
            const updateProgress = (status, message) =>
                setFiles(prev => prev.map(f => f.id === tempId ? { ...f, status, statusMessage: message } : f));

            if (validFiles.length > 1) updateProgress("processing", `Processing ${i + 1}/${validFiles.length}…`);

            try {
                const result = await doCompress(file, updateProgress);
                setFiles(prev => prev.map(f => f.id === tempId ? result : f));
                setSelectedIds(prev => new Set([...prev, result.id]));
                setRecentFiles(prev => [result, ...prev].slice(0, 20));
            } catch (err) {
                setErrorMessage(err.message || `Compression failed for ${file.name}.`);
                setFiles(prev => prev.filter(f => f.id !== tempId));
            }
        }
        setProcessing(false);
    };

    // ── Paste from clipboard ─────────────────────────────────────────────────
    const handlePaste = useCallback(e => {
        const imgs = [];
        for (const item of Array.from(e.clipboardData?.items || [])) {
            if (item.type.startsWith('image/')) imgs.push(item.getAsFile());
        }
        if (imgs.length) processFiles(imgs);
    }, []);

    useEffect(() => {
        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, [handlePaste]);

    // ── Event handlers ───────────────────────────────────────────────────────
    const handleFileSelect   = e => { if (e.target.files?.length) processFiles(e.target.files); };
    const handleFolderSelect = e => { if (e.target.files?.length) processFiles(e.target.files); };
    const handleDrop = async e => {
        e.preventDefault();
        const imgs = await getImagesFromDrop(e);
        if (imgs.length) processFiles(imgs);
    };
    const handleDragOver = e => e.preventDefault();
    const handleClick    = () => { if (!processing) fileInputRef.current?.click(); };

    const handleDownload = file => {
        const a    = document.createElement("a");
        a.href     = file.compressedFile ? URL.createObjectURL(file.compressedFile) : file.preview;
        a.download = file.compressedFile?.name || file.originalFile.name;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
    };

    const handleSelectAll  = () => setSelectedIds(new Set(files.filter(f => f.status === "complete").map(f => f.id)));
    const handleSelectNone = () => setSelectedIds(new Set());
    const handleToggle     = id => {
        const s = new Set(selectedIds);
        s.has(id) ? s.delete(id) : s.add(id);
        setSelectedIds(s);
    };
    const handleDownloadSelected = () =>
        files.filter(f => selectedIds.has(f.id) && f.status === "complete").forEach(handleDownload);

    const handleReset = () => {
        setFiles([]); setSelectedIds(new Set()); setErrorMessage(""); setCompareId(null); setRecentFiles([]);
        if (fileInputRef.current)   fileInputRef.current.value = "";
        if (folderInputRef.current) folderInputRef.current.value = "";
        clearRecent(IDB_STORE);
    };

    const compareFile    = files.find(f => f.id === compareId);
    const completedCount = files.filter(f => f.status === "complete").length;

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

            {/* Before/After panel */}
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
                        afterLabel="Compressed"
                    />
                </div>
            )}

            {files.length === 0 ? (
                <div className="tc-drop-card" onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
                    <div className="tc-drop-icon">📦</div>
                    <div>
                        <p className="tc-drop-title">Drag &amp; Drop Files or Folders</p>
                        <p className="tc-drop-subtitle">JPG, PNG, WebP, AVIF, HEIC &amp; more &nbsp;·&nbsp; No size limit &nbsp;·&nbsp; Paste from clipboard</p>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                        <button className="tc-drop-btn" onClick={e => { e.stopPropagation(); handleClick(); }} disabled={processing}>
                            {processing ? "Compressing…" : "Select Files"}
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
                            <button className="tc-queue-btn tc-queue-btn-success" onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing}>
                                Download ({selectedIds.size})
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
                                    <p className="tc-file-name">{file.originalFile.name}</p>
                                    {file.status === "complete" ? (
                                        <>
                                            <p className="tc-file-sizes">
                                                {formatBytes(file.originalSize)} → {formatBytes(file.compressedSize)}
                                                {file.reduction > 0
                                                    ? <span className="tc-file-reduction">({file.reduction}% smaller)</span>
                                                    : <span style={{ color: "#94a3b8", marginLeft: "0.375rem", fontWeight: 600 }}>(No change)</span>
                                                }
                                            </p>
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
                        <span className="tc-queue-ft-info">{completedCount} of {files.length} compressed</span>
                        <button className="tc-queue-cta-btn" onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing}>
                            ⚡ Download Selected ({selectedIds.size})
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
                                <p className="tc-recent-sizes">{formatBytes(file.originalSize)} → {formatBytes(file.compressedSize)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
