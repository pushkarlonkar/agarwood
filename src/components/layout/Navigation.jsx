import React from 'react';

const LOGO_BASE64 = "data:image/webp;base64,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";

export function Navigation({ activeSection }) {
  const isLightSection = ['about', 'history', 'calculator', 'model', 'valuechain'].includes(activeSection);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className={`flex items-center gap-3 transition-all duration-500 ${isLightSection ? 'text-stone-800' : 'text-white'}`}>
          <img 
            src={LOGO_BASE64}
            alt="K-LIFE Logo" 
            className={`w-14 h-14 transition-all duration-500 ${isLightSection ? 'invert' : ''}`}
          />
          <span className="text-xl tracking-wide" style={{ fontFamily: 'Papyrus, fantasy' }}>
            K-LIFE Investments
          </span>
        </div>
        <div className={`flex gap-2 text-sm font-sans-refined tracking-wide transition-colors duration-500 ${isLightSection ? 'text-stone-700' : 'text-white/90'}`}>
          <button 
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${isLightSection ? 'hover:bg-stone-800/10' : 'hover:bg-white/10'}`}
          >
            About
          </button>
          <button 
            onClick={() => document.getElementById('history').scrollIntoView({ behavior: 'smooth' })} 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${isLightSection ? 'hover:bg-stone-800/10' : 'hover:bg-white/10'}`}
          >
            History
          </button>
          <button 
            onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })} 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${isLightSection ? 'hover:bg-stone-800/10' : 'hover:bg-white/10'}`}
          >
            Project
          </button>
          <button 
            onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })} 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${isLightSection ? 'hover:bg-stone-800/10' : 'hover:bg-white/10'}`}
          >
            Model
          </button>
          <button 
            onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })} 
            className={`px-4 py-2 rounded-full transition-all duration-300 ${isLightSection ? 'hover:bg-stone-800/10' : 'hover:bg-white/10'}`}
          >
            Images
          </button>
        </div>
      </div>
    </nav>
  );
}

