/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Performance optimisations ──
  compiler: {
    // Supprime les console.log en production
    removeConsole: process.env.NODE_ENV === "production",
  },
  // ── Images ──
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "**.vertexlink.fr" },
    ],
  },
  // ── Headers sécurité ──
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",          value: "DENY" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  // ── Experimental ──
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
};

module.exports = nextConfig;
