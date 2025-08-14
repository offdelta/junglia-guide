'use client';

import { useEffect } from 'react';

interface GoogleAdsenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  className?: string;
}

export default function GoogleAdsense({ 
  slot, 
  format = 'auto', 
  responsive = true,
  className = ''
}: GoogleAdsenseProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - adsbygoogle is added by Google AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6460633296475804"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}