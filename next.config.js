/** @type {import('next').NextConfig} */

const isDevelopment = process.env.NODE_ENV !== "production";

// Development дээр /bnm/* rewrites
const devRewrites = isDevelopment
  ? [
      {
        source: "/:path*/bnm/:path*",
        destination: `${process.env.NEXT_PUBLIC_BNM_API_HOST}/:path*`,
      },
    ]
  : [];

// Production дээр /api/* rewrites (backend API руу дамжуулах)
// Vercel дээр environment variable-аас backend API хаягийг авна
const apiHost =
  process.env.NEXT_PUBLIC_LOCAL_API_HOST ||
  process.env.NEXT_PUBLIC_API_HOST ||
  process.env.NEXT_PUBLIC_BNM_API_HOST ||
  "";

// Production дээр /api/* болон /web/* rewrites тохируулах
// Хэрэв apiHost байвал rewrites идэвхжүүлнэ
const prodRewrites =
  !isDevelopment && apiHost
    ? [
        {
          source: "/web/:path*",
          destination: `${apiHost}/web/:path*`,
        },
      ]
    : [];

// Production дээр apiHost байхгүй бол rewrites хоосон байх
// Гэхдээ HttpRequest класс rewrites ашиглахаар тохируулсан тул
// Vercel дээр environment variable тохируулах шаардлагатай
const rewritesConfig = [...devRewrites, ...prodRewrites];

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: {
  //   optimizePackageImports: [
  //     "@mantine/core",
  //     "@mantine/hooks",
  //     "@mantine/modals",
  //     "@mantine/dates",
  //   ],
  // },
  experimental: {
    optimizeCss: true,
    // workerThreads: true, // Disabled due to webpack config serialization issue in Next.js 15
    optimizePackageImports: [
      "@headlessui/react",
      "@heroui/react",
      "react-select",
      "react-hook-form",
      "@tabler/icons-react",
      "framer-motion",
      "react-scroll",
      "react-map-gl",
      "mapbox-gl",
    ],
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.alicdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "*.alicdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.taobao.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-goodtech.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-azod.zto.mn",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "*.bananamall.mn",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // Handle externals properly for Next.js 15
    const existingExternals = Array.isArray(config.externals)
      ? config.externals
      : config.externals
        ? [config.externals]
        : [];
    config.externals = [...existingExternals, { canvas: "canvas" }]; // required to make Konva & react-konva work
    return config;
  },
  rewrites: async () => rewritesConfig,
};

module.exports = withBundleAnalyzer(nextConfig);
