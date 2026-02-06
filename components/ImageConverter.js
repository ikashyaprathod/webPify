"use client";

import { useRef, useState } from "react";

export default function ImageConverter({
    outputFormat = 'image/webp', // Target format
    outputFormatName = "WebP", // Display name (e.g., "WebP", "PNG", "JPEG")
    title = "Image Converter",
    description = "Convert images to a different format",
}) {
    const [files, setFiles] = useState([]);
    const [processing, setProcessing] = useState(false);
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [errorMessage, setErrorMessage] = useState("");
    const fileInputRef = useRef(null);

    // Map output format to API target format
    const getTargetFormat = (format) => {
        if (format === 'image/webp') return 'webp';
        if (format === 'image/png') return 'png';
        if (format === 'image/jpeg') return 'jpeg';
        return 'webp';
    };

    const convertImage = async (file, updateProgress) => {
        try {
            updateProgress("uploading", "Uploading to server...");

            const formData = new FormData();
            formData.append('file', file);
            formData.append('targetFormat', getTargetFormat(outputFormat));

            const response = await fetch('/api/convert', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Conversion failed');
            }

            updateProgress("converting", `Converting to ${outputFormatName}...`);

            const blob = await response.blob();

            const originalSize = parseInt(response.headers.get('X-Original-Size') || file.size);
            const convertedSize = parseInt(response.headers.get('X-Converted-Size') || blob.size);

            // Create new filename with correct extension
            const extension = getTargetFormat(outputFormat);
            const baseName = file.name.replace(/\\.[^/.]+$/, "");
            const newFileName = `${baseName}.${extension}`;

            const convertedFile = new File([blob], newFileName, {
                type: outputFormat,
                lastModified: Date.now(),
            });

            updateProgress("complete", "Complete");

            return {
                id: Math.random().toString(36).substr(2, 9),
                originalFile: file,
                convertedFile,
                originalSize,
                convertedSize,
                preview: URL.createObjectURL(blob),
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
            if (!isImage) {
                setErrorMessage(`Unsupported file type: ${file.name}. Please upload an image file.`);
            }
            return isImage;
        });

        if (validFiles.length === 0) {
            setProcessing(false);
            return;
        }

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

                const updateProgress = (status, message) => {
                    setFiles((prev) =>
                        prev.map((f) =>
                            f.id === tempId ? { ...f, status, statusMessage: message } : f
                        )
                    );
                };

                if (validFiles.length > 1) {
                    updateProgress("processing", `Processing ${i + 1} of ${validFiles.length} images...`);
                }

                try {
                    const result = await convertImage(file, updateProgress);
                    setFiles((prev) => prev.map((f) => (f.id === tempId ? result : f)));
                    setSelectedIds((prev) => new Set([...prev, result.id]));
                } catch (error) {
                    let friendlyMessage = "Conversion failed. Please try again.";

                    if (error.message.includes('too large') || error.message.includes('10MB')) {
                        friendlyMessage = `Image too large: ${file.name}. Max size is 10MB.`;
                    } else if (error.message.includes('Unsupported') || error.message.includes('file type')) {
                        friendlyMessage = `Unsupported file type: ${file.name}`;
                    } else if (error.message.includes('Failed to convert')) {
                        friendlyMessage = `Conversion failed for ${file.name}. Please try again.`;
                    }

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

    const handleFileSelect = (e) => {
        if (e.target.files?.length) {
            processFiles(e.target.files);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files?.length) {
            processFiles(e.dataTransfer.files);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        if (!processing) {
            fileInputRef.current?.click();
        }
    };

    const handleDownload = (file) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(file.convertedFile);
        link.download = file.convertedFile.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSelectAll = () => {
        setSelectedIds(new Set(files.filter((f) => f.status === "complete").map((f) => f.id)));
    };

    const handleSelectNone = () => {
        setSelectedIds(new Set());
    };

    const handleToggleSelect = (id) => {
        const newSelected = new Set(selectedIds);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedIds(newSelected);
    };

    const handleDownloadSelected = () => {
        files
            .filter((f) => selectedIds.has(f.id) && f.status === "complete")
            .forEach((file) => {
                handleDownload(file);
            });
    };

    const handleClearError = () => {
        setErrorMessage("");
    };

    const handleReset = () => {
        setFiles([]);
        setSelectedIds(new Set());
        setErrorMessage("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const formatBytes = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
    };

    return (
        <div style={{ minHeight: "100vh", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: "800px", width: "100%", textAlign: "center" }}>
                <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 700 }}>
                    {title}
                </h1>
                <p style={{ fontSize: "1.125rem", marginBottom: "2rem", opacity: 0.8 }}>
                    {description}
                </p>

                {errorMessage && (
                    <div style={{ padding: "1rem", marginBottom: "1.5rem", background: "#fee", border: "1px solid #fcc", borderRadius: "8px", color: "#c00", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span>{errorMessage}</span>
                        <button onClick={handleClearError} style={{ background: "none", border: "none", color: "#c00", cursor: "pointer", fontSize: "1.25rem", fontWeight: "bold" }}>×</button>
                    </div>
                )}

                {files.length === 0 ? (
                    <div onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver} style={{ border: "2px dashed var(--primary)", borderRadius: "12px", padding: "3rem 2rem", cursor: processing ? "not-allowed" : "pointer", transition: "all 0.3s ease", background: processing ? "#f5f5f5" : "transparent" }}>
                        <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileSelect} style={{ display: "none" }} />
                        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔄</div>
                        <p style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                            {processing ? "Converting..." : "Drop images here or click to select"}
                        </p>
                        <p style={{ fontSize: "0.875rem", opacity: 0.6 }}>
                            Converts to {outputFormatName} • Max 10MB per file
                        </p>
                    </div>
                ) : (
                    <>
                        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <button onClick={handleClick} disabled={processing} style={{ padding: "0.625rem 1.25rem", background: "var(--primary)", color: "white", border: "none", borderRadius: "6px", cursor: processing ? "not-allowed" : "pointer", fontWeight: 600, opacity: processing ? 0.6 : 1 }}>Add More Images</button>
                            <button onClick={handleSelectAll} style={{ padding: "0.625rem 1.25rem", background: "#6c757d", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}>Select All</button>
                            <button onClick={handleSelectNone} style={{ padding: "0.625rem 1.25rem", background: "#6c757d", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}>Select None</button>
                            <button onClick={handleDownloadSelected} disabled={selectedIds.size === 0 || processing} style={{ padding: "0.625rem 1.25rem", background: "#28a745", color: "white", border: "none", borderRadius: "6px", cursor: (selectedIds.size === 0 || processing) ? "not-allowed" : "pointer", fontWeight: 600, opacity: (selectedIds.size === 0 || processing) ? 0.6 : 1 }}>Download Selected ({selectedIds.size})</button>
                            <button onClick={handleReset} style={{ padding: "0.625rem 1.25rem", background: "#dc3545", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: 600 }}>Reset</button>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {files.map((file) => (
                                <div key={file.id} style={{ border: selectedIds.has(file.id) ? "2px solid var(--primary)" : "2px solid #e0e0e0", borderRadius: "8px", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem", background: "white", cursor: file.status === "complete" ? "pointer" : "default", opacity: file.status === "complete" ? 1 : 0.7 }} onClick={() => file.status === "complete" && handleToggleSelect(file.id)}>
                                    <input type="checkbox" checked={selectedIds.has(file.id)} onChange={() => handleToggleSelect(file.id)} disabled={file.status !== "complete"} style={{ width: "20px", height: "20px", cursor: "pointer" }} />
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
                                                    {formatBytes(file.originalSize)} → {formatBytes(file.convertedSize)}
                                                </p>
                                                {file.statusMessage && (
                                                    <p style={{ fontSize: "0.75rem", color: "#28a745", marginTop: "0.25rem", fontWeight: 600 }}>{file.statusMessage}</p>
                                                )}
                                            </>
                                        ) : (
                                            <p style={{ fontSize: "0.875rem", color: "#0070f3", fontWeight: 600 }}>{file.statusMessage}</p>
                                        )}
                                    </div>
                                    <button onClick={(e) => { e.stopPropagation(); handleDownload(file); }} disabled={file.status !== "complete" || processing} style={{ padding: "0.5rem 1rem", background: (file.status === "complete" && !processing) ? "var(--primary)" : "#ccc", color: "white", border: "none", borderRadius: "6px", cursor: (file.status === "complete" && !processing) ? "pointer" : "not-allowed", fontWeight: 600, fontSize: "0.875rem" }}>Download</button>
                                </div>
                            ))}
                        </div>

                        <input ref={fileInputRef} type="file" accept="image/*" multiple onChange={handleFileSelect} style={{ display: "none" }} />
                    </>
                )}
            </div>
        </div>
    );
}
