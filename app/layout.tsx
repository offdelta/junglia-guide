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
