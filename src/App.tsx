import { useState, useEffect } from 'react';
import { 
  ArrowDownToLine, 
  ShieldCheck, 
  Sparkles, 
  Menu, 
  X, 
  Compass, 
  HelpCircle,
  Star, 
  Smartphone, 
  Flame, 
  Cpu, 
  Zap, 
  Volume2, 
  LayoutGrid, 
  CheckCircle2, 
  MonitorPlay, 
  Layers, 
  Unlock, 
  MessageCircle, 
  Heart,
  Lock,
  Server,
  EyeOff,
  FileText,
  Tv,
  BadgeCheck,
  ArrowUpRight
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [footerLogoError, setFooterLogoError] = useState(false);
  const [heroImg1Error, setHeroImg1Error] = useState(false);
  const [heroImg2Error, setHeroImg2Error] = useState(false);
  const [sigError, setSigError] = useState(false);

  // Official GitHub Release Direct CDN Download URL
  const GITHUB_RELEASE_APK = 'https://github.com/SALMAN-ORAKXI/MovieDock-WEBSITE/releases/download/v1.2.0/app-release.apk';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setDownloading(true);
    
    // Direct trigger from GitHub Release Fast CDN
    const link = document.createElement('a');
    link.href = GITHUB_RELEASE_APK;
    link.download = 'MovieDock-v1.2.0.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const scrollToDownload = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        document.getElementById('download-zone')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    document.getElementById('download-zone')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col font-sans selection:bg-sky-400 selection:text-white">
      
      {/* Background Soft Sky Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-sky-300/40 via-cyan-200/30 to-transparent rounded-full blur-[130px]" />
        <div className="absolute top-[30%] -left-48 w-[600px] h-[600px] bg-sky-200/50 rounded-full blur-[140px]" />
        <div className="absolute top-[60%] -right-48 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[140px]" />
      </div>

      {/* ========================================================================= */}
      {/* 1. LIQUID GLASS CAPSULE NAVBAR */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
        <nav className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 flex items-center justify-between bg-white/60 backdrop-blur-2xl border border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.15),inset_0_1px_2px_rgba(255,255,255,0.9)] ${
          scrolled ? 'shadow-[0_20px_45px_-10px_rgba(56,189,248,0.25)] bg-white/75 scale-[0.99]' : ''
        }`}>
          
          {/* Logo with App Icon Image */}
          <div 
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-b from-white to-sky-50 border border-white p-1 shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden">
              {!logoError ? (
                <img 
                  src="/images/app-icon.png" 
                  alt="MovieDock Logo" 
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-sky-400 to-cyan-300 flex items-center justify-center text-white">
                  <Tv className="w-5 h-5 stroke-[2]" />
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
                MovieDock
                <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-sky-100 text-sky-700 border border-sky-200/80 rounded-full">v1.2</span>
              </span>
              <span className="text-[10px] text-slate-500 font-semibold -mt-0.5">Android 4K Portal</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-200/30 p-1 rounded-full border border-white/70 backdrop-blur-xl shadow-inner">
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all"
            >
              <Compass className="w-3.5 h-3.5 stroke-[2]" /> Features
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all"
            >
              <HelpCircle className="w-3.5 h-3.5 stroke-[2]" /> Install Guide
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-sky-600 hover:bg-white/80 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 stroke-[2]" /> Community
            </button>
            <button 
              onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${currentPage === 'privacy' ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'text-slate-700 hover:text-sky-600 hover:bg-white/80'}`}
            >
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> Privacy
            </button>
          </div>

          {/* Quick Download Pill */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={scrollToDownload}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-b from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-500 rounded-full shadow-[0_10px_25px_-5px_rgba(14,165,233,0.4),inset_0_1px_1px_rgba(255,255,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ArrowDownToLine className="w-4 h-4 stroke-[2]" />
              <span>Download APK</span>
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/70 border border-white flex items-center justify-center text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2]" /> : <Menu className="w-5 h-5 stroke-[2]" />}
          </button>
        </nav>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white flex flex-col gap-2">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left text-slate-800 font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
              <Compass className="w-4 h-4 text-sky-500 stroke-[2]" /> Features
            </button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left text-slate-800 font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
              <HelpCircle className="w-4 h-4 text-sky-500 stroke-[2]" /> Install Guide
            </button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left text-slate-800 font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
              <Sparkles className="w-4 h-4 text-sky-500 stroke-[2]" /> Community Reviews
            </button>
            <button onClick={() => { setCurrentPage('privacy'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 text-left text-slate-800 font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-50">
              <ShieldCheck className="w-4 h-4 text-sky-500 stroke-[2]" /> Privacy Policy
            </button>
            <button onClick={scrollToDownload} className="w-full mt-2 py-3 bg-gradient-to-r from-sky-400 to-sky-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-sky-400/30">
              <ArrowDownToLine className="w-4 h-4 stroke-[2]" /> Download MovieDock APK
            </button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 2. BODY CONTENT */}
      {/* ========================================================================= */}
      <main className="relative z-10 flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section id="download-zone" className="pt-28 md:pt-36 pb-16 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-white/90 text-xs font-bold text-slate-700 shadow-[0_4px_20px_-2px_rgba(56,189,248,0.12)] mb-7">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" /> 4.9/5 Rating
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-sky-600">
                  <Flame className="w-3.5 h-3.5 fill-sky-400 stroke-none" /> 21.7K+ Downloads
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> 100% Virus-Free
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-[1.12] mb-5">
                Stream Unlimited 4K Cinema on <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400">Android</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mb-9">
                Experience crystal clear 4K HDR playback, multi-language dual audio, and lightning-fast direct offline downloads to phone storage.
              </p>

              {/* Download CTA Pill */}
              <div className="w-full max-w-xl flex flex-col items-center gap-3.5">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="group w-full max-w-md relative overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 p-[1.5px] shadow-[0_15px_35px_-6px_rgba(14,165,233,0.45)] hover:shadow-[0_20px_45px_-6px_rgba(14,165,233,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white/95 group-hover:bg-white/90 backdrop-blur-2xl transition-all">
                    
                    <div className="flex items-center gap-3.5 text-left">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-b from-sky-400 to-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-400/40">
                        <ArrowDownToLine className={`w-5 h-5 stroke-[2] ${downloading ? 'animate-bounce' : ''}`} />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                          {downloading ? 'Starting Direct Download...' : 'Download MovieDock APK'}
                        </div>
                        <div className="text-[11px] text-slate-500 font-semibold">
                          v1.2.0 • Android 8.0+
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1 bg-sky-100 text-sky-700 text-xs font-black rounded-full border border-sky-200">
                      <span>FREE</span>
                    </div>

                  </div>
                </button>

                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 hover:bg-white/90 border border-white/90 text-slate-600 hover:text-slate-900 text-xs font-bold transition-all shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
                >
                  <Smartphone className="w-3.5 h-3.5 text-sky-500 stroke-[2]" />
                  <span>Alternative Direct APK Mirror (GitHub Fast CDN)</span>
                </button>
              </div>

              {/* 📱 2 SCREENSHOTS SHOWCASE */}
              <div className="relative mt-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
                
                <div className="absolute inset-0 bg-gradient-to-r from-sky-300/30 via-cyan-200/20 to-blue-300/30 rounded-[80px] blur-3xl -z-10" />

                {/* Screenshot 1 */}
                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className="rounded-[44px] p-[8px] bg-gradient-to-b from-white via-slate-100 to-slate-200 shadow-[0_25px_60px_-12px_rgba(14,165,233,0.3)] border border-white">
                    <div className="relative rounded-[36px] bg-slate-950 overflow-hidden aspect-[9/19.5] shadow-inner">
                      {!heroImg1Error ? (
                        <img 
                          src="/images/hero-mockup.png" 
                          alt="MovieDock Home Interface" 
                          onError={() => setHeroImg1Error(true)}
                          className="w-full h-full object-cover rounded-[36px]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-xs p-6">
                          <span>Place <code>hero-mockup.png</code> in <code>public/images/</code></span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-500 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span>Home & 4K Catalog</span>
                  </div>
                </div>

                {/* Screenshot 2 */}
                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className="rounded-[44px] p-[8px] bg-gradient-to-b from-white via-slate-100 to-slate-200 shadow-[0_25px_60px_-12px_rgba(14,165,233,0.3)] border border-white">
                    <div className="relative rounded-[36px] bg-slate-950 overflow-hidden aspect-[9/19.5] shadow-inner">
                      {!heroImg2Error ? (
                        <img 
                          src="/images/hero-mockup-2.png" 
                          alt="MovieDock Player Interface" 
                          onError={() => setHeroImg2Error(true)}
                          className="w-full h-full object-cover rounded-[36px]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-xs p-6">
                          <span>Place <code>hero-mockup-2.png</code> in <code>public/images/</code></span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-500 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>4K Player & Downloads</span>
                  </div>
                </div>

              </div>

            </section>

            {/* BENTO FEATURES */}
            <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100/90 px-3.5 py-1 rounded-full border border-sky-200/80 shadow-sm">
                  iOS Bento Grid
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
                  Engineered for Ultra-Fast 4K Streaming
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Lag-free hardware acceleration, parallel download engine, and crystal clear multi-audio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="md:col-span-2 bg-white/65 backdrop-blur-2xl border border-white/90 rounded-[32px] p-7 flex flex-col justify-between shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:border-sky-300 transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                      <Cpu className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100/80 text-sky-700 border border-sky-200">
                      Native MPV Engine
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lag-Free 4K Ultra Playback</h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                      Hardware decoding for HEVC, AV1, and VP9. Smooth 60fps playback without battery draining or overheating on Android 8.0+.
                    </p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-white/80 h-36 shadow-inner flex items-center justify-between px-6 text-white">
                    <div className="flex items-center gap-3">
                      <MonitorPlay className="w-8 h-8 text-sky-400 stroke-[1.5]" />
                      <div>
                        <div className="text-xs font-bold">4K HDR MediaKit Pipeline Active</div>
                        <div className="text-[10px] text-sky-200">Zero Drop Frames • Dual Buffer On</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-sky-500/30 text-sky-300 text-[10px] font-bold rounded-lg border border-sky-400/30">60 FPS</span>
                  </div>
                </div>

                <div className="md:col-span-1 bg-white/65 backdrop-blur-2xl border border-white/90 rounded-[32px] p-7 flex flex-col justify-between shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:border-sky-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                        <Zap className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        8x Threads
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">Resumable Offline DL</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Save files directly to internal storage or SD card. Parallel chunks for maximum WiFi / 5G speeds.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-sky-600">
                    <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                    <span>Direct to /Download Folder</span>
                  </div>
                </div>

                <div className="md:col-span-1 bg-white/65 backdrop-blur-2xl border border-white/90 rounded-[32px] p-7 flex flex-col justify-between shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:border-sky-300 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                        <Volume2 className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Multi-Track
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">Dual Audio & Subs</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Toggle Hindi, English, Spanish, and Japanese audio tracks on the fly with auto-synced subtitle tracks.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-700">
                    <Layers className="w-4 h-4 text-sky-500 stroke-[2]" />
                    <span>Auto Subtitle Matcher</span>
                  </div>
                </div>

                <div className="md:col-span-2 bg-white/65 backdrop-blur-2xl border border-white/90 rounded-[32px] p-7 flex flex-col justify-between shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:border-sky-300 transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                      <LayoutGrid className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100/80 text-sky-700 border border-sky-200">
                      50K+ Titles
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Categorized Discovery</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Explore daily updated feeds for trending cinema, K-Dramas, Anime releases, and OTT exclusives in one streamlined portal.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                    <div className="p-2.5 rounded-xl bg-white/80 border border-white shadow-sm">🎬 Hollywood & OTT</div>
                    <div className="p-2.5 rounded-xl bg-white/80 border border-white shadow-sm">🎌 Anime 4K Dubbed</div>
                    <div className="p-2.5 rounded-xl bg-white/80 border border-white shadow-sm">🍿 Top Web Series</div>
                  </div>
                </div>

              </div>
            </section>

            {/* INSTALL GUIDE */}
            <section id="install-guide" className="py-16 px-4 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200/80">
                  Fast Setup
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
                  How to Install MovieDock on Android
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  No rooting required. Ready to stream in under 30 seconds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "01", icon: ArrowDownToLine, title: "Download APK File", desc: "Tap the Download APK button to save 'MovieDock-v1.2.0.apk' onto your Android device." },
                  { step: "02", icon: Unlock, title: "Allow Unknown Sources", desc: "If Android asks for verification, tap Settings → Security and allow installation from your browser." },
                  { step: "03", icon: Sparkles, title: "Install & Stream", desc: "Open the downloaded file from notifications, click Install, and launch MovieDock immediately!" }
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="bg-white/65 backdrop-blur-2xl border border-white/90 rounded-[32px] p-7 flex flex-col justify-between shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:scale-[1.01] transition-transform">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-3xl font-black text-sky-300 font-mono">{s.step}</span>
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm">
                          <Icon className="w-5 h-5 stroke-[1.75]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-600">
                        <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                        <span>Verified Android Package</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* REVIEWS */}
            <section id="reviews" className="py-16 px-4 max-w-6xl mx-auto">
              <div className="bg-white/65 backdrop-blur-2xl border border-white/90 rounded-[36px] p-8 sm:p-11 shadow-[0_20px_50px_-15px_rgba(56,189,248,0.2),inset_0_1px_2px_rgba(255,255,255,0.9)]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Loved by 21,700+ Streamers</h3>
                    <p className="text-sm text-slate-600 mt-1">Verified user community feedback.</p>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-sky-500 font-mono">21.7K+</div>
                      <div className="text-xs text-slate-500 font-bold">Active Downloads</div>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-300" />
                    <div className="text-center">
                      <div className="text-3xl font-black text-amber-500 font-mono flex items-center justify-center gap-1">
                        4.9 <Star className="w-5 h-5 fill-amber-400 stroke-none inline" />
                      </div>
                      <div className="text-xs text-slate-500 font-bold">Global Rating</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                  {[
                    { name: "Hamza Tariq", location: "Lahore, PK", review: "MovieDock is 10x smoother than VidMate. No clutter, fast downloads, and 4K HDR playback runs perfectly on mobile data!" },
                    { name: "Alex Rivera", location: "Madrid, ES", review: "The download speed is unbelievable. Saved full anime series with dual audio directly to my external SD card in minutes." },
                    { name: "Rohit Verma", location: "Mumbai, IN", review: "Super sleek interface with instant playback. Easily the best free streaming APK on Android right now." }
                  ].map((r, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-white/80 border border-white shadow-sm flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-1 text-amber-400 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                          ))}
                        </div>
                        <p className="text-sm text-slate-700 italic mb-6">"{r.review}"</p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                        <div>
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                            {r.name} <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 stroke-[2] inline" />
                          </div>
                          <div className="text-[11px] text-slate-500">{r.location}</div>
                        </div>
                        <span className="text-[10px] font-bold text-sky-700 bg-sky-100/80 border border-sky-200 px-2 py-0.5 rounded-full">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* PRIVACY PAGE */
          <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 mx-auto flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Privacy Policy & Safety
              </h1>
              <p className="text-sm text-slate-600 mt-2">MovieDock Official Portal • Android Security Verified</p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
                  <Lock className="w-5 h-5 text-sky-600" /> 1. Zero Personal Data Logging
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  MovieDock does not ask for or collect names, email addresses, phone numbers, or account passwords. You can search, stream, and download without registering.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
                  <Server className="w-5 h-5 text-sky-600" /> 2. Storage Permissions Explained
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The application only requires storage access to write media files to your Downloads folder when you explicitly tap the download button.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
                  <EyeOff className="w-5 h-5 text-sky-600" /> 3. Advertising & Monetag Network
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To provide continuous free downloads and server upkeep, non-intrusive ads from verified ad networks (like Monetag) may appear.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm">
                <div className="flex items-center gap-3 text-slate-900 font-bold text-base mb-2">
                  <FileText className="w-5 h-5 text-sky-600" /> 4. Support & Legal Inquiries
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For privacy inquiries or technical support, contact developer Salman Khan via the official WhatsApp channel.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* 6. ULTRA-PREMIUM LIQUID GLASS BENTO FOOTER */}
      {/* ========================================================================= */}
      <footer className="mt-20 border-t border-white/90 bg-white/55 backdrop-blur-2xl pt-14 pb-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          
          {/* 3-Column Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-white to-sky-50 border border-white p-1 shadow-sm flex items-center justify-center overflow-hidden">
                    {!footerLogoError ? (
                      <img 
                        src="/images/app-icon.png" 
                        alt="MovieDock Logo" 
                        onError={() => setFooterLogoError(true)}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <Tv className="w-6 h-6 text-sky-500 stroke-[2]" />
                    )}
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                      MovieDock
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">Official</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">Android 4K Streaming Ecosystem</div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                  Next-generation mobile streaming portal and offline downloader. Built for ultra-fast, seamless entertainment on all Android devices.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-white text-[11px] font-semibold text-slate-600 shadow-sm">
                  <BadgeCheck className="w-3.5 h-3.5 text-sky-500" /> Verified Clean Build
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 border border-white text-[11px] font-semibold text-slate-600 shadow-sm">
                  v1.2.0 Stable
                </span>
              </div>
            </div>

            {/* Column 2: PROMINENT LARGE SIGNATURE TRUST CARD */}
            <div className="md:col-span-4 rounded-3xl bg-white/85 border border-white p-5 shadow-[0_10px_25px_-5px_rgba(56,189,248,0.12)] flex flex-col justify-between">
              
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Founder & Core Developer</span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
                  <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Verified
                </div>
              </div>

              {/* LARGE SIGNATURE DISPLAY */}
              <div className="my-2 flex flex-col items-center justify-center p-3 rounded-2xl bg-gradient-to-b from-slate-50 via-white to-sky-50/40 border border-slate-100/80 min-h-[96px]">
                {!sigError ? (
                  <img 
                    src="/images/signature.png" 
                    alt="Salman Khan Signature" 
                    onError={() => setSigError(true)}
                    className="h-70 sm:h-24 w-auto max-w-[200px] object-contain drop-shadow-md transition-transform hover:scale-105 duration-200"
                  />
                ) : (
                  <span className="font-serif italic font-extrabold text-3xl text-slate-800 tracking-wide">
                    Salman Khan
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                <span className="font-bold text-slate-900">Salman Khan</span>
                <span className="text-[11px] text-slate-400 font-medium">MovieDock Project Lead</span>
              </div>
            </div>

            {/* Column 3: PRIVATE WHATSAPP SUPPORT & LINKS */}
            <div className="md:col-span-3 flex flex-col justify-between gap-3">
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Live Support</div>
                
                {/* WhatsApp Button (Hidden Phone Number) */}
                <a
                  href="https://wa.me/923275176283?text=Hi%20MovieDock%20Support,%20I%20need%20help%20with%20the%20APK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-emerald-800 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                      <MessageCircle className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold">WhatsApp Support</div>
                      <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        Direct 24/7 Chat
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Fast Quick Links */}
              <div className="flex flex-col gap-1.5 text-xs font-semibold text-slate-600">
                <button 
                  onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-left hover:text-sky-600 transition-colors py-1 flex items-center justify-between border-b border-slate-100"
                >
                  <span>Privacy Policy & Safety</span>
                  <span className="text-slate-300">→</span>
                </button>
                <button 
                  onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
                  className="text-left hover:text-sky-600 transition-colors py-1 flex items-center justify-between"
                >
                  <span>How to Install Guide</span>
                  <span className="text-slate-300">→</span>
                </button>
              </div>

            </div>

          </div>

          {/* DMCA Disclaimer */}
          <div className="p-4 rounded-2xl bg-white/60 border border-white text-[11px] text-slate-500 leading-relaxed flex items-start gap-3 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-sky-500 stroke-[2] flex-shrink-0 mt-0.5" />
            <span>
              <strong>DMCA & Disclaimer:</strong> MovieDock is an indexing and media management portal that does not host or broadcast video streams on its servers. All copyrights belong to their respective owners in compliance with 17 U.S.C. § 512.
            </span>
          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4 border-t border-slate-200/60">
            <div className="flex items-center gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
              <span>by <strong>Salman Khan</strong> • MovieDock Ecosystem © 2026</span>
            </div>
            <div className="text-[11px] text-slate-400">
              All Rights Reserved.
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}