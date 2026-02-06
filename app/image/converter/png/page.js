import ImageConverter from "@/components/ImageConverter";

export const metadata = {
    title: "Image to PNG Converter – Convert Images to PNG Online",
    description: "Convert JPG and WebP images to PNG format while preserving quality.",
};

export default function PNGConverterPage() {
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
                <a href="/image/converter">← Back to Converter Hub</a> | <a href="/image/compressor/png">Compress PNG instead →</a>
            </div>

            <ImageConverter
                outputFormat="image/png"
                outputFormatName="PNG"
                title="Convert Image to PNG"
                description="Convert JPEG, WebP, and other images to PNG format. Supports transparency and lossless compression."
            />
        </>
    );
}
