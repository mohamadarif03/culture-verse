import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-300 bg-black/20 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-medium tracking-widest text-white group-hover:text-gold transition-colors">
            CULTURE<span className="font-light text-white/50">VERSE</span>
          </span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.15em]">
          <Link href="/" className="text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Beranda</Link>
          <Link href="#jelajahi" className="text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Jelajahi Budaya</Link>
          <Link href="#peta" className="text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Peta Nusantara</Link>
          <Link href="#mainkan" className="text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Mainkan</Link>
          <Link href="#tanya-ai" className="text-white/80 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">Tanya AI</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="#jelajahi" className="hidden md:flex px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]">
            Mulai Jelajah
          </Link>
          <button className="lg:hidden text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
