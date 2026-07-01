"use client";

import Image from "next/image";
import { useState } from "react";
import { unescoTimeline } from "@/data/cultures";
import { motion, AnimatePresence } from "motion/react";

export default function UnescoTimeline() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className="py-24 w-full bg-black/5 dark:bg-white/5 border-t border-black/10 dark:border-white/10">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">Perjalanan Pengakuan UNESCO</h2>
        <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
          Budaya Indonesia yang telah diakui dunia sebagai warisan tak benda kemanusiaan.
        </p>
      </div>

      {/* Desktop Horizontal Alternating Timeline (Moved to lg breakpoint for more space) */}
      <div className="hidden lg:flex relative max-w-[1400px] mx-auto px-8 xl:px-16 h-[500px] items-center">
        {/* The continuous line */}
        <div className="absolute left-10 right-10 h-[2px] bg-black/10 dark:bg-white/10 rounded-full" />
        
        <div className="relative flex justify-between w-full z-10">
          {unescoTimeline.map((item, idx) => {
            const isTop = idx % 2 === 0;
            const isHovered = hoveredNode === item.id;
            const isFirst = idx === 0;
            const isLast = idx === unescoTimeline.length - 1;

            // Positioning logic to prevent first and last items from overflowing off-screen
            const contentPos = isFirst 
              ? "left-0" 
              : isLast 
                ? "right-0" 
                : "left-1/2 -translate-x-1/2";
                
            const pointerPos = isFirst 
              ? "left-10" 
              : isLast 
                ? "right-10" 
                : "left-1/2 -translate-x-1/2";

            return (
              <div 
                key={item.id} 
                className="relative flex justify-center w-20 xl:w-24 group"
                onMouseEnter={() => setHoveredNode(item.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Content Container - Alternating Top/Bottom */}
                <div className={`absolute ${contentPos} w-48 xl:w-56 text-center transition-all duration-300 flex flex-col items-center pointer-events-none
                  ${isTop ? "bottom-8" : "top-8"}
                  ${isHovered ? "opacity-0" : "opacity-100"}
                `}>
                  {/* Default State Content (hidden on hover) */}
                  <div className={`font-bold text-lg xl:text-xl mb-3 ${isHovered ? "text-gold" : "text-black/50 dark:text-white/50"}`}>
                    {item.year}
                  </div>
                  
                  <div className={`relative w-14 h-14 xl:w-16 xl:h-16 rounded-full overflow-hidden mb-3 border-2 border-black/10 dark:border-white/10 shadow-lg`}>
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  
                  <h4 className="font-bold text-xs xl:text-sm mb-1">{item.name}</h4>
                  <p className="text-[10px] xl:text-[11px] text-black/60 dark:text-white/60 leading-relaxed line-clamp-2 px-1">
                    {item.description}
                  </p>
                </div>

                {/* The Node Dot on the timeline */}
                <div className="relative flex items-center justify-center">
                  <div className={`absolute w-8 h-8 rounded-full bg-gold/20 transition-all duration-500 scale-0 ${isHovered ? "scale-100 opacity-100" : "opacity-0"}`} />
                  <div className={`relative w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${isHovered ? "bg-gold scale-125 shadow-[0_0_15px_rgba(251,191,36,0.6)]" : "bg-black/20 dark:bg-white/20"}`} />
                </div>
                
                {/* Large Popup Card on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: isTop ? 10 : -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${contentPos} w-[280px] xl:w-[320px] bg-white dark:bg-[#111] p-5 rounded-2xl border border-black/10 dark:border-white/10 shadow-2xl pointer-events-none z-[100]
                        ${isTop ? "bottom-8" : "top-8"}
                      `}
                    >
                      <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-md">
                          {item.year}
                        </div>
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-gold">{item.name}</h4>
                      <p className="text-xs text-black/70 dark:text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Triangle Pointer */}
                      <div className={`absolute ${pointerPos} w-4 h-4 bg-white dark:bg-[#111] border-black/10 dark:border-white/10 rotate-45
                        ${isTop ? "-bottom-2 border-r border-b" : "-top-2 border-l border-t"}
                      `} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile & Tablet Vertical Timeline */}
      <div className="lg:hidden relative px-6 max-w-lg mx-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-[42px] w-[2px] bg-black/10 dark:bg-white/10 rounded-full" />
        
        <div className="flex flex-col gap-8">
          {unescoTimeline.map((item) => (
            <div key={item.id} className="relative flex items-start gap-6 group cursor-pointer">
              {/* Dot and Year */}
              <div className="flex flex-col items-center z-10 w-12 flex-shrink-0 mt-1">
                <div className="font-bold text-sm text-gold mb-2">{item.year}</div>
                <div className="w-4 h-4 rounded-full bg-black/20 dark:bg-white/20 group-hover:bg-gold transition-colors duration-300 ring-4 ring-white dark:ring-black" />
              </div>
              
              {/* Content Card */}
              <div className="flex-1 bg-white dark:bg-black p-4 rounded-2xl border border-black/5 dark:border-white/5 shadow-lg group-hover:border-gold/50 transition-colors">
                <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden mb-3">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="font-bold text-base md:text-lg mb-1">{item.name}</h4>
                <p className="text-xs md:text-sm text-black/60 dark:text-white/60 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
