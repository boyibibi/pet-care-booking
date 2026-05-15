import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪 Pet Spa | 宠物洗护与精修",
  description: "社区型宠物洗护店官网，支持在线预约、服务展示和门店后台管理。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
