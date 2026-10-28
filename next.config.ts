import type { NextConfig } from "next";

// GitHub Pages はリポジトリ名のサブパス（/ui-catalog-demo）で配信されるので、CI からだけ basePath を渡す
const basePath = process.env.PAGES_BASE_PATH;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
