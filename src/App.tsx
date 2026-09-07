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
  ArrowUpRight,
  Sun,
  Moon,
  ChevronDown,
  Check,
  Ban
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 🌗 Day & Night Theme State (Default: Dark mode with persistence)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('moviedock_theme') as 'dark' | 'light') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('moviedock_theme', newTheme);
  };

  // 📈 Base Download Counter Locked at 21.8K+ (Never Resets)
  const BASE_DOWNLOAD_COUNT = 21800;

  const [releaseData, setReleaseData] = useState({
    version: 'v1.2.0',
    size: '101.5 MB',
    downloadUrl: 'https://github.com/SALMAN-ORAKXI/MovieDock-WEBSITE/releases/download/v1.2.0/app-release.apk',
    totalDownloads: BASE_DOWNLOAD_COUNT
  });

  // ⚡ AUTO-CHECK GITHUB RELEASES API
  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/SALMAN-ORAKXI/MovieDock-WEBSITE/releases/latest');
        if (response.ok) {
          const data = await response.json();
          if (data && data.assets && data.assets.length > 0) {
            const apkAsset = data.assets.find((a: any) => a.name.endsWith('.apk')) || data.assets[0];
            const sizeInMB = (apkAsset.size / (1024 * 1024)).toFixed(1) + ' MB';
            setReleaseData({
              version: data.tag_name || 'v1.2.0',
              size: sizeInMB,
              downloadUrl: apkAsset.browser_download_url,
              totalDownloads: BASE_DOWNLOAD_COUNT + (apkAsset.download_count || 0)
            });
          }
        }
      } catch (err) {
        console.log('Using default release fallback');
      }
    };

    fetchLatestRelease();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    setDownloading(true);
    
    const link = document.createElement('a');
    link.href = releaseData.downloadUrl;
    link.download = `MovieDock-${releaseData.version}.apk`;
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

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 flex flex-col ${
      isDark ? 'bg-[#090d16] text-slate-100' : 'bg-[#f1f5f9] text-slate-800'
    }`}>
      
      {/* Dynamic Ambient Mesh Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[140px] transition-all ${
          isDark ? 'bg-sky-600/15' : 'bg-sky-300/40'
        }`} />
        <div className={`absolute top-[30%] -left-48 w-[600px] h-[600px] rounded-full blur-[140px] transition-all ${
          isDark ? 'bg-blue-600/10' : 'bg-sky-200/50'
        }`} />
        <div className={`absolute top-[60%] -right-48 w-[600px] h-[600px] rounded-full blur-[140px] transition-all ${
          isDark ? 'bg-cyan-600/10' : 'bg-blue-200/40'
        }`} />
      </div>

      {/* ========================================================================= */}
      {/* 1. LIQUID GLASS CAPSULE NAVBAR (WITH DAY/NIGHT SWITCHER) */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
        <nav className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 flex items-center justify-between backdrop-blur-2xl ${
          isDark 
            ? 'bg-slate-900/65 border border-white/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)]' 
            : 'bg-white/60 border border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.15),inset_0_1px_2px_rgba(255,255,255,0.9)]'
        } ${scrolled ? 'scale-[0.99] shadow-2xl' : ''}`}>
          
          {/* Logo with App Icon */}
          <div 
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className={`w-10 h-10 rounded-2xl p-1 shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden border ${
              isDark ? 'bg-slate-800 border-white/10' : 'bg-gradient-to-b from-white to-sky-50 border-white'
            }`}>
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
              <span className="font-extrabold text-base tracking-tight flex items-center gap-1.5">
                MovieDock
                <span className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-full border ${
                  isDark ? 'bg-sky-500/20 text-sky-400 border-sky-500/30' : 'bg-sky-100 text-sky-700 border-sky-200/80'
                }`}>
                  {releaseData.version}
                </span>
              </span>
              <span className={`text-[10px] font-semibold -mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Android 4K Portal
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-xl ${
            isDark ? 'bg-slate-800/40 border-white/10' : 'bg-slate-200/30 border-white/70 shadow-inner'
          }`}>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                isDark ? 'text-slate-300 hover:text-sky-400 hover:bg-white/5' : 'text-slate-700 hover:text-sky-600 hover:bg-white/80'
              }`}
            >
              <Compass className="w-3.5 h-3.5 stroke-[2]" /> Features
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                isDark ? 'text-slate-300 hover:text-sky-400 hover:bg-white/5' : 'text-slate-700 hover:text-sky-600 hover:bg-white/80'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 stroke-[2]" /> Why MovieDock?
            </button>
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                isDark ? 'text-slate-300 hover:text-sky-400 hover:bg-white/5' : 'text-slate-700 hover:text-sky-600 hover:bg-white/80'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 stroke-[2]" /> Install Guide
            </button>
            <button 
              onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentPage === 'privacy' 
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30' 
                  : isDark ? 'text-slate-300 hover:text-sky-400 hover:bg-white/5' : 'text-slate-700 hover:text-sky-600 hover:bg-white/80'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> Privacy
            </button>
          </div>

          {/* Day / Night Theme Switcher + Download Pill */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${
                isDark 
                  ? 'bg-slate-800 border-white/10 text-amber-400 hover:bg-slate-700' 
                  : 'bg-white/80 border-slate-200 text-slate-700 hover:bg-white shadow-sm'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 stroke-[2]" /> : <Moon className="w-4 h-4 stroke-[2]" />}
            </button>

            <button 
              onClick={scrollToDownload}
              className="group inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-gradient-to-b from-sky-400 to-sky-500 hover:from-sky-300 hover:to-sky-500 rounded-full shadow-[0_10px_25px_-5px_rgba(14,165,233,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ArrowDownToLine className="w-4 h-4 stroke-[2]" />
              <span>Download APK</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center border ${
                isDark ? 'bg-slate-800 border-white/10 text-amber-400' : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                isDark ? 'bg-slate-800 border-white/10 text-slate-200' : 'bg-white/70 border-white text-slate-700'
              }`}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 stroke-[2]" /> : <Menu className="w-4 h-4 stroke-[2]" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Sheet */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-20 left-4 right-4 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border flex flex-col gap-2 ${
            isDark ? 'bg-slate-900/95 border-white/10 text-white' : 'bg-white/95 border-white text-slate-800'
          }`}>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-500/10">
              <Compass className="w-4 h-4 text-sky-500 stroke-[2]" /> Features
            </button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-500/10">
              <Sparkles className="w-4 h-4 text-sky-500 stroke-[2]" /> Why MovieDock?
            </button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-500/10">
              <HelpCircle className="w-4 h-4 text-sky-500 stroke-[2]" /> Install Guide
            </button>
            <button onClick={() => { setCurrentPage('privacy'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-sky-500/10">
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
              
              {/* Trust Badge with 21.8K+ Download Counter */}
              <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-xl border text-xs font-bold shadow-sm mb-7 ${
                isDark ? 'bg-slate-900/80 border-white/10 text-slate-300' : 'bg-white/70 border-white/90 text-slate-700 shadow-[0_4px_20px_-2px_rgba(56,189,248,0.12)]'
              }`}>
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" /> 4.9/5 Rating
                </span>
                <span className="text-slate-400">•</span>
                <span className="flex items-center gap-1 text-sky-500 font-bold">
                  <Flame className="w-3.5 h-3.5 fill-sky-400 stroke-none" /> {(releaseData.totalDownloads / 1000).toFixed(1)}K+ Downloads
                </span>
                <span className="text-slate-400">•</span>
                <span className="flex items-center gap-1 text-emerald-500">
                  <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> 100% Virus-Free
                </span>
              </div>

              {/* Headline */}
              <h1 className={`text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.12] mb-5 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Stream Unlimited 4K Cinema on <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400">Android</span>
              </h1>

              {/* Subtitle */}
              <p className={`text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-9 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Experience crystal clear 4K HDR playback, multi-language dual audio, and lightning-fast direct offline downloads to phone storage.
              </p>

              {/* Download CTA Pill */}
              <div className="w-full max-w-xl flex flex-col items-center gap-3.5">
                <button
                  onClick={handleDownload}
                  disabled={downloading}
                  className="group w-full max-w-md relative overflow-hidden rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 p-[1.5px] shadow-[0_15px_35px_-6px_rgba(14,165,233,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <div className={`flex items-center justify-between px-6 py-3.5 rounded-full backdrop-blur-2xl transition-all ${
                    isDark ? 'bg-slate-950/95 group-hover:bg-slate-950/85' : 'bg-white/95 group-hover:bg-white/90'
                  }`}>
                    
                    <div className="flex items-center gap-3.5 text-left">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-b from-sky-400 to-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-400/40">
                        <ArrowDownToLine className={`w-5 h-5 stroke-[2] ${downloading ? 'animate-bounce' : ''}`} />
                      </div>
                      <div>
                        <div className={`text-sm sm:text-base font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {downloading ? 'Starting Direct Download...' : 'Download MovieDock APK'}
                        </div>
                        <div className="text-[11px] text-sky-400 font-semibold">
                          {releaseData.version} • {releaseData.size} • Android 8.0+
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1 bg-sky-500 text-white text-xs font-black rounded-full shadow-sm">
                      <span>FREE</span>
                    </div>

                  </div>
                </button>

                <button
                  onClick={handleDownload}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-bold transition-all ${
                    isDark 
                      ? 'bg-slate-900/60 hover:bg-slate-900 border-white/10 text-slate-300' 
                      : 'bg-white/60 hover:bg-white/90 border-white/90 text-slate-600 shadow-sm'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 text-sky-500 stroke-[2]" />
                  <span>Direct GitHub CDN Mirror ({releaseData.size})</span>
                </button>
              </div>

              {/* 📱 2 SCREENSHOTS SHOWCASE */}
              <div className="relative mt-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
                
                <div className="absolute inset-0 bg-gradient-to-r from-sky-300/20 via-cyan-200/10 to-blue-300/20 rounded-[80px] blur-3xl -z-10" />

                {/* Screenshot 1 */}
                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className={`rounded-[44px] p-[8px] border shadow-2xl ${
                    isDark ? 'bg-slate-800 border-white/10' : 'bg-gradient-to-b from-white via-slate-100 to-slate-200 border-white'
                  }`}>
                    <div className="relative rounded-[36px] bg-slate-950 overflow-hidden aspect-[9/19.5] shadow-inner">
                      {!heroImg1Error ? (
                        <img 
                          src="/images/hero-mockup.png" 
                          alt="MovieDock Home Interface" 
                          onError={() => setHeroImg1Error(true)}
                          className="w-full h-full object-cover rounded-[36px]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-xs p-6 text-center">
                          <span>Place <code>hero-mockup.png</code> in <code>public/images/</code></span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-400 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span>Home & 4K Catalog</span>
                  </div>
                </div>

                {/* Screenshot 2 */}
                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className={`rounded-[44px] p-[8px] border shadow-2xl ${
                    isDark ? 'bg-slate-800 border-white/10' : 'bg-gradient-to-b from-white via-slate-100 to-slate-200 border-white'
                  }`}>
                    <div className="relative rounded-[36px] bg-slate-950 overflow-hidden aspect-[9/19.5] shadow-inner">
                      {!heroImg2Error ? (
                        <img 
                          src="/images/hero-mockup-2.png" 
                          alt="MovieDock Player Interface" 
                          onError={() => setHeroImg2Error(true)}
                          className="w-full h-full object-cover rounded-[36px]"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-xs p-6 text-center">
                          <span>Place <code>hero-mockup-2.png</code> in <code>public/images/</code></span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 text-xs font-bold text-slate-400 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>4K Player & Downloads</span>
                  </div>
                </div>

              </div>

            </section>

            {/* ========================================================================= */}
            {/* 3. BENTO FEATURES SHOWCASE */}
            {/* ========================================================================= */}
            <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
                  iOS Bento Grid
                </span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Engineered for Ultra-Fast 4K Streaming
                </h2>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Lag-free hardware acceleration, parallel download engine, and crystal clear multi-audio.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Box 1 */}
                <div className={`md:col-span-2 backdrop-blur-2xl rounded-[32px] p-7 flex flex-col justify-between border transition-all ${
                  isDark ? 'bg-slate-900/60 border-white/10 hover:border-sky-500/30' : 'bg-white/65 border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12)]'
                }`}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm">
                      <Cpu className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      Native MPV Engine
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Lag-Free 4K Ultra Playback</h3>
                    <p className={`text-sm leading-relaxed max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Hardware decoding for HEVC, AV1, and VP9. Smooth 60fps playback without battery draining or overheating on Android 8.0+.
                    </p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 border border-white/10 h-36 shadow-inner flex items-center justify-between px-6 text-white">
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

                {/* Box 2 */}
                <div className={`md:col-span-1 backdrop-blur-2xl rounded-[32px] p-7 flex flex-col justify-between border transition-all ${
                  isDark ? 'bg-slate-900/60 border-white/10 hover:border-sky-500/30' : 'bg-white/65 border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12)]'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm">
                        <Zap className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-white/10">
                        8x Threads
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Resumable Offline DL</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Save files directly to internal storage or SD card. Parallel chunks for maximum WiFi / 5G speeds.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-sky-400">
                    <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                    <span>Direct to /Download Folder</span>
                  </div>
                </div>

                {/* Box 3 */}
                <div className={`md:col-span-1 backdrop-blur-2xl rounded-[32px] p-7 flex flex-col justify-between border transition-all ${
                  isDark ? 'bg-slate-900/60 border-white/10 hover:border-sky-500/30' : 'bg-white/65 border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12)]'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm">
                        <Volume2 className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-slate-300 border border-white/10">
                        Multi-Track
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Dual Audio & Subs</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Toggle Hindi, English, Spanish, and Japanese audio tracks on the fly with auto-synced subtitle tracks.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Layers className="w-4 h-4 text-sky-500 stroke-[2]" />
                    <span>Auto Subtitle Matcher</span>
                  </div>
                </div>

                {/* Box 4 */}
                <div className={`md:col-span-2 backdrop-blur-2xl rounded-[32px] p-7 flex flex-col justify-between border transition-all ${
                  isDark ? 'bg-slate-900/60 border-white/10 hover:border-sky-500/30' : 'bg-white/65 border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12)]'
                }`}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm">
                      <LayoutGrid className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      50K+ Titles
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Smart Categorized Discovery</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Explore daily updated feeds for trending cinema, K-Dramas, Anime releases, and OTT exclusives in one streamlined portal.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                    <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-800/80 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>🎬 Hollywood & OTT</div>
                    <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-800/80 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>🎌 Anime 4K Dubbed</div>
                    <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-slate-800/80 border-white/10' : 'bg-white/80 border-white shadow-sm'}`}>🍿 Top Web Series</div>
                  </div>
                </div>

              </div>
            </section>

            {/* ========================================================================= */}
            {/* 4. WHY MOVIEDOCK VS OTHERS (COMPARISON TABLE) */}
            {/* ========================================================================= */}
            <section id="comparison" className="py-16 px-4 max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
                  Direct Comparison
                </span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Why MovieDock Outperforms Other Apps
                </h2>
              </div>

              <div className={`rounded-3xl border overflow-hidden backdrop-blur-2xl shadow-xl ${
                isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white/70 border-white/90 shadow-soft-lg'
              }`}>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b ${isDark ? 'border-white/10 bg-slate-800/50' : 'border-slate-200 bg-slate-50/80'}`}>
                        <th className="p-4 sm:p-6 text-xs font-bold uppercase text-slate-400">Feature</th>
                        <th className="p-4 sm:p-6 text-xs font-black uppercase text-sky-400 bg-sky-500/10">MovieDock PRO</th>
                        <th className="p-4 sm:p-6 text-xs font-bold uppercase text-slate-400">VidMate</th>
                        <th className="p-4 sm:p-6 text-xs font-bold uppercase text-slate-400">MovieBox Pro</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-xs sm:text-sm ${isDark ? 'divide-white/5' : 'divide-slate-200/60'}`}>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">4K HDR Playback Engine</td>
                        <td className="p-4 sm:p-6 text-sky-400 font-extrabold bg-sky-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-400 stroke-[3]" /> MPV Hardware (Zero Lag)</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> Buffers on 1080p</td>
                        <td className="p-4 sm:p-6 text-slate-400">VIP Subscription Required</td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">Ad Clutter & Spam</td>
                        <td className="p-4 sm:p-6 text-sky-400 font-extrabold bg-sky-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-400 stroke-[3]" /> Ultra-Clean UI</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> Heavy Push Ad Spam</td>
                        <td className="p-4 sm:p-6 text-slate-400">Login Walls</td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">Direct Phone / SD Card Downloads</td>
                        <td className="p-4 sm:p-6 text-sky-400 font-extrabold bg-sky-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-400 stroke-[3]" /> Parallel 8x Multi-Thread</td>
                        <td className="p-4 sm:p-6 text-slate-400">Slow Server Speeds</td>
                        <td className="p-4 sm:p-6 text-slate-400">Encrypted in-app cache</td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">Dual Audio & Multi-Subtitles</td>
                        <td className="p-4 sm:p-6 text-sky-400 font-extrabold bg-sky-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-400 stroke-[3]" /> Full Dual Audio Selector</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> Limited to Hindi/English</td>
                        <td className="p-4 sm:p-6 text-slate-400">Requires Account</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 5. INSTALL GUIDE */}
            {/* ========================================================================= */}
            <section id="install-guide" className="py-16 px-4 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
                  Fast Setup
                </span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  How to Install MovieDock on Android
                </h2>
                <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  No rooting required. Ready to stream in under 30 seconds.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { step: "01", icon: ArrowDownToLine, title: "Download APK File", desc: `Tap the Download APK button to save 'MovieDock-${releaseData.version}.apk' onto your Android device.` },
                  { step: "02", icon: Unlock, title: "Allow Unknown Sources", desc: "If Android asks for verification, tap Settings → Security and allow installation from your browser." },
                  { step: "03", icon: Sparkles, title: "Install & Stream", desc: "Open the downloaded file from notifications, click Install, and launch MovieDock immediately!" }
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className={`backdrop-blur-2xl rounded-[32px] p-7 flex flex-col justify-between border hover:scale-[1.01] transition-transform ${
                      isDark ? 'bg-slate-900/60 border-white/10' : 'bg-white/65 border-white/90 shadow-[0_15px_35px_-10px_rgba(56,189,248,0.12)]'
                    }`}>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-3xl font-black text-sky-400 font-mono">{s.step}</span>
                        <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-sm">
                          <Icon className="w-5 h-5 stroke-[1.75]" />
                        </div>
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{s.desc}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                        <span>Verified Android Package</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ========================================================================= */}
            {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ) */}
            {/* ========================================================================= */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-sky-500 bg-sky-500/10 px-3.5 py-1 rounded-full border border-sky-500/20">
                  Got Questions?
                </span>
                <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3.5">
                {[
                  { q: "Is MovieDock APK 100% safe to install?", a: "Yes! MovieDock is built natively and contains zero spyware, crypto miners, or malicious code. Every release build is scanned with VirusTotal before being published." },
                  { q: "Can I install MovieDock on Android TV or FireStick?", a: "Yes, MovieDock is fully compatible with Android TV, Google TV, and Amazon FireStick devices with landscape 16:9 navigation support." },
                  { q: "How do I update to future versions?", a: "The app features an integrated In-App Update Engine. Whenever a new version is released on GitHub, MovieDock will automatically notify you with a single-tap update prompt." },
                  { q: "Do I need to create an account or login to stream?", a: "No account or registration is required. You can search, stream in 4K HDR, and download offline files anonymously." }
                ].map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isDark ? 'bg-slate-900/60 border-white/10' : 'bg-white/70 border-white/90 shadow-sm'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4"
                    >
                      <span className={isDark ? 'text-white' : 'text-slate-800'}>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className={`px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t ${
                        isDark ? 'text-slate-400 border-white/5' : 'text-slate-600 border-slate-100'
                      }`}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          /* PRIVACY PAGE */
          <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 mx-auto flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Privacy Policy & Safety
              </h1>
              <p className="text-sm text-slate-400 mt-2">MovieDock Official Portal • Android Security Verified</p>
            </div>

            <div className="space-y-4">
              <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white/70 border-white/90 shadow-sm'}`}>
                <div className="flex items-center gap-3 font-bold text-base mb-2 text-sky-400">
                  <Lock className="w-5 h-5" /> 1. Zero Personal Data Logging
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  MovieDock does not ask for or collect names, email addresses, phone numbers, or account passwords. You can search, stream, and download without registering.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white/70 border-white/90 shadow-sm'}`}>
                <div className="flex items-center gap-3 font-bold text-base mb-2 text-sky-400">
                  <Server className="w-5 h-5" /> 2. Storage Permissions Explained
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  The application only requires storage access to write media files to your Downloads folder when you explicitly tap the download button.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white/70 border-white/90 shadow-sm'}`}>
                <div className="flex items-center gap-3 font-bold text-base mb-2 text-sky-400">
                  <EyeOff className="w-5 h-5" /> 3. Advertising & Monetag Network
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  To provide continuous free downloads and server upkeep, non-intrusive ads from verified ad networks (like Monetag) may appear.
                </p>
              </div>

              <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/70 border-white/10' : 'bg-white/70 border-white/90 shadow-sm'}`}>
                <div className="flex items-center gap-3 font-bold text-base mb-2 text-sky-400">
                  <FileText className="w-5 h-5" /> 4. Support & Legal Inquiries
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  For privacy inquiries or technical support, contact developer Salman Khan via the official WhatsApp channel.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* 7. ULTRA-PREMIUM LIQUID GLASS BENTO FOOTER */}
      {/* ========================================================================= */}
      <footer className={`mt-20 border-t backdrop-blur-2xl pt-14 pb-8 px-4 ${
        isDark ? 'bg-slate-950/80 border-white/10 text-slate-300' : 'bg-white/55 border-white/90 text-slate-700'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-5 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl p-1 shadow-sm flex items-center justify-center overflow-hidden border ${
                    isDark ? 'bg-slate-800 border-white/10' : 'bg-gradient-to-b from-white to-sky-50 border-white'
                  }`}>
                    {!footerLogoError ? (
                      <img 
                        src="/images/app-icon.png" 
                        alt="MovieDock Logo" 
                        onError={() => setFooterLogoError(true)}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    ) : (
                      <Tv className="w-6 h-6 text-sky-400 stroke-[2]" />
                    )}
                  </div>
                  <div>
                    <div className={`text-xl font-extrabold tracking-tight flex items-center gap-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      MovieDock
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold">Official</span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium">Android 4K Streaming Ecosystem</div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                  Next-generation mobile streaming portal and offline downloader. Built for ultra-fast, seamless entertainment on all Android devices.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold shadow-sm ${
                  isDark ? 'bg-slate-900 border-white/10 text-slate-300' : 'bg-white/80 border-white text-slate-600'
                }`}>
                  <BadgeCheck className="w-3.5 h-3.5 text-sky-400" /> Verified Clean Build
                </span>
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-[11px] font-semibold shadow-sm ${
                  isDark ? 'bg-slate-900 border-white/10 text-slate-300' : 'bg-white/80 border-white text-slate-600'
                }`}>
                  {releaseData.version} Stable
                </span>
              </div>
            </div>

            {/* Column 2: PROMINENT LARGE SIGNATURE TRUST CARD */}
            <div className={`md:col-span-4 rounded-3xl p-5 border flex flex-col justify-between shadow-lg ${
              isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/85 border-white shadow-[0_10px_25px_-5px_rgba(56,189,248,0.12)]'
            }`}>
              
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">Founder & Core Developer</span>
                <div className="flex items-center gap-1 text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-md border border-sky-500/20">
                  <CheckCircle2 className="w-3 h-3 stroke-[2.5]" /> Verified
                </div>
              </div>

              {/* LARGE SIGNATURE DISPLAY */}
              <div className={`my-2 flex flex-col items-center justify-center p-3 rounded-2xl border min-h-[96px] ${
                isDark ? 'bg-slate-950/60 border-white/5' : 'bg-gradient-to-b from-slate-50 via-white to-sky-50/40 border-slate-100/80'
              }`}>
                {!sigError ? (
                  <img 
                    src="/images/signature.png" 
                    alt="Salman Khan Signature" 
                    onError={() => setSigError(true)}
                    className="h-20 sm:h-24 w-auto max-w-[260px] object-contain drop-shadow-md transition-transform hover:scale-105 duration-200"
                  />
                ) : (
                  <span className="font-serif italic font-extrabold text-3xl text-sky-400 tracking-wide">
                    Salman Khan
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Salman Khan</span>
                <span className="text-[11px] text-slate-500 font-medium">MovieDock Project Lead</span>
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
                  className="group w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                      <MessageCircle className="w-4 h-4 stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">WhatsApp Support</div>
                      <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Direct 24/7 Chat
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Fast Quick Links */}
              <div className="flex flex-col gap-1.5 text-xs font-semibold text-slate-400">
                <button 
                  onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-left hover:text-sky-400 transition-colors py-1 flex items-center justify-between border-b border-white/5"
                >
                  <span>Privacy Policy & Safety</span>
                  <span className="text-slate-500">→</span>
                </button>
                <button 
                  onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
                  className="text-left hover:text-sky-400 transition-colors py-1 flex items-center justify-between"
                >
                  <span>How to Install Guide</span>
                  <span className="text-slate-500">→</span>
                </button>
              </div>

            </div>

          </div>

          {/* DMCA Disclaimer */}
          <div className={`p-4 rounded-2xl border text-[11px] leading-relaxed flex items-start gap-3 shadow-sm ${
            isDark ? 'bg-slate-900/60 border-white/10 text-slate-400' : 'bg-white/60 border-white text-slate-500'
          }`}>
            <ShieldCheck className="w-4 h-4 text-sky-400 stroke-[2] flex-shrink-0 mt-0.5" />
            <span>
              <strong>DMCA & Disclaimer:</strong> MovieDock is an indexing and media management portal that does not host or broadcast video streams on its servers. All copyrights belong to their respective owners in compliance with 17 U.S.C. § 512.
            </span>
          </div>

          {/* Bottom Copyright Line */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-4 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
              <span>by <strong>Salman Khan</strong> • MovieDock Ecosystem © 2026</span>
            </div>
            <div className="text-[11px] text-slate-500">
              All Rights Reserved.
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}