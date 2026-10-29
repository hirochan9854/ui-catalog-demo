import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const metadata: Metadata = {
  title: "Nocto — 今夜の星空予報",
  description: "shadcn/ui・Magic UI・Aceternity UI・React Bits を組み合わせたLPのデモ（架空のサービス）",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${jakartaSans.variable} ${shipporiMincho.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
