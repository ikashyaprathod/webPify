"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";

const ALLOWED_DEFAULT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];
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
    if (bytes === 0) return "0 Bytes";
    const k = 1024, sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function newId() { return Math.random().toString(36).substr(2, 9); }

function BeforeAfterSlider({ originalUrl, compressedUrl }) {
    const [pos, setPos] = useState(50);
    return (
        <div className="ba-wrap" style={{ userSelect: "none" }}>
            <div className="ba-container">
                <img src={compressedUrl} alt="Compressed" className="ba-img ba-img--after" />
                <div className="ba-clip" style={{ width: pos + "%" }}>
                    <img src={originalUrl} alt="Original" className="ba-img ba-img--before" />
                </div>
                <div className="ba-divider" style={{ left: pos + "%" }}>
                    <div className="ba-handle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5l-7 7 7 7V5zm8 0v14l7-7-7-7z"/>
                        </svg>
                    </div>
                </div>
                <input type="range" min="0" max="100" value={pos} onChange={e => setPos(+e.target.value)} className="ba-slider" />
                <span className="ba-label ba-label--left">Original</span>
                <span className="ba-label ba-label--right">Compressed</span>
            </div>
            <style>{`
                .ba-wrap { border: 1.5px solid rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden; }
                .ba-container { position: relative; overflow: hidden; line-height: 0; max-height: 320px; }
                .ba-img { display: block; width: 100%; height: auto; max-height: 320px; object-fit: contain; }
                .ba-img--after { position: relative; }
                .ba-img--before { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; }
                .ba-clip { position: absolute; top: 0; left: 0; height: 100%; overflow: hidden; }
                .ba-divider { position: absolute; top: 0; bottom: 0; width: 3px; background: white; transform: translateX(-50%); pointer-events: none; box-shadow: 0 0 6px rgba(0,0,0,0.3); }
                .ba-handle { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 36px; height: 36px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.25); color: #333; }
                .ba-slider { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: col-resize; margin: 0; }
                .ba-label { position: absolute; bottom: 8px; font-size: 0.75rem; font-weight: 700; background: rgba(0,0,0,0.55); color: white; padding: 2px 8px; border-radius: 4px; pointer-events: none; }
                .ba-label--left { left: 8px; }
                .ba-label--right { right: 8px; }
            `}</style>
        </div>
    );
}

