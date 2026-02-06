import ImageConverter from "@/components/ImageConverter";

export const metadata = {
    title: "Image to WebP Converter – Convert Images to WebP Online",
    description: "Convert PNG and JPEG images to WebP with smaller file size and high quality.",
};

export default function WebPConverterPage() {
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
                <a href="/image/converter">← Back to Converter Hub</a> | <a href="/image/compressor/webp">Compress WebP instead →</a>
            </div>

            <ImageConverter
                outputFormat="image/webp"
                outputFormatName="WebP"
                title="Convert Image to WebP"
                description="Convert PNG, JPEG, and other images to WebP format for better compression and web performance."
            />
        </>
    );
}
