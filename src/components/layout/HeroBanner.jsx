import React from "react";

function HeroBanner({ children, className = "", imgClass = "" }) {
  return (
    <div className={`relative w-full ${className}`}>
      <img
        src="/images/hero/nagy_arnold.jpg"
        alt="Hero Banner"
        className={`w-full h-full object-cover ${imgClass}`}
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20">{children}</div>
    </div>
  );
}

export default HeroBanner;
