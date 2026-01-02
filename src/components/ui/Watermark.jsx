import React from 'react';

export function Watermark({ activeSection }) {
  const isLightSection = ['about', 'history', 'calculator', 'model'].includes(activeSection);
  
  return (
    <div 
      className={`watermark ${isLightSection ? 'watermark-dark' : 'watermark-light'}`}
      aria-hidden="true"
    />
  );
}
