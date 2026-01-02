import React from 'react';
import { inoculationMethods } from '../../data/inoculationMethods';

export function ProjectSection({ expandedMethod, setExpandedMethod }) {
  const problems = [
    { title: 'Inoculant Failure', desc: 'Most locally available inoculants have not performed reliably, leaving trees biologically idle.' },
    { title: 'Zero Commercial Value', desc: 'Mature trees remain without resin formation, generating no commercial return on significant sunk investment.' },
    { title: 'Untapped Potential', desc: 'Kilo for kilo, agarwood is the most valuable non-timber agroforestry product in the world.' }
  ];

  const whyThisMatters = [
    'Demonstrating reliable resin formation through controlled trials',
    'Validating commercial viability before scale deployment',
    'Establishing repeatable unit economics, critical for investor confidence',
    'Creating a scalable reference model grounded in real plantation data'
  ];

  return (
    <section id="project" className="py-32 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900" />
      <div className="absolute inset-0 grain opacity-[0.02]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-800/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-sans-refined mb-4">The Opportunity</p>
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Why Agarwood in Sri Lanka<br /><em className="italic text-emerald-200">Hasn't Reached Its Potential</em>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Sri Lanka has over one million planted Aquilaria trees, yet the sector hasn't reached its maximum potential. The core issue: systemic inoculation failure preventing resin formation—the source of agarwood's extraordinary value. At K-LIFE we tried multiple inoculants over 3 years to arrive at a working solution.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-20">
          {problems.map((item, i) => (
            <div key={i} className="p-6 md:p-8 border border-emerald-700/30 hover:border-emerald-500/50 transition-colors group bg-emerald-950/30 backdrop-blur-sm">
              <div className="w-8 h-px bg-emerald-400 mb-4 md:mb-6 group-hover:w-12 transition-all" />
              <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-white">{item.title}</h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-700/50 pt-20">
          {/* SECTION 1 — THE SOLUTION (TEXT + TABLE) */}
          <div className="mb-20">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-sans-refined mb-4">The Solution</p>
            <h3 className="text-4xl font-light mb-8 text-white">What This Investment Solves</h3>
            
            <p className="text-lg text-stone-300 leading-relaxed mb-10 max-w-4xl">
              This pilot deploys a field-tested, biomimetic inoculation protocol on K-LIFE–owned agarwood plantations to demonstrate reliable resin formation, validate commercially viable yields, and establish repeatable unit economics. Rather than relying on a single technique or commercially marketed inoculant, K-LIFE's solution is the outcome of multiple years of structured field research, during which several inoculation methodologies were tested on small, controlled samples of trees. Each phase was designed to observe biological response, resin initiation, and consistency before progressing further.
            </p>
            
            <h4 className="text-2xl font-light mb-4 text-emerald-300">A Multi-Year, Methodical Research Approach</h4>
            <p className="text-lg text-stone-300 leading-relaxed mb-10 max-w-4xl">
              Over time, K-LIFE evaluated a range of inoculation methods, refining the protocol based on real plantation outcomes rather than theoretical assumptions. Early methods were deliberately tested on limited samples, allowing ineffective approaches to be identified and discarded without operational risk.
            </p>
            
            <h4 className="text-2xl font-light mb-6 text-emerald-300">Inoculation Methods Evaluated Over Time</h4>
            
            {/* Table */}
            <div className="max-w-2xl mb-8">
              <div className="border border-emerald-800/40 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-2 bg-emerald-900/40">
                  <div className="px-6 py-4 border-r border-emerald-800/40">
                    <p className="text-sm uppercase tracking-wide text-emerald-400 font-sans-refined">
                      Inoculation Method
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <p className="text-sm uppercase tracking-wide text-emerald-400 font-sans-refined">
                      Initiation Date
                    </p>
                  </div>
                </div>
                {/* Table Rows */}
                {inoculationMethods.map((row, i) => (
                  <div key={i} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-stone-800/30' : 'bg-stone-800/50'} ${i === 5 ? 'bg-emerald-900/30' : ''}`}>
                    <div className="px-6 py-4 border-r border-emerald-800/30">
                      <p className={`text-base ${i === 5 ? 'text-emerald-300 font-medium' : 'text-stone-200'}`}>
                        {row.method}
                      </p>
                    </div>
                    <div className="px-6 py-4">
                      <p className={`text-base ${i === 5 ? 'text-emerald-300' : 'text-stone-400'}`}>
                        {row.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-base text-stone-400 italic mb-12 max-w-3xl">
              Each successive method represents a learning milestone, informed by the biological response observed in earlier trials. Only those approaches that demonstrated consistent resin formation at small scale were taken forward and refined.
            </p>
            
            <h4 className="text-2xl font-light mb-4 text-emerald-300">Why This Matters</h4>
            <p className="text-lg text-stone-300 leading-relaxed mb-6 max-w-4xl">
              Most agarwood projects fail because inoculation is treated as a one-time intervention, rather than a biological process requiring validation and iteration. K-LIFE's approach solves this by:
            </p>
            
            <ul className="space-y-3 mb-8 max-w-3xl">
              {whyThisMatters.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-stone-200 text-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <p className="text-lg text-stone-300 leading-relaxed mb-10 max-w-4xl">
              This transforms agarwood cultivation from a high-uncertainty agricultural activity into a disciplined biological investment framework.
            </p>
            
            <p className="text-lg text-emerald-300 font-medium max-w-4xl">
              This investment builds on years of applied research, transitioning from controlled trials to a validated, scalable inoculation protocol.
            </p>
          </div>
          
          {/* SECTION 2 — 2×2 MATRIX PANEL */}
          <div className="grid grid-cols-2 gap-4 mb-20">
            <div className="bg-stone-800/50 p-6">
              <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Risk Profile</p>
              <p className="text-3xl font-light text-emerald-400">Low</p>
              <p className="text-base text-stone-400 mt-2">Trees already owned, costs fixed upfront</p>
            </div>
            <div className="bg-stone-800/50 p-6">
              <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Timeline</p>
              <p className="text-3xl font-light text-emerald-400">3 Years</p>
              <p className="text-base text-stone-400 mt-2">To harvest and export sale</p>
            </div>
            <div className="bg-stone-800/50 p-6">
              <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Market</p>
              <p className="text-3xl font-light text-emerald-400">Established</p>
              <p className="text-base text-stone-400 mt-2">ME & East Asia demand and constant demand from conglomerates such as Symrise AG</p>
            </div>
            <div className="bg-stone-800/50 p-6">
              <p className="text-sm uppercase tracking-wide text-stone-400 font-sans-refined mb-2">Model</p>
              <p className="text-3xl font-light text-emerald-400">Replicable</p>
              <p className="text-base text-stone-400 mt-2">National reference case</p>
            </div>
          </div>
          
          {/* SECTION 3 — IMAGES (COLLAPSIBLE ACCORDION) */}
          <div>
            <h4 className="text-2xl font-light mb-4 text-white">Field Trial Documentation</h4>
            <p className="text-base text-stone-400 mb-8 max-w-3xl">
              The images below document selected field trials and inoculation approaches evaluated during this multi-year research process.
            </p>
            
            <div className="space-y-3">
              {inoculationMethods.map((item, i) => (
                <div key={i} className="border border-emerald-800/30 overflow-hidden">
                  <button 
                    onClick={() => setExpandedMethod(expandedMethod === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-stone-800/40 hover:bg-stone-800/60 transition-colors"
                  >
                    <span className={`text-lg ${expandedMethod === i ? 'text-emerald-400 font-medium' : 'text-stone-200'}`}>
                      {item.method}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-emerald-500 transition-transform ${expandedMethod === i ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedMethod === i && (
                    <div className="p-6 bg-stone-900/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.images.map((img, j) => (
                          <div key={j} className="relative aspect-[4/3] bg-stone-800 rounded-lg overflow-hidden">
                            <img 
                              src={img} 
                              alt={`${item.method} - Image ${j + 1}`}
                              className="w-full h-full object-cover opacity-90 saturate-[0.85]"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-stone-500 text-sm">Image placeholder</div>';
                              }}
                            />
                            <p className="absolute bottom-2 left-2 text-xs text-white/60 bg-black/40 px-2 py-1 rounded">
                              {item.method} — {j + 1}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
