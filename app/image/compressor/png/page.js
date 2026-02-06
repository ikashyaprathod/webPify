import ImageCompressor from "@/components/ImageCompressor";

export const metadata = {
    title: "PNG Image Compressor – Compress PNG Without Quality Loss",
    description: "Compress PNG images online without changing format. Preserve transparency and quality.",
};

export default function PNGCompressorPage() {
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
                <a href="/image/compressor">← Back to Compressor Hub</a> | <a href="/image/converter/png">Convert to PNG instead →</a>
            </div>

            <ImageCompressor
                allowedFormats={['image/png']}
                formatName="PNG"
                title="PNG Image Compressor"
                description="Compress PNG images without quality loss using professional pngquant compression. Reduces file size by 60-90% while preserving transparency and format."
            />
        </>
    );
}
