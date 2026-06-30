import Link from "next/link";
import { motion } from "motion/react";

export default function InteractiveZoneSection() {
  const games = [
    {
      id: "batik",
      title: "Susun Motif Batik",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M2 12h20"/><path d="M2 12a10 10 0 0 1 10-10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M22 12a10 10 0 0 1-10 10"/><path d="M12 22a10 10 0 0 1-10-10"/></svg>
      ),
      color: "from-amber-500/20 to-transparent",
      borderColor: "group-hover:border-amber-500/50",
      iconColor: "text-amber-400",
      layout: "col-span-1 h-[300px] lg:h-[380px]",
    },
    {
      id: "angklung",
      title: "Angklung Virtual",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      ),
      color: "from-gold/30 to-transparent",
      borderColor: "group-hover:border-gold/50 shadow-[0_0_30px_rgba(251,191,36,0.15)] group-hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]",
      iconColor: "text-gold",
      layout: "col-span-1 lg:col-span-2 h-[350px] lg:h-[480px] lg:-mt-12 z-10",
      isHighlight: true,
    },
    {
      id: "kuis",
      title: "Kuis Budaya Nusantara",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
      ),
      color: "from-blue-500/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50",
      iconColor: "text-blue-400",
      layout: "col-span-1 h-[300px] lg:h-[380px]",
    }
  ];

  return (
    <section id="mainkan" className="relative z-20 bg-[#0a0a0a] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        {/* Header Section */}
        <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-medium">
          Zona Interaktif
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
          Belajar Sambil Bermain
        </h2>
        <p className="text-white/60 text-lg leading-relaxed mb-20 max-w-2xl">
          Mainkan alat musik tradisional, susun motif batik, dan uji wawasanmu lewat permainan seru secara langsung dari browsermu.
        </p>

        {/* Games Grid (Center Highlighted) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full items-center mb-16">
          {games.map((game, index) => (
            <div 
              key={game.id}
              className={`group relative rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-500 hover:-translate-y-4 ${game.borderColor} ${game.layout}`}
            >
              {/* Radial Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${game.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white">Main</span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`mb-6 p-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-500 ${game.iconColor}`}>
                  {game.icon}
                </div>
                <h3 className={`${game.isHighlight ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} font-medium text-white mb-2 text-center group-hover:text-gold transition-colors duration-300`}>
                  {game.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link 
          href="/mainkan" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold/90 text-black text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:-translate-y-1"
        >
          Mulai Bermain
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
        
      </div>
    </section>
  );
}
