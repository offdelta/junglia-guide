import Image from "next/image";
import Script from "next/script";
import GoogleAdsense from "./components/GoogleAdsense";

export default function Home() {
  const images = [
    { src: "/img/junglia-whole.jpg", alt: "ジャングリア沖縄 全体図" },
    { src: "/img/junglia-ticketarea.jpg", alt: "エリア拡大図【①は開園までの待機場所】" },
    { src: "/img/path1-2.jpg", alt: "経路1-2" },
    { src: "/img/path2.jpg", alt: "経路2" },
    { src: "/img/path3.jpg", alt: "経路3" },
    { src: "/img/path4.jpg", alt: "経路4" },
    { src: "/img/path5.jpg", alt: "経路5" },
    { src: "/img/path567.jpg", alt: "経路5-6-7" },
    { src: "/img/reception.jpg", alt: "レセプション" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "ジャングリア沖縄 整理券配布場所への行き方",
    "description": "ジャングリア沖縄の整理券配布場所「ジャングル エクストリームズ レセプション」への詳しい行き方ガイド",
    "image": images.map(img => `https://junglia-guide.vercel.app${img.src}`),
    "supply": {
      "@type": "HowToSupply",
      "name": "ジャングリア沖縄入園チケット"
    },
    "step": images.map((img, index) => ({
      "@type": "HowToStep",
      "name": `ステップ${index + 1}`,
      "text": img.alt,
      "image": `https://junglia-guide.vercel.app${img.src}`
    }))
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            ジャングリア沖縄<br />
            整理券配布場所
            <br />
            <span className="text-2xl sm:text-3xl text-green-700">
              ジャングル エクストリームズ レセプションはどこ？
            </span>
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-left max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4" itemProp="description">
              ジャングリア沖縄の公式HPでは、ジャングル エクストリームズ レセプションの名称のみが記載されており、
              具体的な場所についての詳細情報がありません。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              このページでは、レセプションまでの道のりを画像付きで順番にご案内します。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://support.junglia.jp/hc/ja/articles/46087536626201-%E6%95%B4%E7%90%86%E5%88%B8%E3%81%AF%E3%81%A9%E3%81%86%E3%81%99%E3%82%8C%E3%81%B0%E5%8F%96%E5%BE%97%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%81%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                公式サイト Q&A - 整理券について
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-3 text-center">
              ※ アトラクションの運営状況や整理券配布の有無は変更される可能性があります。<br />
              最新情報は公式サイトにて事前にご確認ください。
            </p>
          </div>
        </header>

        {/* 広告ユニット - ヘッダー下 */}
        <div className="mb-8">
          <GoogleAdsense 
            slot="1234567890"
            format="auto"
            responsive={true}
            className="mx-auto"
          />
        </div>

        <section className="space-y-8" aria-label="整理券配布場所への道順">
          {images.map((image, index) => (
            <div key={index}>
              <div
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-video">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="text-sm font-medium text-gray-600">
                    ステップ {index + 1} / {images.length}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {image.alt}
                  </p>
                </div>
              </div>
              {/* 3つ目の画像の後に広告を配置 */}
              {index === 2 && (
                <div className="my-8">
                  <GoogleAdsense 
                    slot="1546575791"
                    format="auto"
                    responsive={true}
                    className="mx-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* 広告ユニット - 画像セクション後 */}
        <div className="my-8">
          <GoogleAdsense 
            slot="0987654321"
            format="auto"
            responsive={true}
            className="mx-auto"
          />
        </div>

        <section className="mt-12 bg-yellow-50 border-2 border-yellow-300 rounded-lg shadow-md p-6 max-w-3xl mx-auto" aria-label="整理券取得に関する重要情報">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            重要：整理券取得について
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-red-600 mb-2">アプリでの取得は困難</h3>
              <p>公式アプリでの整理券取得は、アクセス過多により配布開始と同時に終了することがほとんどです。</p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">確実に乗りたい場合の戦略</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>開園と同時にレセプションへダッシュして整理券を取得</li>
                <li>開園直後の空いている時間帯に直接並ぶ</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-orange-600 mb-2">整理券の注意点</h3>
              <p>整理券を持っていても最大90分程度の待ち時間が発生する場合があります。</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <h3 className="font-semibold text-red-700 mb-2">ハーネス系アトラクション（上級者向け）</h3>
              <ul className="list-disc list-inside space-y-1 text-red-700">
                <li className="font-bold">整理券が必須（並ぶことは不可）</li>
                <li>ジャングル エクストリームズ レセプションで受付</li>
                <li>体験希望の場合は開園2時間前から並ぶ必要あり</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-600 text-sm">
          <p>整理券配布場所への道案内</p>
        </footer>
      </main>
    </div>
    </>
  );
}