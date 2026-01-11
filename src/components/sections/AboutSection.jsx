import React from 'react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500 font-sans-refined mb-4">About</p>
            <h2 className="text-5xl md:text-6xl font-light leading-tight" style={{ fontFamily: 'Papyrus, fantasy' }}>
              K-LIFE<br />Investments
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6">
            <p className="text-lg text-stone-600 leading-relaxed">
              K‑LIFE Investments is a Sri Lanka–based agribusiness company focused on sustainable agriculture and export oriented value chains. Since its establishment in 2013, the company has combined traditional land use knowledge with modern agronomic and scientific practices to develop a commercially viable, environmentally responsible venture.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              K‑LIFE has completed the Bandarawela pilot project, focused on demonstrating sustainable land use practices that address biodiversity restoration, climate resilience, and long term land productivity. The pilot reflects K‑LIFE's approach of combining applied research with practical, scalable production models.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              The pilot has endeavored to demonstrate the viability of an agarwood based polyculture system in Sri Lanka, leveraging the country's favorable climate and ecological conditions. By integrating agarwood species with native trees, K‑LIFE's pilot project in Bandarawela was designed to demonstrate a model that delivers modest but stable returns while functioning as a climate positive land use system.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Alongside plantation development, one of K‑LIFE's breakthroughs has been its ongoing work with local scientists to develop biomimetic agarwood inoculation methods that are faster and more effective than locally and internationally available alternatives. This research has broader relevance beyond K‑LIFE's own operations, addressing a critical issue faced by smallholders. Ineffective inoculation can render years of cultivation economically unviable.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              At the core of K‑LIFE's philosophy is the integration of commercial agarwood production with native reforestation, creating managed forest systems that generate income while enhancing biodiversity, carbon sequestration, and ecosystem stability. This model is intended to be replicated and scaled across suitable regions of the country.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-stone-200 mt-12">
              <div>
                <p className="text-4xl font-light text-emerald-800">2013</p>
                <p className="text-sm uppercase tracking-wide text-stone-500 mt-1 font-sans-refined">Established</p>
              </div>
              <div>
                <p className="text-4xl font-light text-emerald-800">6K</p>
                <p className="text-sm uppercase tracking-wide text-stone-500 mt-1 font-sans-refined">Harvestable Trees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

