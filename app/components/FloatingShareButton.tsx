'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FloatingShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const shareUrl = 'https://junglia-guide.vercel.app';
  const shareTitle = 'ジャングリア沖縄 整理券配布場所への完全ガイド';
  const shareText = 'ジャングル エクストリームズ レセプションへの行き方を9枚の写真で詳しく解説！開園前から整理券配布場所まで迷わずに行ける完全ガイド';

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleShare = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'line':
        url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
        setIsOpen(false);
        return;
      default:
        if (isClient && navigator.share) {
          navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl,
          }).catch((error) => console.log('Error sharing', error));
          setIsOpen(false);
        }
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* シェアアイコンリスト */}
      <div className={`transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-3 mb-3">
          {/* その他のアプリでシェア */}
          {isClient && typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={() => handleShare('native')}
              className="w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-110"
              aria-label="その他のアプリでシェア"
            >
              <span className="text-xs font-bold">その他</span>
            </button>
          )}

          {/* リンクをコピー */}
          <div className="relative">
            <button
              onClick={() => handleShare('copy')}
              className="w-12 h-12 bg-gray-600 hover:bg-gray-700 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-110"
              aria-label="リンクをコピー"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            {showTooltip && (
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap ml-2">
                コピーしました！
              </div>
            )}
          </div>

          {/* LINE */}
          <button
            onClick={() => handleShare('line')}
            className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-110"
            aria-label="LINEでシェア"
          >
            <span className="text-xs font-bold">LINE</span>
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleShare('facebook')}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-110"
            aria-label="Facebookでシェア"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          {/* X (Twitter) */}
          <button
            onClick={() => handleShare('twitter')}
            className="w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group hover:scale-110"
            aria-label="Xでシェア"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* メインシェアボタン */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-white hover:bg-gray-50 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group ${
          isOpen ? 'rotate-45' : ''
        }`}
        aria-label="シェアメニューを開く"
      >
        <Image
          src="/img/share-button.png"
          alt="シェアボタン"
          width={28}
          height={28}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
}