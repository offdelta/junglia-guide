import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "ジャングリア沖縄 整理券配布場所｜ジャングル エクストリームズ レセプションはどこ？完全ガイド2025",
  description: "ジャングリア沖縄の整理券配布場所「ジャングル エクストリームズ レセプション」への行き方を9枚の写真で徹底解説。開園前の待機場所から最短5分で到着。整理券取得のコツ、営業時間、料金、アクセス情報も掲載。初めての方でも迷わない完全ガイド。",
  keywords: "ジャングリア沖縄,整理券,配布場所,ジャングル エクストリームズ レセプション,どこ,場所,整理券取得,行き方,アクセス,待機場所,開園前,ハーネス,アトラクション,受付,窓口,junglia,沖縄テーマパーク,恩納村",
  authors: [{ name: "ジャングリア沖縄 非公式ガイド" }],
  openGraph: {
    title: "ジャングリア沖縄 整理券配布場所への完全ガイド｜ジャングル エクストリームズ レセプション",
    description: "整理券配布場所への最短ルートを9枚の写真で解説。開園2時間前から並ぶべき理由と整理券取得のコツも紹介",
    type: "website",
    locale: "ja_JP",
    url: "https://junglia-guide.vercel.app",
    siteName: "ジャングリア沖縄 整理券配布場所ガイド",
    images: [
      {
        url: "/img/junglia-whole.jpg",
        width: 1200,
        height: 630,
        alt: "ジャングリア沖縄 全体図",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ジャングリア沖縄 整理券配布場所ガイド",
    description: "ジャングル エクストリームズ レセプションへの行き方を画像で解説",
    images: ["/img/junglia-whole.jpg"],
  },
  alternates: {
    canonical: "https://junglia-guide.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/img/favicon-junglia-guide.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/img/favicon-junglia-guide.png',
  },
  verification: {
    google: 'e28d2e3338f6f53a',
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6460633296475804" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-THJ2ZET1EG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-THJ2ZET1EG');
          `}
        </Script>
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6460633296475804"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
