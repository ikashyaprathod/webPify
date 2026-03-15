import PageShell from "@/components/PageShell";
import RemoveBackground from "@/components/RemoveBackground";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Remove Background from Image Free – AI Online Tool",
  description: "Remove image background instantly with AI. Get a transparent PNG in seconds. Free, browser-based, no uploads — powered by WebAssembly.",
  alternates: { canonical: "https://webpifyy.vercel.app/image/edit/remove-background" },
  openGraph: {
    title: "Remove Background from Image Free – AI Online",
    description: "AI-powered background removal. Get transparent PNG instantly. Zero uploads.",
    url: "https://webpifyy.vercel.app/image/edit/remove-background",
  },
};

export default function RemoveBackgroundPage() {
  return (
    <PageShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Image", href: "/image" }, { label: "Edit", href: "/image/edit" }, { label: "Remove Background" }]} />
      <div className="page-hero">
        <span className="page-badge">REMOVE BG</span>
        <h1 className="page-title">Remove Image Background</h1>
        <p className="page-subtitle">Instantly remove the background from any photo using AI. Get a clean, transparent PNG in seconds. Everything runs locally in your browser — your images never leave your device.</p>
      </div>
      <RemoveBackground />
    </PageShell>
  );
}
