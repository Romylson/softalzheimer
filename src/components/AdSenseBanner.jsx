// src/components/AdSenseBanner.jsx
import React, { useEffect } from "react";

export default function AdSenseBanner({ adSlot }) {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", maxWidth: "728px", minHeight: "90px" }}
      data-ad-client="ca-pub-8229585402609662"
      data-ad-slot="4166046455"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