export default function ImageCompressor({
    allowedFormats = ALLOWED_DEFAULT,
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
    const fileInputRef = useRef(null);

    // Load persisted recent files from IndexedDB on mount
    useEffect(() => {
        loadRecent(IDB_STORE).then(items => {
            if (!items.length) return;
            const restored = items.map(item => ({
                id: item.id,
                originalFile: { name: item.originalName },
                originalUrl: null,
                compressedFile: dataUrlToFile(item.preview, item.originalName, item.fileType),
                originalSize: item.originalSize,
                compressedSize: item.compressedSize,
                reduction: item.reduction,
                preview: item.preview,
                status: "complete",
                statusMessage: item.statusMessage,
            }));
            setRecentFiles(restored);
        });
    }, []);

    // Persist to IndexedDB whenever recentFiles changes
    useEffect(() => {
        if (recentFiles.length === 0) return;
        const serializable = recentFiles.map(f => ({
            id: f.id,
            originalName: f.originalFile.name,
            originalSize: f.originalSize,
            compressedSize: f.compressedSize,
            reduction: f.reduction,
            fileType: f.compressedFile?.type || 'image/jpeg',
            statusMessage: f.statusMessage,
            preview: f.preview,
        }));
        saveRecent(IDB_STORE, serializable);
    }, [recentFiles]);

    const compressImage = async (file, updateProgress) => {
        updateProgress("uploading", "Uploading...");
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/compress', { method: 'POST', body: formData });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Compression failed');
        }

        updateProgress("processing", "Compressing...");
        const blob           = await response.blob();
        const originalSize   = parseInt(response.headers.get('X-Original-Size')   || file.size);
        const compressedSize = parseInt(response.headers.get('X-Compressed-Size') || blob.size);
        const reduction      = parseFloat(response.headers.get('X-Reduction')     || '0');
        const previewDataUrl = await blobToDataUrl(blob);
        const compressedFile = new File([blob], file.name, { type: file.type, lastModified: Date.now() });
        const fmtLabel = file.type === 'image/png' ? 'PNG'
            : file.type === 'image/jpeg' ? 'JPG'
            : file.type === 'image/webp' ? 'WebP'
            : file.type === 'image/avif' ? 'AVIF' : '';

        return {
            id: newId(),
            originalFile: file,
            originalUrl: URL.createObjectURL(file),
            compressedFile,
            originalSize,
            compressedSize,
            reduction,
            preview: previewDataUrl,
            status: "complete",
            statusMessage: reduction > 0 ? `${fmtLabel} compressed` : "Already optimized",
        };
    };

    const processFiles = async (fileList) => {
        setProcessing(true);
        setErrorMessage("");

        const validFiles = Array.from(fileList).filter(file => {
            if (!allowedFormats.includes(file.type)) {
                setErrorMessage(
                    formatName
                        ? `This tool only accepts ${formatName} images.`
                        : `Unsupported format: ${file.name}. Use PNG, JPG, WebP, or AVIF.`
                );
                return false;
            }
            return true;
        });

        if (!validFiles.length) { setProcessing(false); return; }

        const oversized = validFiles.filter(f => f.size > 10 * 1024 * 1024);
        if (oversized.length) {
            setErrorMessage(`File too large: ${oversized[0].name}. Max 10 MB.`);
            setProcessing(false);
            return;
        }

        const placeholders = validFiles.map(file => ({
            id: newId(), originalFile: file, status: "pending", statusMessage: "Waiting...",
        }));
        setFiles(prev => [...prev, ...placeholders]);

        for (let i = 0; i < validFiles.length; i++) {
            const file   = validFiles[i];
            const tempId = placeholders[i].id;
            const updateProgress = (status, message) =>
                setFiles(prev => prev.map(f => f.id === tempId ? { ...f, status, statusMessage: message } : f));

            if (validFiles.length > 1) updateProgress("processing", `Processing ${i + 1}/${validFiles.length}…`);

            try {
                const result = await compressImage(file, updateProgress);
                setFiles(prev => prev.map(f => f.id === tempId ? result : f));
                setSelectedIds(prev => new Set([...prev, result.id]));
                setRecentFiles(prev => [result, ...prev].slice(0, 20));
            } catch (error) {
                const msg = error.message.includes('too large') ? `Image too large: ${file.name}. Max 10 MB.`
                    : error.message.includes('Unsupported') ? `Unsupported format: ${file.name}`
                    : `Compression failed for ${file.name}. Please try again.`;
                setErrorMessage(msg);
                setFiles(prev => prev.filter(f => f.id !== tempId));
            }
        }
        setProcessing(false);
    };

    const handlePaste = useCallback((e) => {
        const items = e.clipboardData?.items;
        if (!items) return;
        const imgs = [];
        for (const item of items) {
            if (allowedFormats.includes(item.type)) imgs.push(item.getAsFile());
        }
        if (imgs.length) processFiles(imgs);
    }, [allowedFormats]);

    useEffect(() => {
        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, [handlePaste]);

    const handleDrop     = e => { e.preventDefault(); if (e.dataTransfer.files?.length) processFiles(e.dataTransfer.files); };
    const handleDragOver = e => e.preventDefault();
    const handleClick    = () => { if (!processing) fileInputRef.current?.click(); };
    const handleDownload = file => {
        const link = document.createElement("a");
        link.href = file.compressedFile
            ? URL.createObjectURL(file.compressedFile)
            : file.preview;
        link.download = file.compressedFile?.name || file.originalFile.name;
        document.body.appendChild(link); link.click(); document.body.removeChild(link);
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
        if (fileInputRef.current) fileInputRef.current.value = "";
        clearRecent(IDB_STORE);
    };

    const acceptStr    = allowedFormats.join(",");
    const compareFile  = files.find(f => f.id === compareId);
    const completedCount = files.filter(f => f.status === "complete").length;

    return (
        <div className="tc-wrap">
            <input ref={fileInputRef} type="file" accept={acceptStr} multiple onChange={e => processFiles(e.target.files)} style={{ display: "none" }} />

            {errorMessage && (
                <div className="tc-error">
                    <span>{errorMessage}</span>
                    <button onClick={() => setErrorMessage("")} className="tc-error-close">×</button>
                </div>
            )}

            {compareFile?.originalUrl && compareFile?.preview && (
                <div className="tc-compare-wrap">
                    <div className="tc-compare-hd">
                        <p className="tc-compare-hd-title">Before / After: {compareFile.originalFile.name}</p>
                        <button onClick={() => setCompareId(null)} className="tc-compare-close">×</button>
                    </div>
                    <BeforeAfterSlider originalUrl={compareFile.originalUrl} compressedUrl={compareFile.preview} />
                </div>
            )}

            {files.length === 0 ? (
                <div className="tc-drop-card" onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
                    <div className="tc-drop-icon">📦</div>
                    <div>
                        <p className="tc-drop-title">Drag &amp; Drop Files</p>
                        <p className="tc-drop-subtitle">Supports JPG, PNG, WebP, AVIF &nbsp;·&nbsp; Max 10MB &nbsp;·&nbsp; Paste from clipboard</p>
                    </div>
                    <button className="tc-drop-btn" onClick={(e) => { e.stopPropagation(); handleClick(); }} disabled={processing}>
                        {processing ? "Compressing…" : "Select Files"}
                    </button>
                </div>
            ) : (
                <div className="tc-queue-card">
                    <div className="tc-queue-hd">
                        <div className="tc-queue-hd-left">
                            <div className="tc-queue-hd-icon">📋</div>
                            <h3 className="tc-queue-hd-title">Batch Queue</h3>
                        </div>
                        <div className="tc-queue-actions">
                            <button className="tc-queue-btn tc-queue-btn-primary" onClick={handleClick} disabled={processing}>+ Add More</button>
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
                                    type="checkbox"
                                    className="tc-file-checkbox"
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
                                        >
                                            Compare
                                        </button>
                                    )}
                                    <button
                                        className="tc-file-dl-btn"
                                        onClick={e => { e.stopPropagation(); handleDownload(file); }}
                                        disabled={file.status !== "complete" || processing}
                                    >
                                        Download
                                    </button>
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
