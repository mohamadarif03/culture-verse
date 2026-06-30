"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "motion/react";

function CountUp({ to, duration = 2, suffix = "" }: { to: number, duration?: number, suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, to, {
        duration,
        ease: "easeOut",
        onUpdate(val) {
          setValue(Math.round(val));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{value.toLocaleString('id-ID')}{suffix}</span>;
}

export default function PreservationSection() {
  return (
    <section id="pelestarian" className="relative z-20 min-h-screen flex flex-col justify-center bg-black text-white pt-32 pb-16 -mt-[100vh]">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
        
        {/* Top Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 items-center">
          
          {/* Left Column (50-60%) */}
          <div className="w-full lg:w-7/12">
            <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-medium block">Mengapa Ini Penting</span>
            <h2 className="text-3xl md:text-5xl font-medium mb-10 leading-tight">Melestarikan Warisan,<br />Membangun Masa Depan</h2>
            
            <div className="space-y-8">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Edukasi & Identitas</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Warisan budaya menjadi jendela bagi generasi muda untuk memahami akar sejarah, membangun identitas bangsa yang kuat di tengah arus globalisasi.</p>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Ketahanan Komunitas</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Tradisi lokal dan gotong royong terbukti memperkuat ikatan sosial, menciptakan masyarakat yang tangguh dalam menghadapi tantangan.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Pembangunan Berkelanjutan</h4>
                  <p className="text-white/60 text-sm leading-relaxed">Kearifan lokal memegang kunci pelestarian alam dan lingkungan, memberikan solusi berkelanjutan yang diwariskan lintas generasi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (40-50%) */}
          <div className="w-full lg:w-5/12">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
                <svg className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <h3 className="text-4xl lg:text-5xl font-light text-white mb-2"><CountUp to={16} /></h3>
                <p className="text-white/50 text-xs leading-relaxed uppercase tracking-wider">WBTb Diakui<br/>UNESCO</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
                <svg className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <h3 className="text-4xl lg:text-5xl font-light text-white mb-2"><CountUp to={2213} /></h3>
                <p className="text-white/50 text-xs leading-relaxed uppercase tracking-wider">Warisan Budaya<br/>Nasional</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
                <svg className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2" ry="2"/></svg>
                <h3 className="text-4xl lg:text-5xl font-light text-white mb-2"><CountUp to={718} /></h3>
                <p className="text-white/50 text-xs leading-relaxed uppercase tracking-wider">Bahasa Daerah<br/>di Indonesia</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
                <svg className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
                <h3 className="text-4xl lg:text-5xl font-light text-white mb-2"><CountUp to={17508} /></h3>
                <p className="text-white/50 text-xs leading-relaxed uppercase tracking-wider">Pulau yang<br/>Membentang</p>
              </div>
            </div>
          </div>
        </div>

        {/* SDG 11 Strip */}
        <div className="w-full rounded-2xl bg-[#f9aa33]/10 border border-[#f9aa33]/20 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 hover:bg-[#f9aa33]/15 transition-colors">
          <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-xl bg-[#f9aa33]/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f9aa33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[#f9aa33] font-bold tracking-widest text-[10px] md:text-xs uppercase bg-[#f9aa33]/10 px-3 py-1 rounded-full">SDG 11</span>
              <span className="text-white/90 font-medium text-sm">Sustainable Cities and Communities</span>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-4xl">
              Melestarikan budaya lokal bukan hanya tentang menjaga sejarah, tetapi juga memperkuat identitas sosial. Ini merupakan pilar penting dalam membangun kota dan komunitas yang inklusif, aman, tangguh, dan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
