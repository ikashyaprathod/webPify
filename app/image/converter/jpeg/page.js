import ImageConverter from "@/components/ImageConverter";

export const metadata = {
    title: "Image to JPEG Converter – Convert Images to JPG Online",
    description: "Convert PNG and WebP images to JPEG format easily.",
};

export default function JPEGConverterPage() {
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
                <a href="/image/converter">← Back to Converter Hub</a> | <a href="/image/compressor/jpeg">Compress JPEG instead →</a>
            </div>

            <ImageConverter
                outputFormat="image/jpeg"
                outputFormatName="JPEG"
                title="Convert Image to JPEG"
                description="Convert PNG, WebP, and other images to JPEG format for maximum compatibility across all devices and platforms."
            />
        </>
    );
}
