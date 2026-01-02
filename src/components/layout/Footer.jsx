import React from 'react';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <p className="text-white text-2xl tracking-wide font-light mb-2" style={{ fontFamily: 'Papyrus, fantasy' }}>K-LIFE Investments</p>
            <p className="text-base">Sri Lanka</p>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-sm text-stone-500 font-sans-refined">
          © 2024 K-LIFE Investments. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

