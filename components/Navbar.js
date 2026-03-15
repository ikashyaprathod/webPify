"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav-header">
      <div className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-icon">🛠</div>
            <span className="nav-logo-text">webpifyy</span>
          </Link>
          <nav className="nav-links">
            <Link href="/image/converter" className="nav-link">Tools</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>
        </div>
        <div className="nav-right">
          <div className="nav-search">
            <span className="nav-search-icon">🔍</span>
            <input
              className="nav-search-input"
              type="text"
              placeholder="Search tools..."
              readOnly
            />
          </div>
          <a href="/image" className="nav-signup">Get Started</a>
        </div>
      </div>
    </header>
  );
}
