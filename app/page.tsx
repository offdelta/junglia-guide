import Image from "next/image";
import Script from "next/script";
import GoogleAdsense from "./components/GoogleAdsense";
import FloatingShareButton from "./components/FloatingShareButton";

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

  const faqs = [
    {
      question: "ジャングル エクストリームズ レセプションはどこにありますか？",
      answer: "ジャングル エクストリームズ レセプションは、ジャングリア沖縄の入園ゲートから約5分の場所にあります。メインゲートを通過後、案内標識に従って進むか、本ページの画像ガイドに沿って進んでください。"
    },
    {
      question: "整理券は何時から配布されますか？",
      answer: "整理券は開園時間と同時に配布開始されます。ただし、人気アトラクションの整理券は開園後10-15分で配布終了することが多いため、開園2時間前から並ぶことをおすすめします。"
    },
    {
      question: "整理券なしでアトラクションに乗れますか？",
      answer: "通常のアトラクションは整理券なしでも並んで乗ることができますが、ハーネス系アトラクション（上級者向け）は整理券が必須です。整理券がないと体験できません。"
    },
    {
      question: "アプリで整理券を取得できますか？",
      answer: "公式アプリでも整理券を取得できますが、アクセス集中により配布開始と同時に終了することがほとんどです。確実に取得したい場合は、レセプションで直接取得することをおすすめします。"
    },
    {
      question: "整理券を持っていてもどのくらい待ちますか？",
      answer: "整理券を持っていても、混雑状況により最大90分程度の待ち時間が発生する場合があります。整理券の時間帯に余裕を持って向かうことをおすすめします。"
    },
    {
      question: "レセプションまでの所要時間はどのくらいですか？",
      answer: "入園ゲートからジャングル エクストリームズ レセプションまでは、通常歩いて約5分です。ただし、開園直後は混雑するため10分程度かかる場合があります。"
    },
    {
      question: "車椅子やベビーカーでレセプションまで行けますか？",
      answer: "はい、レセプションまでの経路はバリアフリーに対応しており、車椅子やベビーカーでもアクセス可能です。エレベーターやスロープが整備されています。"
    },
    {
      question: "整理券の配布状況はどこで確認できますか？",
      answer: "整理券の配布状況は、公式アプリで確認できます。リアルタイムで更新されるため、計画的な行動が可能です。"
    }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "ジャングル エクストリームズ レセプション",
      "description": "ジャングリア沖縄のアトラクション整理券配布場所。ハーネス系アトラクションの受付窓口",
      "isPartOf": {
        "@type": "AmusementPark",
        "name": "ジャングリア沖縄",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "沖縄県",
          "addressCountry": "JP"
        }
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

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
            ジャングリア沖縄 整理券配布場所
            <br />
            <span className="text-2xl sm:text-3xl text-green-700">
              ジャングル エクストリームズ レセプションはどこ？
            </span>
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-left max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">整理券配布場所への完全ガイド</h2>
            <p className="text-gray-700 leading-relaxed mb-4" itemProp="description">
              ジャングリア沖縄の公式HPでは「ジャングル エクストリームズ レセプション」という名称のみが記載されており、
              初めて訪れる方には具体的な場所がわかりにくい状況です。特に開園直後の混雑時には、整理券配布場所を探すだけで貴重な時間を失ってしまう可能性があります。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              このページでは、<strong>入園ゲートからジャングル エクストリームズ レセプションまでの最短ルート</strong>を、
              実際の写真を使って詳しくご案内します。開園前の待機場所から整理券配布場所まで、迷うことなく確実にたどり着けるよう、
              <a href="#photo-guide" className="text-red-600 font-bold underline hover:text-red-700 inline-flex items-center">
                以下に9枚の写真
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              で順を追って説明しています。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              ジャングリア沖縄のハーネス系アトラクション（上級者向けアトラクション）を体験するには、
              <strong className="text-red-600">整理券が必須</strong>となっており、整理券なしでは並ぶことすらできません。
              人気アトラクションの整理券は開園後わずか10-15分で配布終了することも珍しくないため、
              効率的な行動が求められます。
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

        {/* 整理券取得のコツセクション */}
        <section className="mb-12 bg-blue-50 rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            整理券を確実に取得するための攻略法
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">開園前の準備</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>開園の<strong>2時間前</strong>には到着し、入園ゲート前で待機</li>
                <li>公式アプリを事前にダウンロードし、ログイン済みの状態にしておく</li>
                <li>レセプションまでのルートを本ページで事前に確認</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">開園直後の行動</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>入園ゲートを通過したら、<strong>迷わずレセプションへ直行</strong></li>
                <li>他のアトラクションには寄らず、整理券確保を最優先</li>
                <li>レセプション到着後、希望のアトラクションの整理券を即座に取得</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="photo-guide" className="space-y-8" aria-label="整理券配布場所への道順">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            画像で見る レセプションまでの道順
          </h2>
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

        {/* FAQセクション */}
        <section className="mt-12 bg-gray-50 rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            よくある質問（FAQ）
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Q: {faq.question}
                </h3>
                <p className="text-gray-700">
                  A: {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ジャングリア沖縄 基本情報 */}
        <section className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ジャングリア沖縄 基本情報
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">営業時間</h3>
              <div className="bg-gray-50 rounded p-4">
                <p className="text-gray-700">
                  <strong>通常営業：</strong>10:00 - 20:00<br />
                  <strong>整理券配布開始：</strong>開園時間と同時<br />
                  <strong>レセプション営業時間：</strong>開園30分前 - 閉園時間まで
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  ※季節や曜日により営業時間が変更される場合があります
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">入園料金</h3>
              <div className="bg-gray-50 rounded p-4">
                <table className="w-full text-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">大人（18歳以上）</td>
                      <td className="py-2 text-right font-semibold">¥7,500</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">中高生（12-17歳）</td>
                      <td className="py-2 text-right font-semibold">¥6,500</td>
                    </tr>
                    <tr>
                      <td className="py-2">小学生以下</td>
                      <td className="py-2 text-right font-semibold">¥5,500</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 mt-2">
                  ※アトラクション利用料は入園料に含まれています（一部有料アトラクションを除く）
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">アクセス</h3>
              <div className="bg-gray-50 rounded p-4">
                <p className="text-gray-700 mb-2">
                  <strong>住所：</strong>沖縄県国頭郡恩納村字山田3425-2
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>車でのアクセス：</strong><br />
                    那覇空港から約60分（沖縄自動車道経由）
                  </p>
                  <p className="text-gray-700">
                    <strong>バスでのアクセス：</strong><br />
                    那覇バスターミナルから路線バス約90分
                  </p>
                  <p className="text-gray-700">
                    <strong>駐車場：</strong><br />
                    有料駐車場完備（普通車 1日¥1,000）
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

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
              <p>公式アプリでの整理券取得は、アクセス過多により配布開始と同時に終了することがほとんどです。
              また、アーリーパークイン（早期入園）の利用者が先に整理券を取得してしまうため、一般入園者がアプリで取得できる枚数は非常に限られています。
              サーバーへの接続エラーが発生することも多く、確実性に欠けます。</p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">確実に乗りたい場合の戦略</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>開園と同時にレセプションへダッシュして整理券を取得</li>
                <li>開園直後の空いている時間帯に整理券には走らず、直接アトラクションに並ぶ</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-orange-600 mb-2">整理券の注意点</h3>
              <p>整理券を持っていても最大90分程度の待ち時間が発生する場合があります。
              指定された時間枠に遅れると無効になるため、時間管理が重要です。</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border-2 border-red-300">
              <h3 className="font-semibold text-red-700 mb-2">ハーネス系アトラクション（上級者向け）</h3>
              <ul className="list-disc list-inside space-y-1 text-red-700">
                <li className="font-bold">整理券が必須（並ぶことは不可）</li>
                <li>ジャングル エクストリームズ レセプションで受付</li>
                <li>体験希望の場合は開園2時間前から並ぶ必要あり</li>
                <li>身長・体重制限あり（詳細は公式サイトで確認）</li>
                <li>サンダル、スカートは不可（サンダルは受付での貸し出しあり）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-12 bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">関連情報・お役立ちリンク</h2>
          <div className="space-y-3">
            <a
              href="https://www.junglia.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-600 font-semibold">ジャングリア沖縄 公式サイト</span>
              <p className="text-sm text-gray-600 mt-1">最新の営業情報・イベント情報はこちら</p>
            </a>
            <a
              href="https://support.junglia.jp/hc/ja"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-600 font-semibold">ジャングリア沖縄 サポートセンター</span>
              <p className="text-sm text-gray-600 mt-1">よくある質問・お問い合わせはこちら</p>
            </a>
          </div>
        </section>

        <footer className="mt-16 text-center text-gray-600 text-sm">
          <p className="mb-2">ジャングリア沖縄 整理券配布場所への完全ガイド</p>
          <p>ジャングル エクストリームズ レセプションへの道案内</p>
          <p className="mt-4 text-xs">
            ※本サイトは個人が運営する非公式ガイドです。<br />
            最新情報は必ず公式サイトでご確認ください。
          </p>
        </footer>
      </main>
      
      {/* フローティングシェアボタン */}
      <FloatingShareButton />
    </div>
    </>
  );
}