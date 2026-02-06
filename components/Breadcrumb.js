"use client";

import Link from "next/link";

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        {index < items.length - 1 ? (
                            <Link href={item.href}>{item.label}</Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
