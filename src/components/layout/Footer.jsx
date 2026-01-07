import React from 'react';

export function Footer() {
  return (
    <footer className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900" />
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex items-center gap-3">
            <img 
              src="/images/K_LIFE_LOGO_WHITE_ONLY_CLEAN.png" 
              alt="K-LIFE Logo" 
              className="w-14 h-14"
            />
            <div>
              <p className="text-white text-2xl tracking-wide font-light mb-2" style={{ fontFamily: 'Papyrus, fantasy' }}>K-LIFE Investments</p>
              <p className="text-base text-stone-300">Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-sm text-stone-500 font-sans-refined">
          © 2026 K-LIFE Investments. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
