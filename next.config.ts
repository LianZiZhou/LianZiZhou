import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 纯静态站点：`next build` 会把 HTML/CSS/JS 输出到 ./out
  output: "export",
  images: {
    // 默认的图片优化需要服务器，静态导出时直接使用 /public 里的原图
    unoptimized: true,
  },
  // 注意：脚手架默认开启的 cacheComponents / partialPrefetching（PPR）
  // 与 output: "export" 不兼容（构建报错 "PPR cannot be enabled in export mode"），已移除。
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
