"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

export default function MapPreviewSection() {
  const [activePin, setActivePin] = useState<string | null>(null);

  const pins = [
    { id: "sumatra", name: "Sumatra", x: "25%", y: "45%" },
    { id: "jawa", name: "Jawa", x: "35%", y: "70%" },
    { id: "kalimantan", name: "Kalimantan", x: "48%", y: "38%" },
    { id: "sulawesi", name: "Sulawesi", x: "65%", y: "50%" },
    { id: "papua", name: "Papua", x: "85%", y: "55%" },
  ];

  return (
    <section id="peta" className="relative z-20 bg-black text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Column (40-45%) - Text & CTA */}
        <div className="w-full lg:w-5/12 z-10">
          <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-medium block">
            Eksplorasi Wilayah
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            Satu Peta, <br />
            <span className="text-white/90">Ribuan Cerita</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
            Setiap provinsi di Indonesia menyimpan kisah budayanya sendiri. Klik tiap wilayah untuk menemukan keunikan yang tersembunyi di dalamnya.
          </p>
          
          <Link 
            href="/peta" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_25px_rgba(251,191,36,0.25)] mb-16"
          >
            Buka Peta Interaktif
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>

          {/* Trust Signals */}
          <div className="flex items-center gap-8 md:gap-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-light text-white mb-1">38</p>
              <p className="text-[10px] uppercase tracking-widest text-white/50">Provinsi</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-3xl font-light text-white mb-1">100+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/50">Budaya Terdokumentasi</p>
            </div>
          </div>
        </div>

        {/* Right Column (55-60%) - Map Visual */}
        <div className="w-full lg:w-7/12 relative aspect-[4/3] md:aspect-[16/10] bg-white/5 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group">
          {/* Decorative Pattern Background for the Map Container */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Map Image (using an abstract node/network or map placeholder) 
              Note: Replace this src with an actual SVG of the Indonesian map for production */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
            alt="Peta Nusantara" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-700 grayscale"
          />
          
          {/* Dark gradient overlay to make pins pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Interactive Pins */}
          {pins.map((pin) => (
            <div
              key={pin.id}
              className="absolute z-20 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: pin.x, top: pin.y }}
              onMouseEnter={() => setActivePin(pin.id)}
              onMouseLeave={() => setActivePin(null)}
            >
              {/* Outer Glow */}
              <div className={`absolute w-12 h-12 rounded-full bg-gold/20 animate-ping opacity-75 transition-opacity duration-300 ${activePin === pin.id ? 'opacity-100' : ''}`} />
              
              {/* Inner Dot */}
              <div className={`relative w-3 h-3 md:w-4 md:h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)] transition-transform duration-300 ${activePin === pin.id ? 'scale-150' : 'scale-100'}`} />
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: activePin === pin.id ? 1 : 0, y: activePin === pin.id ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 whitespace-nowrap px-3 py-1.5 bg-black/80 backdrop-blur-md border border-white/20 rounded-md text-xs font-medium tracking-widest uppercase text-white pointer-events-none"
              >
                {pin.name}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
