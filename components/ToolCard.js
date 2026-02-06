"use client";

import Link from "next/link";

export default function ToolCard({ title, description, buttonText, href }) {
  return (
    <div className="tool-card">
      <div className="tool-card-content">
        <h2 className="tool-title">{title}</h2>
        <p className="tool-description">{description}</p>
        <Link href={href} className="tool-button">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
