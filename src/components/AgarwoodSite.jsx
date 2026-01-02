import React, { useState, useEffect } from 'react';
import { useFinancialCalculations } from '../hooks/useFinancialCalculations';
import { Watermark } from './ui/Watermark';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { HistorySection } from './sections/HistorySection';
import { ProjectSection } from './sections/ProjectSection';
import { ValueChainSection } from './sections/ValueChainSection';
import { LifecycleSection } from './sections/LifecycleSection';
import { ModelCasesSection } from './sections/ModelCasesSection';
import { CalculatorSection } from './sections/CalculatorSection';
import { SensitivitySection } from './sections/SensitivitySection';
import { HeatmapSection } from './sections/HeatmapSection';
import { GallerySection } from './sections/GallerySection';
import { CTASection } from './sections/CTASection';

export default function AgarwoodSite() {
  const [yield_, setYield] = useState(100);
  const [priceChange, setPriceChange] = useState(0);
  const [taxRate, setTaxRate] = useState(30);
  const [discountRate, setDiscountRate] = useState(10);
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedYears, setExpandedYears] = useState(['2014']);
  const [expandedMethod, setExpandedMethod] = useState(null);
  
  const calculations = useFinancialCalculations(yield_, priceChange, taxRate, discountRate);

  const toggleYear = (year) => {
    setExpandedYears(prev => 
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], section[data-section]');
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || entry.target.dataset.section || 'hero';
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);
    
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-stone-50 text-stone-900 antialiased" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <Watermark activeSection={activeSection} />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <HistorySection expandedYears={expandedYears} toggleYear={toggleYear} />
      <ProjectSection expandedMethod={expandedMethod} setExpandedMethod={setExpandedMethod} />
      <ValueChainSection />
      <LifecycleSection />
      <ModelCasesSection />
      <CalculatorSection 
        yield_={yield_}
        setYield={setYield}
        priceChange={priceChange}
        setPriceChange={setPriceChange}
        taxRate={taxRate}
        setTaxRate={setTaxRate}
        discountRate={discountRate}
        setDiscountRate={setDiscountRate}
        calculations={calculations}
      />
      <SensitivitySection 
        yield_={yield_}
        priceChange={priceChange}
        taxRate={taxRate}
        discountRate={discountRate}
        ifcY3={calculations.ifcY3}
      />
      <HeatmapSection taxRate={taxRate} />
      <GallerySection />
      <CTASection />
      <Footer />
    </div>
  );
}
