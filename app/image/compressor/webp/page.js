import ImageCompressor from "@/components/ImageCompressor";

export const metadata = {
    title: "WebP Image Compressor – Reduce WebP File Size Online",
    description: "Compress WebP images online without visible quality loss.",
};

export default function WebPCompressorPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
        .tool-navigation {
          text-align: center;
          margin-bottom: 2rem;
          padding: 1rem;
        }
        .tool-navigation a {
          color: var(--primary);
          text-decoration: none;
          font-size: 0.875rem;
          margin: 0 0.5rem;
        }
        .tool-navigation a:hover {
          text-decoration: underline;
        }
      `}} />

            <div className="tool-navigation">
                <a href="/image/compressor">← Back to Compressor Hub</a> | <a href="/image/converter/webp">Convert to WebP instead →</a>
            </div>

            <ImageCompressor
                allowedFormats={['image/webp']}
                formatName="WebP"
                title="WebP Image Compressor"
                description="Compress WebP images without quality loss using professional Sharp compression. Reduces file size by 50-80% while preserving transparency and format."
            />
        </>
    );
}
