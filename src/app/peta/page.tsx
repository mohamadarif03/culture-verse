"use client";

import { useState } from "react";
import Link from "next/link";
import IndonesiaMap from "@/components/IndonesiaMap";
import ProvinceSidePanel from "@/components/ProvinceSidePanel";
import UnescoTimeline from "@/components/UnescoTimeline";
import { cultures } from "@/data/cultures";

export default function PetaPage() {
  const [activeProvince, setActiveProvince] = useState<string | null>(null);
  const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique provinces that actually have cultural data
  const availableProvinces = Array.from(new Set(cultures.map(c => c.province)));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Auto highlight if exact or very close match
    if (query.length > 3) {
      const match = availableProvinces.find(p => p.toLowerCase().includes(query.toLowerCase()));
      if (match) {
        setActiveProvince(match);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-32 pb-20 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <nav className="flex justify-center text-xs font-medium tracking-widest uppercase mb-6 text-black/50 dark:text-white/50">
          <Link href="/" className="hover:text-amber-500 transition-colors">Beranda</Link>
          <span className="mx-2">/</span>
          <span className="text-black dark:text-white">Peta Nusantara</span>
        </nav>
        <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-medium block">
          Eksplorasi Wilayah
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Satu Peta, <br className="hidden md:block" /> Ribuan Cerita
        </h1>
        <p className="text-black/60 dark:text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Klik tiap provinsi untuk menemukan kekayaan budaya khas daerahnya.
        </p>
      </div>

      {/* Main Interactive Map Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column: Map (~60-65%) */}
          <div className="w-full lg:w-7/12 xl:w-2/3 flex flex-col">
            
            {/* Search Bar above Map */}
            <div className="mb-6 relative w-full md:w-72">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 dark:text-white/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input 
                type="text" 
                placeholder="Cari provinsi..." 
                value={searchQuery}
                onChange={handleSearch}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            {/* Map Container */}
            <div className="flex-1 min-h-[400px] relative">
              <IndonesiaMap 
                activeProvince={activeProvince} 
                onProvinceClick={setActiveProvince}
                onHover={setHoveredProvince}
              />
              
              {/* Custom Tooltip that follows hovered province logically */}
              {hoveredProvince && !activeProvince && (
                <div className="absolute top-4 right-4 pointer-events-none bg-black/80 dark:bg-white/80 text-white dark:text-black px-4 py-2 rounded-lg text-sm font-bold shadow-xl backdrop-blur-md">
                  {hoveredProvince}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Info Panel (~35-40%) */}
          <div className="w-full lg:w-5/12 xl:w-1/3">
            <div className="sticky top-24">
              <ProvinceSidePanel activeProvince={activeProvince} />
            </div>
          </div>

        </div>
      </div>

      {/* UNESCO Timeline Section */}
      <div className="bg-black/5 dark:bg-white/5 border-y border-black/10 dark:border-white/10">
        <UnescoTimeline />
      </div>

    </div>
  );
}
