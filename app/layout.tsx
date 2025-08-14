import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ジャングリア沖縄 整理券配布場所 ジャングル エクストリームズ レセプションはどこ？",
  description: "ジャングリア沖縄の整理券配布場所「ジャングル エクストリームズ レセプション」への行き方を画像付きで詳しく解説。開園前の待機場所から整理券配布場所まで迷わずに行ける完全ガイド。",
  keywords: "ジャングリア沖縄,整理券,配布場所,ジャングル エクストリームズ レセプション,整理券取得,場所,行き方,アクセス,待機場所,開園前",
  openGraph: {
    title: "ジャングリア沖縄 整理券配布場所への完全ガイド",
    description: "ジャングル エクストリームズ レセプションへの詳しい行き方を画像付きで解説",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "ジャングリア沖縄 整理券配布場所ガイド",
    description: "ジャングル エクストリームズ レセプションへの行き方",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
