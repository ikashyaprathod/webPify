"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const ALLOWED_DEFAULT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

function formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024, sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

function newId() { return Math.random().toString(36).substr(2, 9); }

// Before/After slider component
function BeforeAfterSlider({ originalUrl, compressedUrl }) {
    const [pos, setPos] = useState(50);
    return (
        <div className="ba-wrap" style={{ userSelect: "none" }}>
            <div className="ba-container">
                {/* Compressed (bottom layer, always full width) */}
                <img src={compressedUrl} alt="Compressed" className="ba-img ba-img--after" />
                {/* Original (top layer, clipped to left side) */}
                <div className="ba-clip" style={{ width: pos + "%" }}>
                    <img src={originalUrl} alt="Original" className="ba-img ba-img--before" />
                </div>
                {/* Divider */}
                <div className="ba-divider" style={{ left: pos + "%" }}>
                    <div className="ba-handle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5l-7 7 7 7V5zm8 0v14l7-7-7-7z"/>
                        </svg>
                    </div>
                </div>
                {/* Slider input */}
                <input
                    type="range" min="0" max="100" value={pos}
                    onChange={e => setPos(+e.target.value)}
                    className="ba-slider"
                />
                <span className="ba-label ba-label--left">Original</span>
                <span className="ba-label ba-label--right">Compressed</span>
            </div>
        </div>
    );
}

