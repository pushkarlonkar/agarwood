import React from 'react';
import { valueChainSteps } from '../../data/valueChainSteps';

export function ValueChainSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-stone-100 to-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">Process</p>
          <h2 className="text-5xl font-light">The Agarwood Value Chain</h2>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {valueChainSteps.map((item, i) => (
              <div key={i} className="flex items-start">
                <div className={`text-center relative flex-1 ${item.highlight ? 'scale-105' : ''}`}>
                  {item.status === 'complete' && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                      <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className={`w-16 h-16 mx-auto mb-5 flex items-center justify-center text-lg font-sans-refined ${item.highlight ? 'bg-emerald-700 text-white' : 'bg-white text-stone-500 border border-stone-200'}`}>
                    {item.step}
                  </div>
                  <h4 className={`text-lg font-medium mb-2 ${item.highlight ? 'text-emerald-800' : 'text-stone-700'}`}>{item.title}</h4>
                  <p className="text-base text-stone-600 leading-relaxed px-1">{item.desc}</p>
                </div>
                {i < 4 && (
                  <div className="hidden lg:flex items-center justify-center w-8 mt-6">
                    <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

