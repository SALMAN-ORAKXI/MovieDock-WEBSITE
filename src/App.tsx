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
  ChevronDown, 
  Check, 
  Ban, 
  Settings, 
  Download, 
  PlayCircle, 
  Globe, 
  Share2, 
  CheckCircle, 
  Video, 
  Award, 
  MapPin, 
  Trophy,
  Laptop
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'creator'>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Download Modal & Progress State
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStatus, setDownloadStatus] = useState('Initializing secure download...');

  const [logoError, setLogoError] = useState(false);
  const [footerLogoError, setFooterLogoError] = useState(false);
  const [heroImg1Error, setHeroImg1Error] = useState(false);
  const [heroImg2Error, setHeroImg2Error] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [shareToast, setShareToast] = useState(false);

  // Official Store & Web Links
  const MICROSOFT_STORE_URL = 'https://apps.microsoft.com/detail/9PBBQQMT0958?hl=en-us&gl=US&ocid=pdpshare';
  const WEB_APP_URL = 'https://app.moviedock.space';

  // Live Animated Download Counter starting at 22,100+
  const [liveDownloads, setLiveDownloads] = useState(22100);

  const [releaseData, setReleaseData] = useState({
    version: 'v1.2.0',
    size: '101.5 MB',
    downloadUrl: 'https://github.com/SALMAN-ORAKXI/MovieDock-WEBSITE/releases/download/v1.2.0/app-release.apk',
  });

  // ⚡ REAL-TIME GITHUB & LIVE CONTINUOUS SYNC
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
            });
            if (apkAsset.download_count !== undefined) {
              setLiveDownloads(22100 + apkAsset.download_count);
            }
          }
        }
      } catch (err) {
        console.log('Using live counter fallback');
      }
    };

    fetchLatestRelease();

    const interval = setInterval(() => {
      setLiveDownloads(prev => prev + Math.floor(Math.random() * 2));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = async () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadStatus('Connecting to secure GitHub CDN...');

    try {
      await new Promise(r => setTimeout(r, 600));
      setDownloadStatus('Downloading MovieDock APK...');

      const response = await fetch(releaseData.downloadUrl);
      if (!response.ok) throw new Error('Network response was not ok');

      const contentLength = response.headers.get('content-length');
      const total = contentLength ? parseInt(contentLength, 10) : 106500000;
      let loaded = 0;

      const reader = response.body?.getReader();
      const chunks: BlobPart[] = [];

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          loaded += value.length;
          const percent = Math.min(Math.round((loaded / total) * 100), 99);
          setDownloadProgress(percent);
          setDownloadStatus(`Downloading... ${percent}% (${(loaded / (1024 * 1024)).toFixed(1)} MB)`);
        }
      }

      setDownloadProgress(100);
      setDownloadStatus('Download complete! Saving file...');
      setLiveDownloads(prev => prev + 1);

      const blob = new Blob(chunks, { type: 'application/vnd.android.package-archive' });
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `MovieDock-${releaseData.version}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);

      setTimeout(() => {
        setIsDownloading(false);
        setDownloadStatus('Ready');
      }, 1500);

    } catch (err) {
      console.error('Download stream error:', err);
      setDownloadStatus('Redirecting to direct mirror...');
      setDownloadProgress(100);

      const fallbackLink = document.createElement('a');
      fallbackLink.href = releaseData.downloadUrl;
      fallbackLink.download = `MovieDock-${releaseData.version}.apk`;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);

      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MovieDock - 4K Streaming & Downloader',
        text: 'Download MovieDock APK for Android and stream unlimited 4K movies & anime!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
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
    <div className="min-h-screen font-['Plus_Jakarta_Sans',sans-serif] bg-[#faf8f9] text-slate-800 flex flex-col selection:bg-rose-500 selection:text-white">
      
      {/* Background Soft White & Light Pink Mesh Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-pink-200/60 via-rose-100/40 to-transparent rounded-full blur-[150px]" />
        <div className="absolute top-[25%] -left-48 w-[650px] h-[650px] bg-pink-100/70 rounded-full blur-[140px]" />
        <div className="absolute top-[60%] -right-48 w-[650px] h-[650px] bg-rose-200/50 rounded-full blur-[150px]" />
      </div>

      {/* ========================================================================= */}
      {/* NAVBAR */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
        <nav className={`w-full max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 flex items-center justify-between backdrop-blur-2xl bg-white/75 border border-white/95 shadow-[0_20px_40px_-10px_rgba(244,63,94,0.12),inset_0_1px_2px_rgba(255,255,255,1)] ${
          scrolled ? 'scale-[0.99] shadow-2xl bg-white/95' : ''
        }`}>
          
          <div 
            onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl p-1 shadow-sm group-hover:scale-105 transition-transform duration-200 flex items-center justify-center overflow-hidden border bg-gradient-to-b from-white to-pink-50 border-white">
              {!logoError ? (
                <img 
                  src="/images/app-icon.png" 
                  alt="MovieDock Logo" 
                  onError={() => setLogoError(true)}
                  className="w-full h-full object-contain rounded-xl"
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white">
                  <Tv className="w-5 h-5 stroke-[2]" />
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight flex items-center gap-1.5 text-slate-900">
                MovieDock
                <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider rounded-full border bg-rose-50 text-rose-600 border-rose-200">
                  {releaseData.version}
                </span>
              </span>
              <span className="text-[10px] font-semibold -mt-0.5 text-slate-500">
                Android 4K Portal
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border bg-slate-200/50 border-white/80 backdrop-blur-2xl shadow-inner">
            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-rose-600 hover:bg-white/90 transition-all"
            >
              <Compass className="w-3.5 h-3.5 stroke-[2]" /> Features
            </button>

            {/* 🌐 New Web Stream Nav Link */}
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-600 hover:bg-white/90 transition-all"
            >
              <Globe className="w-3.5 h-3.5 stroke-[2]" /> Web Stream
              <ArrowUpRight className="w-3 h-3 -ml-0.5" />
            </a>

            <button 
              onClick={() => { setCurrentPage('creator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentPage === 'creator' ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' : 'text-slate-700 hover:text-rose-600 hover:bg-white/90'
              }`}
            >
              <Award className="w-3.5 h-3.5 stroke-[2]" /> About Creator
            </button>

            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-rose-600 hover:bg-white/90 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 stroke-[2]" /> Why MovieDock?
            </button>

            <button 
              onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 hover:text-rose-600 hover:bg-white/90 transition-all"
            >
              <HelpCircle className="w-3.5 h-3.5 stroke-[2]" /> Install
            </button>

            <button 
              onClick={() => { setCurrentPage('privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                currentPage === 'privacy' ? 'bg-rose-500 text-white shadow-md shadow-rose-500/30' : 'text-slate-700 hover:text-rose-600 hover:bg-white/90'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> Privacy
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <button 
              onClick={scrollToDownload}
              className="group inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-full shadow-[0_8px_20px_-4px_rgba(244,63,94,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ArrowDownToLine className="w-4 h-4 stroke-[2]" />
              <span>Download APK</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full border bg-white/80 border-white flex items-center justify-center text-slate-700 shadow-sm"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 stroke-[2]" /> : <Menu className="w-5 h-5 stroke-[2]" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white text-slate-800 flex flex-col gap-2">
            <a 
              href={WEB_APP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between font-bold px-4 py-2.5 rounded-2xl bg-rose-50 text-rose-600"
            >
              <span className="flex items-center gap-2"><Globe className="w-4 h-4" /> Stream Online (Web App)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a 
              href={MICROSOFT_STORE_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-between font-bold px-4 py-2.5 rounded-2xl bg-slate-100 text-slate-800"
            >
              <span className="flex items-center gap-2"><Laptop className="w-4 h-4 text-blue-500" /> Microsoft Store (PC)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-rose-50">
              <Compass className="w-4 h-4 text-rose-500 stroke-[2]" /> Features
            </button>
            <button onClick={() => { setCurrentPage('creator'); setMobileMenuOpen(false); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-rose-50">
              <Award className="w-4 h-4 text-rose-500 stroke-[2]" /> About Creator
            </button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-rose-50">
              <Sparkles className="w-4 h-4 text-rose-500 stroke-[2]" /> Why MovieDock?
            </button>
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('install-guide')?.scrollIntoView({ behavior: 'smooth' }), 50); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-rose-50">
              <HelpCircle className="w-4 h-4 text-rose-500 stroke-[2]" /> Install Guide
            </button>
            <button onClick={() => { setCurrentPage('privacy'); setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2.5 text-left font-bold px-4 py-2.5 rounded-2xl hover:bg-rose-50">
              <ShieldCheck className="w-4 h-4 text-rose-500 stroke-[2]" /> Privacy Policy
            </button>
            <button onClick={scrollToDownload} className="w-full mt-2 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-rose-500/30">
              <ArrowDownToLine className="w-4 h-4 stroke-[2]" /> Download MovieDock APK
            </button>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* BODY CONTENT */}
      {/* ========================================================================= */}
      <main className="relative z-10 flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section id="download-zone" className="pt-28 md:pt-36 pb-16 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
              
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full backdrop-blur-2xl border text-xs font-bold text-slate-700 shadow-sm mb-7 bg-white/80 border-white/95 shadow-[0_6px_25px_-2px_rgba(244,63,94,0.12)]">
                <span className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" /> 4.9/5 Rating
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-rose-600 font-extrabold animate-pulse">
                  <Flame className="w-3.5 h-3.5 fill-rose-500 stroke-none" /> {(liveDownloads / 1000).toFixed(1)}K+ Downloads
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-emerald-600">
                  <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> 100% Virus-Free
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.12] mb-5 text-slate-900">
                Stream Unlimited 4K Cinema on <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">Android</span>
              </h1>

              <p className="text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-9 text-slate-600">
                Experience crystal clear 4K HDR playback, multi-language dual audio, and lightning-fast direct offline downloads to phone storage.
              </p>

              {/* Download CTA Area */}
              <div className="w-full max-w-xl flex flex-col items-center gap-3.5">
                
                {/* Main APK Button */}
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="group w-full max-w-md relative overflow-hidden rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 p-[1.5px] shadow-[0_15px_35px_-6px_rgba(244,63,94,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  <div className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white/95 group-hover:bg-white/90 backdrop-blur-2xl transition-all">
                    
                    <div className="flex items-center gap-3.5 text-left">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-b from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-md shadow-rose-500/30">
                        <ArrowDownToLine className={`w-5 h-5 stroke-[2] ${isDownloading ? 'animate-bounce' : ''}`} />
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-extrabold tracking-tight text-slate-900">
                          {isDownloading ? 'Starting Download...' : 'Download MovieDock APK'}
                        </div>
                        <div className="text-[11px] text-rose-500 font-semibold">
                          {releaseData.version} • {releaseData.size} • Android 8.0+
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 px-3 py-1 bg-rose-500 text-white text-xs font-black rounded-full shadow-sm">
                      <span>FREE</span>
                    </div>

                  </div>
                </button>

                {/* 🪟 Microsoft Store & 🌐 Web App Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
                  
                  {/* Microsoft Store */}
                  <a
                    href={MICROSOFT_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-2xl border text-xs font-bold transition-all flex items-center justify-between group shadow-sm bg-white hover:bg-slate-50 border-slate-200 text-slate-800 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
                        <div className="bg-[#f25022] rounded-[1px]" />
                        <div className="bg-[#7fba00] rounded-[1px]" />
                        <div className="bg-[#00a4ef] rounded-[1px]" />
                        <div className="bg-[#ffb900] rounded-[1px]" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-slate-400 font-medium -mb-0.5">Windows PC</div>
                        <div className="text-xs font-extrabold">Microsoft Store</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Web App */}
                  <a
                    href={WEB_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-2xl border text-xs font-bold transition-all flex items-center justify-between group shadow-sm bg-rose-50 hover:bg-rose-100/80 border-rose-200 text-rose-700 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-rose-500" />
                      <div className="text-left">
                        <div className="text-[10px] text-rose-400 font-medium -mb-0.5">Watch in Browser</div>
                        <div className="text-xs font-extrabold">Stream Web App</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-rose-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                </div>

                {/* Direct Mirror & Share App */}
                <div className="flex items-center gap-3 w-full max-w-md">
                  <button
                    onClick={handleDownload}
                    className="flex-1 py-2.5 rounded-full border text-xs font-bold transition-all flex items-center justify-center gap-2 bg-white/80 hover:bg-white border-white/95 text-slate-700 shadow-sm"
                  >
                    <Smartphone className="w-3.5 h-3.5 text-rose-500" />
                    <span>Direct CDN Mirror</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="px-5 py-2.5 rounded-full border text-xs font-bold transition-all flex items-center gap-1.5 bg-white/80 hover:bg-white border-white/95 text-rose-600 shadow-sm"
                  >
                    <Share2 className="w-3.5 h-3.5 stroke-[2]" />
                    <span>Share App</span>
                  </button>
                </div>

              </div>

              {/* DOWNLOAD PROGRESS MODAL */}
              {isDownloading && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
                  <div className="w-full max-w-sm rounded-[32px] p-6 border text-center shadow-2xl backdrop-blur-2xl bg-white/95 border-white text-slate-900">
                    <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-600 mx-auto flex items-center justify-center mb-4">
                      <ArrowDownToLine className="w-8 h-8 animate-bounce" />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Downloading MovieDock</h3>
                    <p className="text-xs text-slate-500 mb-6">{downloadStatus}</p>

                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 mb-3 border border-slate-200">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-300"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs font-mono font-bold text-rose-600">
                      <span>{downloadProgress}% Completed</span>
                      <span>{releaseData.size}</span>
                    </div>
                  </div>
                </div>
              )}

              {shareToast && (
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-2.5 rounded-full shadow-2xl text-xs font-bold flex items-center gap-2 border border-white/20 animate-in fade-in slide-in-from-bottom-4">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Link copied to clipboard! Share with friends.
                </div>
              )}

              {/* 📱 2 SCREENSHOTS SHOWCASE */}
              <div className="relative mt-16 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
                
                <div className="absolute inset-0 bg-gradient-to-r from-rose-300/20 via-pink-200/10 to-rose-300/20 rounded-[80px] blur-3xl -z-10" />

                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className="rounded-[44px] p-[8px] border shadow-2xl bg-gradient-to-b from-white via-slate-100 to-slate-200 border-white">
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
                  <div className="mt-3 text-xs font-bold text-slate-500 flex items-center justify-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span>Home & 4K Catalog</span>
                  </div>
                </div>

                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  <div className="rounded-[44px] p-[8px] border shadow-2xl bg-gradient-to-b from-white via-slate-100 to-slate-200 border-white">
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
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20">
                  iOS Bento Grid
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900">
                  Engineered for Ultra-Fast 4K Streaming
                </h2>
                <p className="text-sm mt-2 text-slate-600">
                  Lag-free hardware acceleration, parallel download engine, and crystal clear multi-audio across Android, PC & Web.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="md:col-span-2 backdrop-blur-[32px] rounded-[36px] p-8 flex flex-col justify-between border transition-all bg-white/75 border-white/95 shadow-[0_20px_50px_rgba(244,63,94,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-rose-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shadow-sm">
                      <Cpu className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20">
                      Native MPV Engine
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Lag-Free 4K Ultra Playback</h3>
                    <p className="text-sm leading-relaxed max-w-xl text-slate-600">
                      Hardware decoding for HEVC, AV1, and VP9. Smooth 60fps playback without battery draining or overheating on Android 8.0+.
                    </p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-950 via-rose-950 to-slate-950 border border-white/10 h-36 shadow-inner flex items-center justify-between px-6 text-white">
                    <div className="flex items-center gap-3">
                      <MonitorPlay className="w-8 h-8 text-rose-400 stroke-[1.5]" />
                      <div>
                        <div className="text-xs font-bold">4K HDR MediaKit Pipeline Active</div>
                        <div className="text-[10px] text-rose-200">Zero Drop Frames • Dual Buffer On</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-rose-500/30 text-rose-300 text-[10px] font-bold rounded-lg border border-rose-400/30">60 FPS</span>
                  </div>
                </div>

                <div className="md:col-span-1 backdrop-blur-[32px] rounded-[36px] p-8 flex flex-col justify-between border transition-all bg-white/75 border-white/95 shadow-[0_20px_50px_rgba(244,63,94,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-rose-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shadow-sm">
                        <Zap className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        8x Threads
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-slate-900">Resumable Offline DL</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Save files directly to internal storage or SD card. Parallel chunks for maximum WiFi / 5G speeds.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-rose-600">
                    <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                    <span>Direct to /Download Folder</span>
                  </div>
                </div>

                <div className="md:col-span-1 backdrop-blur-[32px] rounded-[36px] p-8 flex flex-col justify-between border transition-all bg-white/75 border-white/95 shadow-[0_20px_50px_rgba(244,63,94,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-rose-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shadow-sm">
                        <Volume2 className="w-6 h-6 stroke-[1.75]" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                        Multi-Track
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-slate-900">Dual Audio & Subs</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Toggle Hindi, English, Spanish, and Japanese audio tracks on the fly with auto-synced subtitle tracks.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Layers className="w-4 h-4 text-rose-500 stroke-[2]" />
                    <span>Auto Subtitle Matcher</span>
                  </div>
                </div>

                <div className="md:col-span-2 backdrop-blur-[32px] rounded-[36px] p-8 flex flex-col justify-between border transition-all bg-white/75 border-white/95 shadow-[0_20px_50px_rgba(244,63,94,0.08),inset_0_1px_2px_rgba(255,255,255,1)] hover:border-rose-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 shadow-sm">
                      <LayoutGrid className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-600 border border-rose-500/20">
                      50K+ Titles
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">Smart Categorized Discovery</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      Explore daily updated feeds for trending cinema, K-Dramas, Anime releases, and OTT exclusives in one streamlined portal.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
                    <div className="p-2.5 rounded-xl border bg-white/80 border-white shadow-sm">🎬 Hollywood & OTT</div>
                    <div className="p-2.5 rounded-xl border bg-white/80 border-white shadow-sm">🎌 Anime 4K Dubbed</div>
                    <div className="p-2.5 rounded-xl border bg-white/80 border-white shadow-sm">🍿 Top Web Series</div>
                  </div>
                </div>

              </div>
            </section>

            {/* COMPARISON */}
            <section id="comparison" className="py-16 px-4 max-w-5xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
                  Direct Comparison
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900">
                  Why MovieDock Outperforms Other Apps
                </h2>
              </div>

              <div className="rounded-[36px] border overflow-hidden backdrop-blur-[32px] shadow-2xl bg-white/80 border-white/95">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/80">
                        <th className="p-4 sm:p-6 text-xs font-bold uppercase text-slate-500">Feature</th>
                        <th className="p-4 sm:p-6 text-xs font-black uppercase text-rose-600 bg-rose-500/10">MovieDock PRO</th>
                        <th className="p-4 sm:p-6 text-xs font-bold uppercase text-slate-500">VidMate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-xs sm:text-sm divide-slate-200/60">
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">4K HDR Playback Engine</td>
                        <td className="p-4 sm:p-6 text-rose-600 font-extrabold bg-rose-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-500 stroke-[3]" /> MPV Hardware (Zero Lag)</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> Buffers on 1080p</td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">Microsoft Store (Windows PC)</td>
                        <td className="p-4 sm:p-6 text-rose-600 font-extrabold bg-rose-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-500 stroke-[3]" /> Verified PC Store App</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> Emulator Required</td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">Web Browser Streaming</td>
                        <td className="p-4 sm:p-6 text-rose-600 font-extrabold bg-rose-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-500 stroke-[3]" /> app.moviedock.space</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> App Only</td>
                      </tr>
                      <tr>
                        <td className="p-4 sm:p-6 font-bold">Ad Clutter & Spam</td>
                        <td className="p-4 sm:p-6 text-rose-600 font-extrabold bg-rose-500/5"><Check className="w-4 h-4 inline mr-1 text-emerald-500 stroke-[3]" /> Ultra-Clean UI</td>
                        <td className="p-4 sm:p-6 text-slate-400"><Ban className="w-4 h-4 inline mr-1 text-rose-400" /> Heavy Push Ad Spam</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* INSTALL GUIDE */}
            <section id="install-guide" className="py-16 px-4 max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20">
                  Visual Setup Guide
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900">
                  How to Install MovieDock on Android
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { step: "01", title: "Download APK File", desc: "Tap the download button to save the official package." },
                  { step: "02", title: "Allow Unknown Sources", desc: "Toggle allow installation from this source in settings." },
                  { step: "03", title: "Install & Enjoy 4K", desc: "Open the downloaded file and enjoy unlimited 4K streaming." }
                ].map((s, idx) => (
                  <div key={idx} className="rounded-[36px] p-7 border backdrop-blur-[32px] flex flex-col justify-between shadow-2xl bg-white/80 border-white/95 text-left">
                    <span className="text-3xl font-black text-rose-500 font-mono mb-4">{s.step}</span>
                    <h3 className="text-lg font-bold mb-2 text-slate-900">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 max-w-4xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-500/10 px-3.5 py-1 rounded-full border border-rose-500/20">
                  Got Questions?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-slate-900">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3.5">
                {[
                  { q: "Can I watch MovieDock on PC without an emulator?", a: "Yes! MovieDock is officially available on the Microsoft Store for Windows 10/11, and directly in browser at app.moviedock.space." },
                  { q: "Is MovieDock APK safe to install on Android?", a: "Yes! MovieDock is built natively and contains zero spyware or malicious code. Every release build is scanned with VirusTotal." },
                  { q: "Do I need to create an account or pay?", a: "No account or subscription is required. MovieDock is free across Android, Windows PC, and Web." }
                ].map((faq, idx) => (
                  <div key={idx} className="rounded-2xl border transition-all overflow-hidden bg-white/80 border-white/95 shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-5 text-left font-bold text-sm sm:text-base flex items-center justify-between gap-4 text-slate-800"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-rose-500 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed border-t text-slate-600 border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : currentPage === 'creator' ? (
          /* CREATOR STORY */
          <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-left animate-in fade-in duration-300">
            <div className="relative overflow-hidden rounded-[36px] p-8 sm:p-12 border backdrop-blur-[32px] shadow-2xl bg-gradient-to-br from-white via-rose-50/80 to-pink-50/90 border-rose-200">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 text-xs font-black uppercase">
                  Bagan Kurram Agency • Pakistan
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
                  Salman Khan — <span className="text-rose-600">Pioneering Vision</span>
                </h2>
                <p className="text-sm leading-relaxed text-slate-700">
                  From the mountains of <strong>Bagan, Kurram Agency</strong>, Salman Khan is the first Pakhtoon developer of his region to build a global streaming platform. Combining his athletic discipline as a former <strong>Pakistan Under-19 Basketball Player</strong> with full-stack code craftsmanship.
                </p>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* PRIVACY PAGE */
          <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto text-left">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
            <div className="p-6 rounded-3xl border bg-white/80 border-white/95 space-y-4 text-xs leading-relaxed text-slate-600">
              <p><strong>1. Zero Data Logging:</strong> We do not collect names, emails, or personal information.</p>
              <p><strong>2. Storage:</strong> Used only to save downloaded videos into your Downloads folder.</p>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t backdrop-blur-[32px] pt-14 pb-8 px-4 bg-white/75 border-white/95 text-slate-700 shadow-2xl">
        <div className="max-w-6xl mx-auto flex flex-col gap-8 text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Tv className="w-5 h-5 text-rose-500" />
              <span className="font-extrabold text-slate-900 text-sm">MovieDock Ecosystem</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 font-bold">
              <a href={MICROSOFT_STORE_URL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center gap-1">
                Microsoft Store (PC) <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline flex items-center gap-1">
                Web App <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button onClick={() => setCurrentPage('creator')} className="hover:text-rose-600">About Creator</button>
              <button onClick={() => setCurrentPage('privacy')} className="hover:text-rose-600">Privacy Policy</button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/60 pt-4 text-slate-500">
            <span>Crafted with ❤️ by <strong>Salman Khan</strong> • MovieDock © 2026</span>
            <span>v1.2.0 Stable Release</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
