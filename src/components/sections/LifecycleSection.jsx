import React from 'react';

export function LifecycleSection() {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">
            Visual Journey
          </p>
          <h2 className="text-5xl font-light text-stone-800">
            The Plantation Lifecycle
          </h2>
        </div>
        
        {/* Horizontal Lifecycle SVG */}
        <div className="overflow-x-auto">
          <svg viewBox="0 0 1200 400" className="w-full min-w-[1000px]" style={{ minHeight: '450px' }}>
            <defs>
              {/* Arrow gradient */}
              <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#065f46" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#065f46" stopOpacity="0.6" />
              </linearGradient>
              {/* Resin glow */}
              <radialGradient id="resinGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Stage 1: Seed Planting */}
            <g transform="translate(20, 70)">
              {/* Soil line */}
              <ellipse cx="70" cy="170" rx="50" ry="10" fill="#78716c" fillOpacity="0.15" />
              {/* Seed in soil */}
              <ellipse cx="70" cy="162" rx="12" ry="7" fill="#78716c" fillOpacity="0.4" />
              {/* Small sprout */}
              <path d="M 70 155 Q 70 130 70 115" stroke="#065f46" strokeWidth="3" fill="none" />
              <path d="M 70 125 Q 55 118 62 100" stroke="#065f46" strokeWidth="2.5" fill="none" />
              <ellipse cx="58" cy="95" rx="10" ry="16" fill="#065f46" fillOpacity="0.3" />
              <path d="M 70 125 Q 85 118 78 100" stroke="#065f46" strokeWidth="2.5" fill="none" />
              <ellipse cx="82" cy="95" rx="10" ry="16" fill="#065f46" fillOpacity="0.3" />
              {/* Label */}
              <text x="70" y="210" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Seed Planting</text>
            </g>
            
            {/* Arrow 1 → 2 */}
            <g transform="translate(135, 155)">
              <path d="M 0 25 Q 35 12 70 25" stroke="url(#arrowGrad)" strokeWidth="2" fill="none" />
              <polygon points="70,18 85,25 70,32" fill="#065f46" fillOpacity="0.5" />
            </g>
            
            {/* Stage 2: Tree Growth */}
            <g transform="translate(200, 45)">
              {/* Ground */}
              <ellipse cx="70" cy="195" rx="55" ry="10" fill="#78716c" fillOpacity="0.12" />
              {/* Small tree (behind) */}
              <g opacity="0.35">
                <line x1="40" y1="195" x2="40" y2="145" stroke="#78716c" strokeWidth="3" />
                <ellipse cx="40" cy="130" rx="22" ry="28" fill="#065f46" fillOpacity="0.4" />
              </g>
              {/* Large tree (front) */}
              <line x1="80" y1="195" x2="80" y2="95" stroke="#78716c" strokeWidth="5" />
              <ellipse cx="80" cy="65" rx="40" ry="48" fill="#065f46" fillOpacity="0.25" />
              <ellipse cx="80" cy="58" rx="30" ry="36" fill="#065f46" fillOpacity="0.35" />
              <ellipse cx="80" cy="50" rx="18" ry="22" fill="#065f46" fillOpacity="0.5" />
              {/* Roots (symbolic) */}
              <path d="M 72 195 Q 55 208 45 220" stroke="#78716c" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
              <path d="M 88 195 Q 105 208 115 220" stroke="#78716c" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
              {/* Label */}
              <text x="70" y="235" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Tree Growth</text>
              <text x="70" y="255" textAnchor="middle" fill="#a8a29e" style={{ fontSize: '12px', fontFamily: 'system-ui' }}>(5-7 Years)</text>
            </g>
            
            {/* Arrow 2 → 3 (longer) */}
            <g transform="translate(320, 155)">
              <path d="M 0 25 Q 50 5 100 25" stroke="url(#arrowGrad)" strokeWidth="2" fill="none" />
              <polygon points="100,18 115,25 100,32" fill="#065f46" fillOpacity="0.5" />
            </g>
            
            {/* Stage 3: Inoculation */}
            <g transform="translate(420, 55)">
              {/* Ground */}
              <ellipse cx="70" cy="185" rx="50" ry="8" fill="#78716c" fillOpacity="0.12" />
              {/* Tree trunk */}
              <rect x="58" y="85" width="24" height="100" fill="#78716c" fillOpacity="0.3" rx="3" />
              {/* Canopy */}
              <ellipse cx="70" cy="65" rx="45" ry="42" fill="#065f46" fillOpacity="0.2" />
              <ellipse cx="70" cy="55" rx="34" ry="32" fill="#065f46" fillOpacity="0.35" />
              <ellipse cx="70" cy="48" rx="22" ry="20" fill="#065f46" fillOpacity="0.5" />
              {/* Inoculation points */}
              <circle cx="65" cy="105" r="4" fill="#d97706" fillOpacity="0.7" />
              <circle cx="75" cy="130" r="4" fill="#d97706" fillOpacity="0.7" />
              <circle cx="63" cy="155" r="4" fill="#d97706" fillOpacity="0.7" />
              {/* Injection lines */}
              <line x1="40" y1="105" x2="62" y2="105" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
              <line x1="40" y1="130" x2="72" y2="130" stroke="#d97706" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="3 3" />
              {/* Label */}
              <text x="70" y="225" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Inoculation</text>
            </g>
            
            {/* Arrow 3 → 4 (curves inward) */}
            <g transform="translate(535, 155)">
              <path d="M 0 25 Q 30 40 65 25" stroke="url(#arrowGrad)" strokeWidth="2" fill="none" />
              <polygon points="65,18 80,25 65,32" fill="#065f46" fillOpacity="0.5" />
            </g>
            
            {/* Stage 4: Resin Formation */}
            <g transform="translate(600, 60)">
              {/* Cross-section circle */}
              <circle cx="70" cy="105" r="60" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="1.5" />
              <circle cx="70" cy="105" r="50" fill="#78716c" fillOpacity="0.1" />
              {/* Tree rings */}
              <circle cx="70" cy="105" r="40" fill="none" stroke="#a8a29e" strokeWidth="0.75" strokeOpacity="0.4" />
              <circle cx="70" cy="105" r="28" fill="none" stroke="#a8a29e" strokeWidth="0.75" strokeOpacity="0.4" />
              <circle cx="70" cy="105" r="16" fill="none" stroke="#a8a29e" strokeWidth="0.75" strokeOpacity="0.4" />
              {/* Resin veins */}
              <path d="M 70 55 Q 78 80 70 105 Q 62 130 70 155" stroke="#d97706" strokeWidth="3.5" fill="none" strokeOpacity="0.5" />
              <path d="M 35 90 Q 52 98 70 105 Q 88 112 105 120" stroke="#d97706" strokeWidth="3" fill="none" strokeOpacity="0.4" />
              <path d="M 40 125 Q 55 115 70 105 Q 85 95 100 85" stroke="#d97706" strokeWidth="2" fill="none" strokeOpacity="0.3" />
              {/* Center glow */}
              <circle cx="70" cy="105" r="14" fill="url(#resinGlow2)" />
              <circle cx="70" cy="105" r="6" fill="#d97706" fillOpacity="0.4" />
              {/* Label */}
              <text x="70" y="195" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Resin Formation</text>
            </g>
            
            {/* Arrow 4 → 5 */}
            <g transform="translate(725, 155)">
              <path d="M 0 25 Q 35 12 70 25" stroke="url(#arrowGrad)" strokeWidth="2" fill="none" />
              <polygon points="70,18 85,25 70,32" fill="#065f46" fillOpacity="0.5" />
            </g>
            
            {/* Stage 5: Harvesting */}
            <g transform="translate(795, 70)">
              {/* Horizontal log */}
              <rect x="15" y="95" width="100" height="50" fill="#78716c" fillOpacity="0.25" rx="4" />
              <ellipse cx="15" cy="120" rx="8" ry="25" fill="#78716c" fillOpacity="0.35" />
              <ellipse cx="115" cy="120" rx="8" ry="25" fill="#a8a29e" fillOpacity="0.2" />
              {/* Cross-section end showing resin */}
              <ellipse cx="115" cy="120" rx="6" ry="22" fill="none" stroke="#d6d3d1" strokeWidth="0.75" />
              <path d="M 112 100 Q 115 120 112 140" stroke="#d97706" strokeWidth="2" fill="none" strokeOpacity="0.5" />
              <circle cx="114" cy="120" r="3" fill="#d97706" fillOpacity="0.4" />
              {/* Clean cut indication */}
              <line x1="15" y1="95" x2="15" y2="145" stroke="#78716c" strokeWidth="0.75" strokeOpacity="0.5" />
              {/* Label */}
              <text x="65" y="185" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Harvesting</text>
            </g>
            
            {/* Arrow 5 → 6 */}
            <g transform="translate(910, 155)">
              <path d="M 0 25 Q 30 18 55 25" stroke="url(#arrowGrad)" strokeWidth="2" fill="none" />
              <polygon points="55,18 70,25 55,32" fill="#065f46" fillOpacity="0.5" />
            </g>
            
            {/* Stage 6: Processing */}
            <g transform="translate(960, 70)">
              {/* Bowl/tray */}
              <ellipse cx="65" cy="145" rx="50" ry="12" fill="#d6d3d1" fillOpacity="0.3" />
              <path d="M 20 130 Q 20 145 65 152 Q 110 145 110 130" stroke="#a8a29e" strokeWidth="1.5" fill="none" />
              <ellipse cx="65" cy="130" rx="45" ry="10" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="0.75" />
              {/* Agarwood chips */}
              <rect x="40" y="112" width="18" height="9" fill="#78716c" fillOpacity="0.4" rx="1.5" transform="rotate(-8 49 116)" />
              <rect x="60" y="108" width="15" height="8" fill="#78716c" fillOpacity="0.35" rx="1.5" transform="rotate(5 67 112)" />
              <rect x="78" y="112" width="16" height="8" fill="#78716c" fillOpacity="0.4" rx="1.5" transform="rotate(-3 86 116)" />
              <rect x="48" y="120" width="12" height="6" fill="#78716c" fillOpacity="0.3" rx="1" />
              <rect x="65" y="122" width="14" height="6" fill="#78716c" fillOpacity="0.35" rx="1" transform="rotate(8 72 125)" />
              {/* Powder indication */}
              <ellipse cx="65" cy="126" rx="25" ry="5" fill="#78716c" fillOpacity="0.15" />
              {/* Label */}
              <text x="65" y="185" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Processing</text>
            </g>
            
            {/* Arrow 6 → 7 (short, direct) */}
            <g transform="translate(1055, 155)">
              <path d="M 0 25 L 50 25" stroke="url(#arrowGrad)" strokeWidth="2" fill="none" />
              <polygon points="50,18 65,25 50,32" fill="#065f46" fillOpacity="0.5" />
            </g>
            
            {/* Stage 7: Export (FINAL - NO outgoing arrow) */}
            <g transform="translate(1095, 55)">
              {/* Elevated platform indication */}
              <rect x="15" y="165" width="85" height="6" fill="#d6d3d1" fillOpacity="0.3" rx="2" />
              {/* Oil bottle */}
              <path d="M 35 80 L 35 140 Q 35 155 50 155 Q 65 155 65 140 L 65 80 Q 65 68 50 68 Q 35 68 35 80 Z" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="1.5" />
              <rect x="43" y="58" width="14" height="12" fill="#fafaf9" stroke="#d6d3d1" strokeWidth="0.75" rx="2" />
              {/* Oil inside */}
              <path d="M 39 88 L 39 137 Q 39 150 50 150 Q 61 150 61 137 L 61 88" fill="#d97706" fillOpacity="0.25" />
              <ellipse cx="50" cy="88" rx="11" ry="5" fill="#d97706" fillOpacity="0.35" />
              {/* Small crate beside */}
              <rect x="75" y="120" width="35" height="30" fill="#78716c" fillOpacity="0.2" stroke="#a8a29e" strokeWidth="0.75" rx="2" />
              <line x1="75" y1="135" x2="110" y2="135" stroke="#a8a29e" strokeWidth="0.75" strokeOpacity="0.5" />
              <line x1="92" y1="120" x2="92" y2="150" stroke="#a8a29e" strokeWidth="0.75" strokeOpacity="0.5" />
              {/* Subtle globe arc */}
              <path d="M 115 100 Q 130 85 145 92 Q 160 100 152 115" stroke="#d6d3d1" strokeWidth="1" fill="none" strokeOpacity="0.4" />
              <path d="M 122 108 Q 137 100 145 108" stroke="#d6d3d1" strokeWidth="0.75" fill="none" strokeOpacity="0.3" />
              {/* Label */}
              <text x="70" y="200" textAnchor="middle" fill="#57534e" style={{ fontSize: '15px', fontFamily: 'Cormorant Garamond, serif' }}>Export</text>
            </g>
            
          </svg>
        </div>
      </div>
    </section>
  );
}
