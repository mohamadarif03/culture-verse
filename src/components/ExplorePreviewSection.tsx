import Link from "next/link";
import Image from "next/image";

export default function ExplorePreviewSection() {
  const cards = [
    {
      id: 1,
      title: "Batik Parang",
      category: "Kriya & Tekstil",
      image: "https://images.unsplash.com/photo-1605333642358-0ce95efed1fb?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      title: "Angklung",
      category: "Alat Musik",
      image: "https://images.unsplash.com/photo-1516280440502-861d856d33a4?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      title: "Wayang Kulit",
      category: "Seni Pertunjukan",
      image: "https://images.unsplash.com/photo-1583091942171-897b7b13735a?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Rendang Padang",
      category: "Kuliner Tradisional",
      image: "https://images.unsplash.com/photo-1594212724424-9b0d62a220dc?q=80&w=1200&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-1",
    }
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] border-t border-white/5 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold tracking-[0.2em] uppercase text-xs mb-4 font-medium block">
              Eksplorasi
            </span>
            <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight text-white">
              Jelajahi Kekayaan <br className="hidden md:block" /> Budaya Nusantara
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Dari motif batik hingga cita rasa kuliner, temukan kisah mendalam di balik setiap warisan yang membentuk identitas bangsa.
            </p>
          </div>
          <div className="hidden md:block">
            <Link 
              href="#jelajahi" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-gold hover:text-gold text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-full"
            >
              Jelajahi Semua
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[650px] mb-12 md:mb-0">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${card.span} min-h-[300px] md:min-h-0 bg-white/5`}
            >
              {/* Image with subtle zoom on hover */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end">
                <span className="text-white/70 text-[10px] md:text-xs uppercase tracking-widest font-medium mb-2 block transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {card.category}
                </span>
                <h3 className="text-2xl md:text-3xl text-white font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA (Visible only on small screens) */}
        <div className="md:hidden flex justify-center mt-8">
          <Link 
            href="#jelajahi" 
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-gold hover:text-gold text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 rounded-full"
          >
            Jelajahi Semua
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
