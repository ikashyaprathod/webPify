"use client";

import { useState } from "react";

/**
 * Shared Before/After image comparison slider.
 * Props:
 *   beforeUrl  — URL for the "before" (left) image
 *   afterUrl   — URL for the "after" (right) image
 *   beforeLabel — text label (default "Before")
 *   afterLabel  — text label (default "After")
 */
export default function BeforeAfterSlider({
    beforeUrl,
    afterUrl,
    beforeLabel = "Before",
    afterLabel  = "After",
}) {
    const [pos, setPos] = useState(50);

    return (
        <div className="ba-wrap" style={{ userSelect: "none" }}>
            <div className="ba-container">
                {/* After image (full width, behind) */}
                <img src={afterUrl} alt={afterLabel} className="ba-img ba-img--after" />

                {/* Before image (clipped left portion) */}
                <div className="ba-clip" style={{ width: pos + "%" }}>
                    <img src={beforeUrl} alt={beforeLabel} className="ba-img ba-img--before" />
                </div>

                {/* Divider + handle */}
                <div className="ba-divider" style={{ left: pos + "%" }}>
                    <div className="ba-handle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5l-7 7 7 7V5zm8 0v14l7-7-7-7z" />
                        </svg>
                    </div>
                </div>

                {/* Invisible range input drives the slider */}
                <input
                    type="range" min="0" max="100" value={pos}
                    onChange={e => setPos(+e.target.value)}
                    className="ba-slider"
                />

                <span className="ba-label ba-label--left">{beforeLabel}</span>
                <span className="ba-label ba-label--right">{afterLabel}</span>
            </div>
        </div>
    );
}