export default function ImageCompressor({
    allowedFormats = ALLOWED_DEFAULT,
    title          = "Image Compressor",
    description    = "Professional compression with FreeConvert-level results",
    formatName     = null,
}) {
    const [files,       setFiles]       = useState([]);
    const [processing,  setProcessing]  = useState(false);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [errorMessage,setErrorMessage]= useState("");
    const [compareId,   setCompareId]   = useState(null);
    const fileInputRef = useRef(null);

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

        const blob            = await response.blob();
        const originalSize    = parseInt(response.headers.get('X-Original-Size')   || file.size);
        const compressedSize  = parseInt(response.headers.get('X-Compressed-Size') || blob.size);
        const reduction       = parseFloat(response.headers.get('X-Reduction')     || '0');

        const compressedFile = new File([blob], file.name, { type: file.type, lastModified: Date.now() });
        const fmtLabel = file.type === 'image/png' ? 'PNG'
            : file.type === 'image/jpeg' ? 'JPG'
            : file.type === 'image/webp' ? 'WebP'
            : file.type === 'image/avif' ? 'AVIF'
            : '';

        return {
            id: newId(),
            originalFile: file,
            originalUrl: URL.createObjectURL(file),
            compressedFile,
            originalSize,
            compressedSize,
            reduction,
            preview: URL.createObjectURL(blob),
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
            const file  = validFiles[i];
            const tempId= placeholders[i].id;
            const updateProgress = (status, message) =>
                setFiles(prev => prev.map(f => f.id === tempId ? { ...f, status, statusMessage: message } : f));

            if (validFiles.length > 1) updateProgress("processing", `Processing ${i + 1}/${validFiles.length}…`);

            try {
                const result = await compressImage(file, updateProgress);
                setFiles(prev => prev.map(f => f.id === tempId ? result : f));
                setSelectedIds(prev => new Set([...prev, result.id]));
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

    // Clipboard paste support
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

    const handleDrop      = e => { e.preventDefault(); if (e.dataTransfer.files?.length) processFiles(e.dataTransfer.files); };
    const handleDragOver  = e => e.preventDefault();
    const handleClick     = () => { if (!processing) fileInputRef.current?.click(); };
    const handleDownload  = file => {
        const link = document.createElement("a");
        link.href  = URL.createObjectURL(file.compressedFile);
        link.download = file.compressedFile.name;
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
        setFiles([]); setSelectedIds(new Set()); setErrorMessage(""); setCompareId(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const acceptStr = allowedFormats.join(",");
    const compareFile = files.find(f => f.id === compareId);

    return (
        <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 700 }}>{title}</h1>
                <p style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.8 }}>{description}</p>

                {errorMessage && (
                    <div style={{ padding: "1rem", marginBottom: "1.5rem", background: "#fee", border: "1px solid #fcc", borderRadius: "8px", color: "#c00", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span>{errorMessage}</span>
                        <button onClick={() => setErrorMessage("")} style={{ background: "none", border: "none", color: "#c00", cursor: "pointer", fontSize: "1.25rem", fontWeight: "bold" }}>×</button>
                    </div>
                )}

                {/* Before/After compare modal */}
                {compareFile?.originalUrl && compareFile?.preview && (
                    <div style={{ marginBottom: "1.5rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                            <p style={{ fontWeight: 600 }}>Before / After: {compareFile.originalFile.name}</p>
                            <button onClick={() => setCompareId(null)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.25rem" }}>×</button>
                        </div>
                        <BeforeAfterSlider originalUrl={compareFile.originalUrl} compressedUrl={compareFile.preview} />
                    </div>
                )}

                {files.length === 0 ? (
                    <div
                        onClick={handleClick}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        style={{ border: "2px dashed var(--primary)", borderRadius: "12px", padding: "3rem 2rem", cursor: processing ? "not-allowed" : "pointer", transition: "all 0.3s ease" }}
                    >
                        <input ref={fileInputRef} type="file" accept={acceptStr} multiple onChange={e => processFiles(e.target.files)} style={{ display: "none" }} />
                        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📦</div>
                        <p style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                            {processing ? "Compressing..." : "Drop images here, click, or paste from clipboard"}
                        </p>
                        <p style={{ fontSize: "0.875rem", opacity: 0.6 }}>Supports JPG, PNG, WebP, AVIF • Max 10 MB per file</p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <button onClick={handleClick} disabled={processing} style={{ padding: "0.625rem 1.25rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "6px", cursor: processing ? "not-allowed" : "pointer", fontWeight: 600, opacity: processing ? 0.6 : 1 }}>
                                Add More Images
                            </button>
                            <button onClick={handleSelectAll} style={{ padding: "0.625rem 1.25rem", background: "#6c757d", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}>Select All</button>
                            <button onClick={handleSelectNone} style={{ padding: "0.625rem 1.25rem", background: "#6c757d", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}>Select None</button>
                            <button onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing} style={{ padding: "0.625rem 1.25rem", background: "#28a745", color: "white", border: "none", borderRadius: "6px", cursor: (selectedIds.size === 0 || processing) ? "not-allowed" : "pointer", fontWeight: 600, opacity: (selectedIds.size === 0 || processing) ? 0.6 : 1 }}>
                                Download Selected ({selectedIds.size})
                            </button>
                            <button onClick={handleReset} style={{ padding: "0.625rem 1.25rem", background: "#dc3545", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}>Reset</button>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {files.map(file => (
                                <div
                                    key={file.id}
                                    style={{ border: selectedIds.has(file.id) ? "2px solid var(--primary)" : "2px solid #e0e0e0", borderRadius: "8px", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem", background: "white", cursor: file.status === "complete" ? "pointer" : "default", opacity: file.status === "complete" ? 1 : 0.7 }}
                                    onClick={() => file.status === "complete" && handleToggle(file.id)}
                                >
                                    <input type="checkbox" checked={selectedIds.has(file.id)} onChange={() => handleToggle(file.id)} disabled={file.status !== "complete"} style={{ width: "20px", height: "20px", cursor: "pointer" }} />
                                    {file.preview ? (
                                        <img src={file.preview} alt={file.originalFile.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px" }} />
                                    ) : (
                                        <div style={{ width: "80px", height: "80px", borderRadius: "6px", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>⏳</div>
                                    )}
                                    <div style={{ flex: 1, textAlign: "left" }}>
                                        <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{file.originalFile.name}</p>
                                        {file.status === "complete" ? (
                                            <>
                                                <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
                                                    {formatBytes(file.originalSize)} → {formatBytes(file.compressedSize)}
                                                    {file.reduction > 0
                                                        ? <span style={{ color: "#28a745", marginLeft: "0.5rem", fontWeight: 600 }}>({file.reduction}% smaller)</span>
                                                        : <span style={{ color: "#6c757d", marginLeft: "0.5rem", fontWeight: 600 }}>(No change)</span>
                                                    }
                                                </p>
                                                {file.statusMessage && (
                                                    <p style={{ fontSize: "0.75rem", color: "#6c757d", marginTop: "0.25rem" }}>{file.statusMessage}</p>
                                                )}
                                            </>
                                        ) : (
                                            <p style={{ fontSize: "0.875rem", color: "#0070f3", fontWeight: 600 }}>{file.statusMessage}</p>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem", flexDirection: "column", alignItems: "flex-end" }}>
                                        {file.status === "complete" && file.originalUrl && (
                                            <button
                                                onClick={e => { e.stopPropagation(); setCompareId(compareId === file.id ? null : file.id); }}
                                                style={{ padding: "0.375rem 0.75rem", background: compareId === file.id ? "#6c757d" : "rgba(0,0,0,0.06)", color: "inherit", border: "1.5px solid rgba(0,0,0,0.1)", borderRadius: "6px", cursor: "pointer", fontWeight: 600, fontSize: "0.8rem" }}
                                            >
                                                Compare
                                            </button>
                                        )}
                                        <button
                                            onClick={e => { e.stopPropagation(); handleDownload(file); }}
                                            disabled={file.status !== "complete" || processing}
                                            style={{ padding: "0.5rem 1rem", background: (file.status === "complete" && !processing) ? "var(--primary)" : "#ccc", color: "white", border: "none", borderRadius: "6px", cursor: (file.status === "complete" && !processing) ? "pointer" : "not-allowed", fontWeight: 600, fontSize: "0.875rem" }}
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <input ref={fileInputRef} type="file" accept={acceptStr} multiple onChange={e => processFiles(e.target.files)} style={{ display: "none" }} />
                    </>
                )}
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
                .ba-label--left  { left: 8px; }
                .ba-label--right { right: 8px; }
            `}</style>
        </div>
    );
}
