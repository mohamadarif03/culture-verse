"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { cultures } from "@/data/cultures";

interface ProvinceSidePanelProps {
  activeProvince: string | null;
}

export default function ProvinceSidePanel({ activeProvince }: ProvinceSidePanelProps) {
  // Find cultures matching the active province
  const provinceCultures = cultures.filter((c) => c.province === activeProvince);

  // Group by category
  const groupedCultures = provinceCultures.reduce((acc, culture) => {
    if (!acc[culture.category]) acc[culture.category] = [];
    acc[culture.category].push(culture);
    return acc;
  }, {} as Record<string, typeof cultures>);

  return (
    <div className="w-full h-[600px] lg:h-[700px] bg-black/5 dark:bg-white/5 rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!activeProvince ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-32 h-32 mb-8 text-black/20 dark:text-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-3">Pilih Provinsi</h3>
            <p className="text-black/50 dark:text-white/50 text-sm max-w-[250px]">
              Klik pada area peta atau gunakan pencarian untuk melihat kekayaan budaya dari daerah tersebut.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={activeProvince}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col h-full"
          >
            {/* Header */}
            <div className="p-8 pb-6 border-b border-black/10 dark:border-white/10 bg-gold/10 dark:bg-gold/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold mb-2 block">
                Eksplorasi Daerah
              </span>
              <h2 className="text-3xl font-medium flex items-center gap-3">
                {activeProvince}
                <svg className="w-5 h-5 text-black/40 dark:text-white/40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              {provinceCultures.length === 0 ? (
                <div className="text-center py-10 text-black/50 dark:text-white/50 text-sm">
                  Belum ada data budaya yang tercatat untuk provinsi ini.
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {Object.entries(groupedCultures).map(([category, items]) => (
                    <div key={category}>
                      <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-l-2 border-gold pl-3">
                        {category}
                      </h3>
                      <div className="flex flex-col gap-4">
                        {items.map((item) => (
                          <div key={item.id} className="group flex gap-4 bg-white dark:bg-black p-3 rounded-2xl border border-black/5 dark:border-white/5 hover:border-gold/50 transition-colors">
                            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-black/5 flex-shrink-0">
                              <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="flex flex-col justify-center flex-1 py-1">
                              {/* Simple UNESCO mock check for demo purposes */}
                              {["Batik Parang", "Wayang Kulit", "Angklung", "Noken", "Keris Nusantara"].includes(item.name) && (
                                <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest flex items-center gap-1 mb-1">
                                  <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                  Warisan UNESCO
                                </span>
                              )}
                              <h4 className="font-medium text-lg leading-tight mb-2">{item.name}</h4>
                              <Link 
                                href={`/jelajahi/${item.slug}`}
                                className="text-xs font-bold text-gold hover:text-amber-600 dark:hover:text-amber-400 transition-colors flex items-center gap-1 mt-auto"
                              >
                                Lihat Detail
                                <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
