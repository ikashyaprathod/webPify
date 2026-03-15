"use client";

import { useRef, useState, useEffect } from "react";
import { saveRecent, loadRecent, clearRecent } from "../utils/recent-files-db";

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
    outputFormat = 'image/webp',
    outputFormatName = "WebP",
    title = "",
    description = "",
}) {
    const [files, setFiles] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [errorMessage, setErrorMessage] = useState("");
    const [recentFiles, setRecentFiles] = useState([]);
    const fileInputRef = useRef(null);

    const getTargetFormat = (format) => {
        if (format === 'image/webp') return 'webp';
        if (format === 'image/png') return 'png';
        if (format === 'image/jpeg') return 'jpeg';
        return 'webp';
    };

    // Load persisted recent files from IndexedDB on mount
    useEffect(() => {
        loadRecent(IDB_STORE).then(items => {
            if (!items.length) return;
            const restored = items.map(item => ({
                id: item.id,
                originalFile: { name: item.originalName },
                convertedFile: dataUrlToFile(item.preview, item.fileName, item.fileType),
                originalSize: item.originalSize,
                convertedSize: item.convertedSize,
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
            fileName: f.convertedFile?.name || f.originalFile.name,
            originalSize: f.originalSize,
            convertedSize: f.convertedSize,
            fileType: f.convertedFile?.type || outputFormat,
            statusMessage: f.statusMessage,
            preview: f.preview,
        }));
        saveRecent(IDB_STORE, serializable);
    }, [recentFiles]);

    const convertImage = async (file, updateProgress) => {
        try {
            updateProgress("uploading", "Uploading to server...");
            const formData = new FormData();
            formData.append('file', file);
            formData.append('targetFormat', getTargetFormat(outputFormat));

            const response = await fetch('/api/convert', { method: 'POST', body: formData });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Conversion failed');
            }

            updateProgress("converting", `Converting to ${outputFormatName}...`);
            const blob = await response.blob();
            const originalSize = parseInt(response.headers.get('X-Original-Size') || file.size);
            const convertedSize = parseInt(response.headers.get('X-Converted-Size') || blob.size);
            const extension = getTargetFormat(outputFormat);
            const baseName = file.name.replace(/\.[^/.]+$/, "");
            const newFileName = `${baseName}.${extension}`;
            const previewDataUrl = await blobToDataUrl(blob);
            const convertedFile = new File([blob], newFileName, { type: outputFormat, lastModified: Date.now() });

            return {
                id: Math.random().toString(36).substr(2, 9),
                originalFile: file,
                convertedFile,
                originalSize,
                convertedSize,
                preview: previewDataUrl,
                status: "complete",
                statusMessage: `Converted to ${outputFormatName}`,
            };
        } catch (error) {
            throw new Error(error.message || 'Failed to convert image');
        }
    };

    const processFiles = async (fileList) => {
        setProcessing(true);
        setErrorMessage("");

        const validFiles = Array.from(fileList).filter((file) => {
            const isImage = file.type.startsWith('image/');
            if (!isImage) setErrorMessage(`Unsupported file type: ${file.name}. Please upload an image file.`);
            return isImage;
        });

        if (validFiles.length === 0) { setProcessing(false); return; }

        const oversizedFiles = validFiles.filter(f => f.size > 10 * 1024 * 1024);
        if (oversizedFiles.length > 0) {
            setErrorMessage(`File too large: ${oversizedFiles[0].name}. Max allowed size is 10MB.`);
            setProcessing(false);
            return;
        }

        try {
            const processingFiles = validFiles.map((file) => ({
                id: Math.random().toString(36).substr(2, 9),
                originalFile: file,
                status: "pending",
                statusMessage: "Waiting...",
            }));
            setFiles((prev) => [...prev, ...processingFiles]);

            for (let i = 0; i < validFiles.length; i++) {
                const file = validFiles[i];
                const tempId = processingFiles[i].id;
                const updateProgress = (status, message) =>
                    setFiles((prev) => prev.map((f) => f.id === tempId ? { ...f, status, statusMessage: message } : f));

                if (validFiles.length > 1) updateProgress("processing", `Processing ${i + 1} of ${validFiles.length} images...`);

                try {
                    const result = await convertImage(file, updateProgress);
                    setFiles((prev) => prev.map((f) => (f.id === tempId ? result : f)));
                    setSelectedIds((prev) => new Set([...prev, result.id]));
                    setRecentFiles((prev) => [result, ...prev].slice(0, 20));
                } catch (error) {
                    let friendlyMessage = "Conversion failed. Please try again.";
                    if (error.message.includes('too large') || error.message.includes('10MB'))
                        friendlyMessage = `Image too large: ${file.name}. Max size is 10MB.`;
                    else if (error.message.includes('Unsupported') || error.message.includes('file type'))
                        friendlyMessage = `Unsupported file type: ${file.name}`;
                    setErrorMessage(friendlyMessage);
                    setFiles((prev) => prev.filter((f) => f.id !== tempId));
                }
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setProcessing(false);
        }
    };

    const handleFileSelect = (e) => { if (e.target.files?.length) processFiles(e.target.files); };
    const handleDrop = (e) => { e.preventDefault(); if (e.dataTransfer.files?.length) processFiles(e.dataTransfer.files); };
    const handleDragOver = (e) => e.preventDefault();
    const handleClick = () => { if (!processing) fileInputRef.current?.click(); };
    const handleDownload = (file) => {
        const link = document.createElement("a");
        link.href = file.convertedFile
            ? URL.createObjectURL(file.convertedFile)
            : file.preview;
        link.download = file.convertedFile?.name || file.originalFile.name;
        document.body.appendChild(link); link.click(); document.body.removeChild(link);
    };
    const handleSelectAll = () => setSelectedIds(new Set(files.filter((f) => f.status === "complete").map((f) => f.id)));
    const handleSelectNone = () => setSelectedIds(new Set());
    const handleToggleSelect = (id) => {
        const s = new Set(selectedIds);
        s.has(id) ? s.delete(id) : s.add(id);
        setSelectedIds(s);
    };
    const handleDownloadSelected = () =>
        files.filter((f) => selectedIds.has(f.id) && f.status === "complete").forEach(handleDownload);
    const handleReset = () => {
        setFiles([]); setSelectedIds(new Set()); setErrorMessage(""); setRecentFiles([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
        clearRecent(IDB_STORE);
    };

    const formatBytes = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024, sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
    };

    const completedCount = files.filter(f => f.status === "complete").length;

    return (
        <div className="tc-wrap">
            <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileSelect} style={{ display: "none" }} />

            {errorMessage && (
                <div className="tc-error">
                    <span>{errorMessage}</span>
                    <button onClick={() => setErrorMessage("")} className="tc-error-close">×</button>
                </div>
            )}

            {files.length === 0 ? (
                <div className="tc-drop-card" onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
                    <div className="tc-drop-icon">📤</div>
                    <div>
                        <p className="tc-drop-title">Drag &amp; Drop Files</p>
                        <p className="tc-drop-subtitle">Converts to {outputFormatName} &nbsp;·&nbsp; Max 10MB per file</p>
                    </div>
                    <button className="tc-drop-btn" onClick={(e) => { e.stopPropagation(); handleClick(); }} disabled={processing}>
                        {processing ? "Converting…" : "Select Files"}
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
                            <button className="tc-queue-btn tc-queue-btn-primary" onClick={handleClick} disabled={processing}>+ Add More Images</button>
                            <button className="tc-queue-btn" onClick={handleSelectAll}>Select All</button>
                            <button className="tc-queue-btn" onClick={handleSelectNone}>Select None</button>
                            <button className="tc-queue-btn tc-queue-btn-success" onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing}>
                                Download Selected ({selectedIds.size})
                            </button>
                            <button className="tc-queue-btn tc-queue-btn-danger" onClick={handleReset}>Reset</button>
                        </div>
                    </div>

                    <div className="tc-queue-list">
                        {files.map((file) => (
                            <div
                                key={file.id}
                                className={`tc-file-item${selectedIds.has(file.id) ? " tc-file-item--selected" : ""}${file.status !== "complete" ? " tc-file-item--pending" : ""}`}
                                onClick={() => file.status === "complete" && handleToggleSelect(file.id)}
                            >
                                <input
                                    type="checkbox"
                                    className="tc-file-checkbox"
                                    checked={selectedIds.has(file.id)}
                                    onChange={() => handleToggleSelect(file.id)}
                                    disabled={file.status !== "complete"}
                                    onClick={(e) => e.stopPropagation()}
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
                                    <button
                                        className="tc-file-dl-btn"
                                        onClick={(e) => { e.stopPropagation(); handleDownload(file); }}
                                        disabled={file.status !== "complete" || processing}
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="tc-queue-ft">
                        <span className="tc-queue-ft-info">{completedCount} of {files.length} converted</span>
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
                                <p className="tc-recent-sizes">{formatBytes(file.originalSize)} → {formatBytes(file.convertedSize)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
