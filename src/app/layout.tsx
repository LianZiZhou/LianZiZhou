import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "莲子粥! ✨~",
  description: "这里是莲子粥！🌸 闪亮登场 KiraKira✨~",
};

export const viewport: Viewport = {
  // 与导航栏的 base-100 粉色一致，手机浏览器的地址栏颜色会跟页面连成一体
  themeColor: "#f0d6e8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" data-theme="valentine">
      <body className="antialiased">{children}</body>
    </html>
  );
}
