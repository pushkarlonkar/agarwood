import React from 'react';
import { timelineData } from '../../data/timelineData';

export function HistorySection({ expandedYears, toggleYear }) {
  const treeHeights = [45, 60, 75, 90, 110];

  return (
    <section id="history" className="py-32 relative overflow-hidden bg-[#fcfcfa]">
      <div className="max-w-7xl mx-auto px-8 relative">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400 font-sans-refined mb-4">
              2013 — Present
            </p>
            <h2 className="text-5xl md:text-7xl font-light leading-[0.9] text-stone-800" style={{ fontFamily: 'Papyrus, fantasy' }}>
              Project<br />
              <span className="text-emerald-800">History</span>
            </h2>
          </div>
        </div>

        {/* Artistic Timeline with Tree Growth */}
        <div className="relative">
          <div className="space-y-0">
            {timelineData.map((item, index) => {
              const isExpanded = expandedYears.includes(item.year);
              const treeHeight = treeHeights[index] || 100;
              
              return (
                <div key={item.year} className="relative">
                  {/* Year Row */}
                  <button
                    onClick={() => toggleYear(item.year)}
                    className="w-full group relative"
                  >
                    <div className="flex items-start">
                      {/* Left: Tree visualization - Fixed width container */}
                      <div className="w-28 md:w-36 flex-shrink-0 relative pt-4">
                        <div className="flex flex-col items-center">
                          {/* Tree canopy */}
                          <div 
                            className={`
                              rounded-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900
                              transition-all duration-700 mb-1
                              ${isExpanded ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}
                            `}
                            style={{ 
                              width: `${18 + (treeHeight * 0.35)}px`, 
                              height: `${14 + (treeHeight * 0.28)}px`,
                            }}
                          />
                          {/* Tree trunk */}
                          <div 
                            className={`
                              w-[3px] bg-gradient-to-b from-emerald-600 via-emerald-800 to-emerald-950
                              transition-all duration-700
                              ${isExpanded ? 'opacity-100' : 'opacity-40 group-hover:opacity-60'}
                            `}
                            style={{ height: `${treeHeight}px` }}
                          />
                          {/* Year label below tree */}
                          <span className={`
                            mt-2 text-[11px] uppercase tracking-[0.1em] font-sans-refined
                            transition-all duration-500
                            ${isExpanded ? 'text-emerald-700 font-bold' : 'text-stone-600 group-hover:text-stone-700'}
                          `}>
                            {item.year}
                          </span>
                        </div>
                      </div>
                      
                      {/* Right: Content area */}
                      <div className="flex-1 border-l border-stone-200 pl-8 md:pl-12 py-6 min-h-[140px]">
                        <div className="flex items-start justify-between gap-6">
                          {/* Year and title */}
                          <div className="flex-1 text-center">
                            <span className={`
                              text-4xl md:text-5xl transition-all duration-500 block mb-3
                              ${isExpanded ? 'text-emerald-700 font-medium' : 'text-stone-800 font-light group-hover:text-stone-900'}
                            `} style={{ fontFamily: 'Papyrus, fantasy' }}>
                              {item.year}
                            </span>
                            <h3 className={`
                              text-base md:text-lg leading-relaxed transition-all duration-500 max-w-2xl mx-auto
                              ${isExpanded ? 'text-emerald-700 font-semibold' : 'text-stone-700 font-medium group-hover:text-stone-800'}
                            `}>
                              {item.title.replace('...', '')}
                            </h3>
                          </div>
                          
                          {/* Expand indicator */}
                          <div className={`
                            w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 mt-2
                            transition-all duration-500
                            ${isExpanded 
                              ? 'border-emerald-700 bg-emerald-700 rotate-45' 
                              : 'border-stone-400 group-hover:border-stone-500'
                            }
                          `}>
                            <svg 
                              className={`w-4 h-4 transition-all duration-500 ${
                                isExpanded ? 'text-white' : 'text-stone-500 group-hover:text-stone-600'
                              }`}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div className={`
                    overflow-hidden transition-all duration-700 ease-out
                    ${isExpanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="flex">
                      {/* Left spacer to align with tree column */}
                      <div className="w-28 md:w-36 flex-shrink-0" />
                      
          {/* Content */}
          <div className={`
            flex-1 border-l border-stone-200 pl-8 md:pl-12 pb-12 transform transition-all duration-700
            ${isExpanded ? 'translate-y-0' : '-translate-y-8'}
          `}>
            {/* Description */}
            <p className="text-stone-600 leading-[1.9] text-lg font-light max-w-3xl mb-10 mx-auto text-center">
              {item.description}
            </p>
                        
            {/* Images - Only first image, same size for all */}
            <div className="relative group/img max-w-2xl mx-auto">
              <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src={(item.images ? item.images[0] : item.image).replace(/ /g, '%20')} 
                  alt={`K-LIFE Estate ${item.year}`}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover/img:scale-105"
                  onError={(e) => {
                    const imgSrc = item.images ? item.images[0] : item.image;
                    console.error('Failed to load image:', imgSrc);
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 flex items-center justify-center">
                        <span class="text-white/30 text-sm uppercase tracking-widest">Estate ${item.year}</span>
                      </div>
                    `;
                  }}
                />
              </div>
              {/* Artistic frame corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l border-t border-emerald-800/30" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r border-b border-emerald-800/30" />
            </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
