'use client';

import { useEffect, useRef } from 'react';

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
  const adRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current && adRef.current) {
      try {
        // @ts-expect-error - adsbygoogle is added by Google AdSense script
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, []);

  return (
    <div ref={adRef} className={`adsense-container ${className}`}>
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