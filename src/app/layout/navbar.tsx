import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Jika scroll lebih dari 20px, aktifkan mode melayang
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-1'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        <div
          className={`flex justify-between items-center transition-all duration-500 px-6 py-3 ${isScrolled
              ? 'backdrop-blur-xl bg-emerald-900/30 border border-white/20 rounded-full shadow-2xl mx-4 md:mx-0'
              : 'bg-transparent border-transparent'
            }`}
        >
          {/* Logo Section */}
          {/* Logo Section - Perbaikan Lebar */}
          <div className="flex items-center flex-1 py-2"> 
  <img
    src="/khot.png"
    alt="Siswa Islami"
    className={`transition-all duration-500 object-contain object-left ${
      isScrolled
        ? 'h-12 md:h-16 w-auto max-w-[350px] md:max-w-[450px]' // Ukuran saat scroll (tetap elegan)
        : 'h-20 md:h-28 lg:h-32 w-auto max-w-[450px] md:max-w-[700px]' // Ukuran raksasa saat di atas
    }`}
    style={{ aspectRatio: '916/272' }}
  />
</div>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center gap-8 text-sm font-bold tracking-wide transition-colors ${isScrolled ? 'text-white' : 'text-white'
            }`}>
            <a href="#about" className="hover:text-lime-800 transition-all">Tentang Kami</a>
            <a href="#unit" className="hover:text-lime-800 transition-all">Unit Pendidikan</a>
            <a href="#kontak" className={`px-5 py-2 rounded-full transition-all ${isScrolled
                ? 'bg-lime-500 text-emerald-900'
                : 'bg-white text-emerald-900 shadow-lg'
              }`}>
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}