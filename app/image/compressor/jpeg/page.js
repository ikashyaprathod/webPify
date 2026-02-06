import ImageCompressor from "@/components/ImageCompressor";

export const metadata = {
    title: "JPEG Image Compressor – Compress JPG Images Online",
    description: "Compress JPEG and JPG images online while maintaining sharp quality.",
};

export default function JPEGCompressorPage() {
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
                <a href="/image/compressor">← Back to Compressor Hub</a> | <a href="/image/converter/jpeg">Convert to JPEG instead →</a>
            </div>

            <ImageCompressor
                allowedFormats={['image/jpeg']}
                formatName="JPEG"
                title="JPEG Image Compressor"
                description="Compress JPEG/JPG images without visible quality loss using professional mozjpeg compression. Reduces file size by 40-90% while maintaining format."
            />
        </>
    );
}
