import HomeHero from "@/components/HomeHero";

export const metadata = {
  title: "Webpifyy – Free Image, Video & GIF Tools Online",
  description:
    "Compress, convert and optimize images, videos and GIFs entirely in your browser. WebP, PNG, JPEG, MP4, MOV, SVG — all free, instant and 100% private.",
  alternates: { canonical: "https://webpifyy.vercel.app/" },
  keywords: [
    "image compressor", "compress images online", "convert to webp",
    "video compressor", "compress mp4", "gif compressor", "svg optimizer",
    "image resizer", "free image tools", "webpify",
  ],
  openGraph: {
    title: "Webpifyy – Free Image, Video & GIF Tools Online",
    description:
      "Compress, convert and optimize images, videos and GIFs entirely in your browser. WebP, PNG, JPEG, MP4, MOV, SVG — all free, instant and 100% private.",
    url: "https://webpifyy.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webpifyy – Free Image, Video & GIF Tools Online",
    description:
      "Compress, convert and optimize images, videos and GIFs entirely in your browser. Free, instant, 100% private.",
  },
};

const homeFaqs = [
  {
    question: "Is Webpifyy completely free?",
    answer: "Yes. All tools are 100% free with no file size limits, no watermarks, and no sign-up required.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer: "Image tools (compression, conversion, resizing) use server-side Sharp processing. Video and GIF tools run entirely in your browser using FFmpeg.wasm — no upload at all.",
  },
  {
    question: "Which image formats does Webpifyy support?",
    answer: "PNG, JPEG, WebP, AVIF, and SVG are all supported. You can compress, convert between formats, or resize to any dimension.",
  },
  {
    question: "How much can I reduce an image file size?",
    answer: "PNG images typically compress 60–90%. JPEG images compress 40–90% with mozjpeg. Converting to WebP saves an additional 25–35% over PNG/JPEG.",
  },
  {
    question: "How much can I reduce a video file size?",
    answer: "Most videos compress 50–80% with minimal visible quality loss using our Balanced preset. Our Maximum Compression preset pushes further for the smallest possible files.",
  },
  {
    question: "What makes Webpifyy different from other tools?",
    answer: "Video and GIF processing happens entirely client-side using FFmpeg.wasm, so your files never leave your device. Image tools use professional algorithms (pngquant, mozjpeg, Sharp) for best-in-class compression quality.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://webpifyy.vercel.app/#tools",
        "name": "Free Image & Video Optimization Tools",
        "description": "Professional online tools for image compression, conversion, video compression, GIF optimization, and SVG optimization.",
        "numberOfItems": 6,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Image Compressor", "url": "https://webpifyy.vercel.app/image/compressor" },
          { "@type": "ListItem", "position": 2, "name": "Image Converter", "url": "https://webpifyy.vercel.app/image/converter" },
          { "@type": "ListItem", "position": 3, "name": "Image Resizer", "url": "https://webpifyy.vercel.app/image/resizer" },
          { "@type": "ListItem", "position": 4, "name": "Video Compressor", "url": "https://webpifyy.vercel.app/video/compressor" },
          { "@type": "ListItem", "position": 5, "name": "GIF Compressor", "url": "https://webpifyy.vercel.app/gif/compressor" },
          { "@type": "ListItem", "position": 6, "name": "SVG Optimizer", "url": "https://webpifyy.vercel.app/svg-optimizer" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeHero />
    </>
  );
}
