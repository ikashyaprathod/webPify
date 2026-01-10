"use client";

import { useRef, useState } from "react";

export default function WebPTool() {
    const fileInputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [converting, setConverting] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState(new Set());
    const [error, setError] = useState("");
    const [progress, setProgress] = useState({ current: 0, total: 0 });

    const convertToWebP = async (file) => {
        return new Promise((resolve, reject) => {
            // Validate file type
            if (!file.type.startsWith("image/")) {
                reject(new Error("Invalid file type"));
                return;
            }

            const img = new Image();
            const reader = new FileReader();

            // Set timeout for conversion
            const timeout = setTimeout(() => {
                reject(new Error("Conversion timeout"));
            }, 30000); // 30 second timeout

            reader.onerror = () => {
                clearTimeout(timeout);
                reject(new Error("Failed to read file"));
            };

            reader.onload = (e) => {
                img.src = e.target.result;
            };

            img.onerror = () => {
                clearTimeout(timeout);
                reject(new Error("Failed to load image"));
            };

            img.onload = () => {
                try {
                    const compressImage = (width, height, isRetry = false) => {
                        const canvas = document.createElement("canvas");
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0, width, height);

                        const minSize = 50 * 1024; // 50KB
                        const maxSize = 60 * 1024; // 60KB
                        const minQuality = 0.75;
                        const qualityStep = 0.03;
                        let currentQuality = 0.95;
                        let bestBlob = null;
                        let bestQuality = currentQuality;

                        const tryConvert = (quality) => {
                            canvas.toBlob(
                                (blob) => {
                                    if (!blob) {
                                        clearTimeout(timeout);
                                        reject(new Error("Failed to create blob"));
                                        return;
                                    }

                                    // Store best blob
                                    if (!bestBlob || blob.size <= maxSize) {
                                        bestBlob = blob;
                                        bestQuality = quality;
                                    }

                                    // Perfect range: 50-60KB
                                    if (blob.size >= minSize && blob.size <= maxSize) {
                                        clearTimeout(timeout);
                                        resolve({
                                            blob: blob,
                                            size: (blob.size / 1024).toFixed(2),
                                            originalName: file.name,
                                        });
                                        return;
                                    }

                                    // Still too big and can reduce quality more
                                    if (blob.size > maxSize && quality > minQuality) {
                                        tryConvert(Math.max(quality - qualityStep, minQuality));
                                        return;
                                    }

                                    // Too small but quality is at minimum - use best result
                                    if (blob.size < minSize && quality <= minQuality) {
                                        clearTimeout(timeout);
                                        resolve({
                                            blob: bestBlob,
                                            size: (bestBlob.size / 1024).toFixed(2),
                                            originalName: file.name,
                                        });
                                        return;
                                    }

                                    // Reached minimum quality
                                    if (quality <= minQuality) {
                                        // Still too big? Try downscaling
                                        if (blob.size > maxSize && !isRetry) {
                                            const newWidth = Math.round(width * 0.9);
                                            const newHeight = Math.round(height * 0.9);
                                            compressImage(newWidth, newHeight, true);
                                        } else {
                                            // Use best result we have
                                            clearTimeout(timeout);
                                            resolve({
                                                blob: bestBlob,
                                                size: (bestBlob.size / 1024).toFixed(2),
                                                originalName: file.name,
                                            });
                                        }
                                        return;
                                    }

                                    // Continue reducing quality
                                    tryConvert(Math.max(quality - qualityStep, minQuality));
                                },
                                "image/webp",
                                quality
                            );
                        };

                        tryConvert(currentQuality);
                    };

                    // Start with original dimensions
                    compressImage(img.width, img.height);
                } catch (err) {
                    clearTimeout(timeout);
                    reject(err);
                }
            };

            reader.readAsDataURL(file);
        });
    };

    const processFiles = async (fileList) => {
        if (fileList.length === 0) return;

        setConverting(true);
        setError("");
        setProgress({ current: 0, total: fileList.length });

        const convertedFiles = [];
        const errors = [];

        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            try {
                const result = await convertToWebP(file);
                convertedFiles.push({
                    id: `${Date.now()}-${Math.random()}`,
                    name: result.originalName.replace(/\.[^/.]+$/, ".webp"),
                    size: result.size,
                    blob: result.blob,
                });
                setProgress({ current: i + 1, total: fileList.length });
            } catch (err) {
                console.error(`Failed to convert ${file.name}:`, err);
                errors.push(file.name);
                setProgress({ current: i + 1, total: fileList.length });
            }
        }

        if (convertedFiles.length > 0) {
            setFiles((prev) => [...prev, ...convertedFiles]);
        }

        if (errors.length > 0) {
            setError(`Failed to convert: ${errors.join(", ")}`);
        }

        setConverting(false);
        setProgress({ current: 0, total: 0 });

        // Reset file input
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleFileSelect = async (e) => {
        const selectedFiles = Array.from(e.target.files || []);
        await processFiles(selectedFiles);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files || []);
        await processFiles(droppedFiles);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleClick = () => {
        if (!converting) {
            fileInputRef.current?.click();
        }
    };

    const handleDownload = (file) => {
        const url = URL.createObjectURL(file.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleSelectAll = () => {
        setSelectedFiles(new Set(files.map((f) => f.id)));
    };

    const handleSelectNone = () => {
        setSelectedFiles(new Set());
    };

    const handleToggleSelect = (id) => {
        const newSelected = new Set(selectedFiles);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedFiles(newSelected);
    };

    const handleDownloadSelected = () => {
        files
            .filter((f) => selectedFiles.has(f.id))
            .forEach((f) => {
                setTimeout(() => handleDownload(f), 100);
            });
    };

    const handleClearError = () => {
        setError("");
    };

    const handleReset = () => {
        setFiles([]);
        setSelectedFiles(new Set());
        setError("");
        setProgress({ current: 0, total: 0 });
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const progressPercentage =
        progress.total > 0 ? (progress.current / progress.total) * 100 : 0;

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.uploadBox,
                    ...(converting ? styles.uploadBoxDisabled : {}),
                }}
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <div style={styles.icon}>☁️</div>
                <p style={styles.text}>
                    {converting
                        ? `Processing ${progress.current} of ${progress.total}...`
                        : "Drop files here or click to upload"}
                </p>

                {converting && (
                    <div style={styles.progressContainer}>
                        <div style={styles.progressBar}>
                            <div
                                style={{
                                    ...styles.progressFill,
                                    width: `${progressPercentage}%`,
                                }}
                            />
                        </div>
                        <span style={styles.progressText}>
                            {Math.round(progressPercentage)}%
                        </span>
                    </div>
                )}

                <button
                    style={{
                        ...styles.button,
                        ...(converting ? styles.buttonDisabled : {}),
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleClick();
                    }}
                    disabled={converting}
                >
                    {converting ? "Processing..." : "Choose files"}
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif,image/bmp,image/tiff,image/webp"
                    multiple
                    onChange={handleFileSelect}
                    style={styles.hiddenInput}
                />
            </div>

            {error && (
                <div style={styles.errorBox}>
                    <span style={styles.errorText}>{error}</span>
                    <button style={styles.errorClose} onClick={handleClearError}>
                        ✕
                    </button>
                </div>
            )}

            {files.length > 0 && (
                <div style={styles.resultsContainer}>
                    <div style={styles.controls}>
                        <button style={styles.controlBtn} onClick={handleSelectAll}>
                            Select all
                        </button>
                        <button style={styles.controlBtn} onClick={handleSelectNone}>
                            Select none
                        </button>
                        <button
                            style={{
                                ...styles.controlBtn,
                                ...styles.downloadBtn,
                                ...(selectedFiles.size === 0 ? styles.downloadBtnDisabled : {}),
                            }}
                            onClick={handleDownloadSelected}
                            disabled={selectedFiles.size === 0}
                        >
                            Download selected ({selectedFiles.size})
                        </button>
                        <button
                            style={{
                                ...styles.controlBtn,
                                ...styles.resetBtn,
                            }}
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>

                    <div style={styles.fileList}>
                        {files.map((file, index) => (
                            <div
                                key={file.id}
                                style={{
                                    ...styles.fileRow,
                                    animationDelay: `${index * 0.05}s`,
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedFiles.has(file.id)}
                                    onChange={() => handleToggleSelect(file.id)}
                                    style={styles.checkbox}
                                />
                                <span style={styles.fileName}>{file.name}</span>
                                <span style={styles.fileSize}>{file.size} KB</span>
                                <button
                                    style={styles.downloadFileBtn}
                                    onClick={() => handleDownload(file)}
                                >
                                    Download
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
    },
    uploadBox: {
        width: "100%",
        maxWidth: "500px",
        minHeight: "250px",
        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        borderRadius: "24px",
        padding: "2.5rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3)",
    },
    uploadBoxDisabled: {
        opacity: 0.7,
        cursor: "not-allowed",
    },
    icon: {
        fontSize: "3.5rem",
        marginBottom: "0.5rem",
        transition: "transform 0.3s ease",
    },
    text: {
        color: "white",
        fontSize: "1.125rem",
        fontWeight: "500",
        textAlign: "center",
        margin: 0,
        transition: "opacity 0.3s ease",
    },
    progressContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
    },
    progressBar: {
        width: "100%",
        height: "8px",
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "4px",
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        background: "white",
        borderRadius: "4px",
        transition: "width 0.3s ease",
    },
    progressText: {
        color: "white",
        fontSize: "0.875rem",
        fontWeight: "600",
    },
    button: {
        padding: "0.875rem 2rem",
        background: "white",
        color: "#059669",
        border: "none",
        borderRadius: "12px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    buttonDisabled: {
        opacity: 0.6,
        cursor: "not-allowed",
    },
    hiddenInput: {
        display: "none",
    },
    errorBox: {
        width: "100%",
        maxWidth: "500px",
        padding: "1rem 1.25rem",
        background: "#fee2e2",
        border: "1px solid #fca5a5",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        animation: "slideIn 0.3s ease",
    },
    errorText: {
        color: "#991b1b",
        fontSize: "0.875rem",
        fontWeight: "500",
        flex: 1,
    },
    errorClose: {
        background: "transparent",
        border: "none",
        color: "#991b1b",
        fontSize: "1.25rem",
        cursor: "pointer",
        padding: "0.25rem",
        lineHeight: 1,
        transition: "transform 0.2s ease",
    },
    resultsContainer: {
        width: "100%",
        maxWidth: "800px",
        animation: "fadeIn 0.4s ease",
    },
    controls: {
        display: "flex",
        gap: "0.75rem",
        marginBottom: "1rem",
        flexWrap: "wrap",
    },
    controlBtn: {
        padding: "0.625rem 1.25rem",
        background: "#f3f4f6",
        color: "#374151",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        fontSize: "0.875rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
    },
    downloadBtn: {
        background: "#10b981",
        color: "white",
        border: "none",
    },
    downloadBtnDisabled: {
        opacity: 0.5,
        cursor: "not-allowed",
    },
    resetBtn: {
        background: "#ef4444",
        color: "white",
        border: "none",
    },
    fileList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
    },
    fileRow: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
        border: "1px solid #e5e7eb",
        transition: "all 0.2s ease",
        animation: "slideInUp 0.3s ease forwards",
        opacity: 0,
    },
    checkbox: {
        width: "18px",
        height: "18px",
        cursor: "pointer",
        transition: "transform 0.2s ease",
    },
    fileName: {
        flex: 1,
        fontSize: "0.9375rem",
        fontWeight: "500",
        color: "#1f2937",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    fileSize: {
        fontSize: "0.875rem",
        color: "#6b7280",
        minWidth: "80px",
        textAlign: "right",
    },
    downloadFileBtn: {
        padding: "0.5rem 1rem",
        background: "#10b981",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontSize: "0.875rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.2s ease",
        whiteSpace: "nowrap",
    },
};

// Add CSS animations via style tag
if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideIn {
      from { 
        opacity: 0;
        transform: translateY(-10px);
      }
      to { 
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    }
    
    button:active:not(:disabled) {
      transform: translateY(0);
    }
    
    .file-row:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    }
  `;
    if (!document.querySelector('style[data-tool-animations]')) {
        styleSheet.setAttribute('data-tool-animations', 'true');
        document.head.appendChild(styleSheet);
    }
}
