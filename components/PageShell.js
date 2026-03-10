"use client";

/**
 * PageShell — shared animated background wrapper for all inner pages.
 * Provides two soft blobs + dot-grid overlay matching the homepage aesthetic.
 *
 * Props
 *   blob1  – css color / gradient string for top-left blob  (default: blue)
 *   blob2  – css color / gradient string for bottom-right blob (default: purple)
 *   wide   – if true, uses a wider inner container (max-width: 1100px)
 */
export default function PageShell({ children, blob1, blob2, wide = false }) {
  return (
    <div className="page-wrap">
      <div
        className="page-blob page-blob--1"
        style={blob1 ? { background: blob1 } : undefined}
        aria-hidden="true"
      />
      <div
        className="page-blob page-blob--2"
        style={blob2 ? { background: blob2 } : undefined}
        aria-hidden="true"
      />
      <div className="page-dots" aria-hidden="true" />
      <div className={wide ? "page-inner page-inner--wide" : "page-inner"}>
        {children}
      </div>
    </div>
  );
}
