/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    rules: {
      // The ThreeUI landing-page entries import authored documents with
      // `?raw`; Turbopack itself has no built-in raw handling.
      "*.html": {
        condition: { query: "?raw" },
        type: "text",
      },
    },
  },
};

export default nextConfig;
