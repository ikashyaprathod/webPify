import Link from "next/link";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="bc-wrap" aria-label="Breadcrumb">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} style={{ display: "contents" }}>
            {i > 0 && <span className="bc-sep" aria-hidden="true">›</span>}
            {isLast || !item.href ? (
              <span className="bc-current">{item.label}</span>
            ) : (
              <Link href={item.href} className="bc-link">{item.label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
