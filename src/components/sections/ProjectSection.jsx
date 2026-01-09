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
            Sri Lanka has over 2~3 million planted Aquilaria trees, yet the sector hasn't reached its maximum potential. The core issue: systemic inoculation failure preventing resin formation—the source of agarwood's extraordinary value. At K-LIFE we tried multiple inoculants over 3 years to arrive at a working solution.
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
            <div className="mb-8 overflow-x-auto">
              <table className="w-full min-w-[1000px] border border-emerald-800/40" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr className="bg-emerald-900/40">
                    <th className="px-4 py-4 text-left text-sm uppercase tracking-wide text-emerald-400 font-sans-refined border-r border-emerald-800/40" style={{ width: '80px' }}>Year / Period</th>
                    <th className="px-4 py-4 text-left text-sm uppercase tracking-wide text-emerald-400 font-sans-refined border-r border-emerald-800/40">Inoculant Evaluated</th>
                    <th className="px-4 py-4 text-left text-sm uppercase tracking-wide text-emerald-400 font-sans-refined border-r border-emerald-800/40">Application Approach</th>
                    <th className="px-4 py-4 text-left text-sm uppercase tracking-wide text-emerald-400 font-sans-refined border-r border-emerald-800/40">Result Observed</th>
                    <th className="px-4 py-4 text-left text-sm uppercase tracking-wide text-emerald-400 font-sans-refined">Inference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-stone-800/30 border-b border-emerald-800/30">
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Aug-22</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Local inoculant</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Standard application</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">No agarwood formation</td>
                    <td className="px-4 py-4 text-sm text-white align-top">Local inoculant and standard delivery were insufficient and ineffective</td>
                  </tr>
                  <tr className="bg-stone-800/50 border-b border-emerald-800/30">
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Feb-23</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Vietnamese inoculation approach</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Truong Thanh Khoan's Method</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">No consistent resin formation</td>
                    <td className="px-4 py-4 text-sm text-white align-top">Developed by Truong Thanh Khoan, widely regarded as the most famous agarwood creator in Vietnam and featured in the "Why Agarwood Is So Expensive | So Expensive" documentary by Business Insider. Despite being a widely referenced method, it did not perform under our plantation conditions and did not yield results.</td>
                  </tr>
                  <tr className="bg-stone-800/30 border-b border-emerald-800/30">
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Dec-23</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Internationally renowned inoculant</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Chinese method</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">No meaningful agarwood formation</td>
                    <td className="px-4 py-4 text-sm text-white align-top">Imported formulations did not translate into results under field conditions</td>
                  </tr>
                  <tr className="bg-stone-800/50 border-b border-emerald-800/30">
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Feb-24</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Same international inoculant</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Chainsaw cut method</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">No improvement</td>
                    <td className="px-4 py-4 text-sm text-white align-top">Changing application alone cannot compensate for ineffective biology</td>
                  </tr>
                  <tr className="bg-stone-800/30 border-b border-emerald-800/30">
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Dec-24</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">In-house developed inoculant</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Surface inoculation (sub-optimal)</td>
                    <td className="px-4 py-4 text-sm text-stone-200 border-r border-emerald-800/30 align-top">Agarwood formation observed</td>
                    <td className="px-4 py-4 text-sm text-white align-top">
                      Biological efficacy established and{' '}
                      <a 
                        href="/report.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 underline decoration-emerald-500/50 hover:decoration-emerald-400 transition-colors"
                      >
                        laboratory validated
                      </a>
                      , though the application method was sub-optimal
                    </td>
                  </tr>
                  <tr className="bg-emerald-900/30">
                    <td className="px-4 py-4 text-sm text-emerald-300 font-medium border-r border-emerald-800/30 align-top">Aug-25</td>
                    <td className="px-4 py-4 text-sm text-emerald-300 font-medium border-r border-emerald-800/30 align-top">Same in-house inoculant</td>
                    <td className="px-4 py-4 text-sm text-emerald-300 font-medium border-r border-emerald-800/30 align-top">Pipe-based method (Optimized Protocol)</td>
                    <td className="px-4 py-4 text-sm text-emerald-300 font-medium border-r border-emerald-800/30 align-top">Significantly higher, repeatable formation</td>
                    <td className="px-4 py-4 text-sm text-emerald-300 align-top">Alignment of biology and application achieved optimal results</td>
                  </tr>
                </tbody>
              </table>
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
                        {item.images.map((img, j) => {
                          // Encode spaces and apostrophes for proper URL encoding
                          const encodedImg = img.replace(/ /g, '%20').replace(/'/g, '%27');
                          // For Chinese Method's second image, show top part instead of center
                          const isChineseMethodSecondImage = item.method === 'Chinese Method' && j === 1;
                          return (
                            <div key={j} className="relative aspect-[4/3] bg-stone-800 rounded-lg overflow-hidden">
                              <img 
                                src={encodedImg} 
                                alt={`${item.method} - Image ${j + 1}`}
                                className={`w-full h-full object-cover opacity-90 saturate-[0.85] ${isChineseMethodSecondImage ? 'object-top' : ''}`}
                                style={isChineseMethodSecondImage ? { objectPosition: 'top' } : {}}
                                onError={(e) => {
                                  console.error('Failed to load image:', img, 'Encoded:', encodedImg);
                                  e.target.style.display = 'none';
                                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-stone-500 text-sm">Image placeholder</div>';
                                }}
                              />
                            </div>
                          );
                        })}
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
