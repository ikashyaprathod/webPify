import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name:             "WebPify — Free Image & Video Tools",
        short_name:       "WebPify",
        description:      "Compress and convert images, videos & GIFs. Free, private, no limits.",
        start_url:        "/",
        display:          "standalone",
        background_color: "#ffffff",
        theme_color:      "#6366f1",
        orientation:      "any",
        categories:       ["utilities", "productivity"],
        icons: [
            { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
            { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
            { src: "/file.svg",     sizes: "any",      type: "image/svg+xml" },
        ],
        shortcuts: [
            { name: "Image Converter",  url: "/image/convert",   description: "Convert images to WebP, PNG, JPEG" },
            { name: "Image Compressor", url: "/image/compress",  description: "Compress JPG, PNG, WebP, HEIC" },
            { name: "Video Compressor", url: "/video/compress",  description: "Compress MP4, MOV, WebM & more" },
            { name: "Image Resizer",    url: "/image/resize",    description: "Resize images to any dimension" },
        ],
    };
}
