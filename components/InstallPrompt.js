"use client";

import { useEffect, useState } from "react";

/**
 * Shows a subtle "Install App" banner when the browser fires
 * the beforeinstallprompt event (Chrome/Edge on Android/Desktop).
 * Dismissed state is persisted in localStorage.
 */
export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [visible,        setVisible]        = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (localStorage.getItem("pwa-dismissed")) return;

        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setVisible(true);
        };
        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        setVisible(false);
        setDeferredPrompt(null);
        if (outcome === "accepted") localStorage.setItem("pwa-dismissed", "1");
    };

    const handleDismiss = () => {
        setVisible(false);
        localStorage.setItem("pwa-dismissed", "1");
    };

    if (!visible) return null;

    return (
        <div style={{
            position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)",
            zIndex: 9999, background: "#6366f1", color: "white",
            borderRadius: 12, padding: "0.75rem 1.25rem",
            display: "flex", alignItems: "center", gap: "0.75rem",
            boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
            fontSize: "0.9rem", fontWeight: 500,
            maxWidth: "calc(100vw - 2rem)", whiteSpace: "nowrap",
        }}>
            <span>📲 Install WebPify for offline use</span>
            <button
                onClick={handleInstall}
                style={{ background: "white", color: "#6366f1", border: "none", borderRadius: 8, padding: "0.35rem 0.85rem", fontWeight: 700, cursor: "pointer", fontSize: "0.85rem" }}
            >Install</button>
            <button
                onClick={handleDismiss}
                style={{ background: "none", border: "none", color: "rgba(255,255,255,0.7)", cursor: "pointer", fontSize: "1.2rem", lineHeight: 1, padding: 0 }}
                title="Dismiss"
            >×</button>
        </div>
    );
}
