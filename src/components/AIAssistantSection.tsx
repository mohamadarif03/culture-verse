"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const chats = [
  {
    id: 1,
    question: "Apa makna di balik motif batik Kawung?",
    answer: "Motif Kawung yang menyerupai irisan buah kolang-kaling melambangkan kesucian, umur panjang, dan keadilan. Dahulu, motif ini secara khusus digunakan oleh kalangan keraton."
  },
  {
    id: 2,
    question: "Berasal dari manakah alat musik Angklung?",
    answer: "Angklung adalah alat musik tradisional asli Jawa Barat (Sunda). Ia terbuat dari susunan tabung bambu dan dimainkan dengan cara digoyangkan untuk menghasilkan harmoni nada yang indah."
  },
  {
    id: 3,
    question: "Apa fungsi utama dari Rumah Gadang?",
    answer: "Rumah Gadang dari Minangkabau tidak hanya berfungsi sebagai kediaman keluarga besar (matrilineal), tetapi juga sebagai simbol musyawarah mufakat dan tempat pelaksanaan upacara adat."
  }
];

export default function AIAssistantSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Initial typing sequence
    const initialTimeout = setTimeout(() => setIsTyping(false), 1500);

    // Loop sequence
    const interval = setInterval(() => {
      setIsTyping(true);
      setCurrentIndex((prev) => (prev + 1) % chats.length);
      setTimeout(() => setIsTyping(false), 1500);
    }, 7000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const currentChat = chats[currentIndex];

  return (
    <section id="tanya-ai" className="relative z-20 bg-black text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column (50%) - Chat Mockup Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative">
          {/* Decorative glow behind mockup */}
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
            {/* Header Mockup */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 3.6 8 8 12 4.4-4 8-6.6 8-12a8 8 0 0 0-8-8Z"/><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
              </div>
              <div>
                <h4 className="font-medium text-sm text-white">AI Asisten Budaya</h4>
                <p className="text-[10px] text-green-400">Online</p>
              </div>
            </div>

            {/* Chat Body Mockup */}
            <div className="p-6 h-[320px] md:h-[350px] flex flex-col justify-end space-y-4">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`user-${currentIndex}`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3 }}
                  className="self-end max-w-[85%] bg-white/10 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white/90 leading-relaxed shadow-lg"
                >
                  {currentChat.question}
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold mt-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.4 3.6 8 8 12 4.4-4 8-6.6 8-12a8 8 0 0 0-8-8Z"/><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg>
                </div>
                
                <AnimatePresence mode="wait">
                  {isTyping ? (
                    <motion.div 
                      key="typing"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="self-start max-w-[85%] bg-black/40 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-4 shadow-lg flex gap-1.5 items-center"
                    >
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gold rounded-full" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key={`answer-${currentIndex}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.3 }}
                      className="self-start max-w-[85%] bg-black/40 border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/80 leading-relaxed shadow-lg"
                    >
                      {currentChat.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Chat Input Mockup */}
            <div className="px-6 py-4 border-t border-white/5 flex gap-3 items-center">
              <div className="w-full bg-white/5 border border-white/10 rounded-full h-10 flex items-center px-4">
                <span className="text-white/30 text-xs">Ketik pertanyaanmu di sini...</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (50%) - Text */}
        <div className="w-full lg:w-1/2">
          <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-medium block">
            Asisten Budaya
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
            Tanya Apa Saja Soal Budaya Nusantara
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
            Punya pertanyaan spesifik soal motif kain, sejarah alat musik, atau makna tradisi suatu daerah? Asisten AI kami siap membantu menjelaskan dengan mudah dan akurat.
          </p>

          <div className="flex items-start gap-4 mb-10 p-4 rounded-xl bg-white/5 border border-white/10 max-w-lg">
            <div className="flex-shrink-0 mt-0.5 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
            </div>
            <div>
              <h5 className="text-sm font-medium text-white mb-1">Analisis Visual AI</h5>
              <p className="text-xs text-white/60 leading-relaxed">
                Kamu juga bisa mengunggah foto kain batik atau artefak kuno untuk dianalisis sejarah dan filosofinya!
              </p>
            </div>
          </div>
          
          <Link 
            href="/tanya-ai" 
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            Coba Sekarang
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
