import React, { useState } from 'react';
import { 
  ArrowDownCircle, 
  ShieldCheck, 
  Star, 
  Smartphone, 
  Flame, 
  Play, 
  Film, 
  Wifi, 
  Battery, 
  Sparkles, 
  Tv 
} from 'lucide-react';

export default function HeroSection() {
  const [downloading, setDownloading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = '/app-release.apk';
    link.download = 'MovieDock-v1.2.0.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2500);
  };

  return (
    <section id="download-zone" className="pt-28 md:pt-36 pb-20 px-4 max-w-6xl mx-auto flex flex-col items-center text-center">
      
      {/* Top Liquid Glass Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold text-slate-700 shadow-sm mb-7">
        <span className="flex items-center gap-1 text-amber-500 font-bold">
          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" /> 4.9/5 Rating
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1 text-sky-500 font-bold">
          <Flame className="w-3.5 h-3.5 fill-sky-400 stroke-none" /> 21.7K+ Downloads
        </span>
        <span className="text-slate-300">•</span>
        <span className="flex items-center gap-1 text-emerald-600 font-bold">
          <ShieldCheck className="w-3.5 h-3.5 stroke-[2]" /> 100% Safe APK
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 leading-[1.12] mb-5">
        Stream 4K Cinema & Download with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-400">Zero Buffering.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mb-9">
        The blazing-fast streaming portal for Android. Stream latest Movies, TV Series & Anime with dual audio support and instant direct downloads to phone storage.
      </p>

      {/* Primary Action Button */}
      <div className="w-full max-w-md flex flex-col items-center gap-3">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="group w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-400 via-sky-500 to-sky-400 p-[1.5px] shadow-[0_15px_35px_-8px_rgba(56,189,248,0.45)] hover:shadow-[0_20px_45px_-8px_rgba(56,189,248,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <div className="flex items-center justify-between px-6 py-4 rounded-[22px] bg-white/95 group-hover:bg-white/85 backdrop-blur-xl transition-all">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center shadow-md shadow-sky-400/40">
                <ArrowDownCircle className={`w-6 h-6 stroke-[2] ${downloading ? 'animate-bounce' : ''}`} />
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900 tracking-tight">
                  {downloading ? 'Starting Direct Download...' : 'Download MovieDock APK'}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  v1.2.0 • 24.5 MB • Android 8.0+
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 text-[11px] font-black uppercase bg-sky-100 text-sky-600 border border-sky-200/80 rounded-xl">
              Free
            </span>
          </div>
        </button>

        {/* Secondary Alternative Source */}
        <button
          onClick={handleDownload}
          className="w-full py-3 px-4 rounded-2xl liquid-glass-pill hover:bg-white/90 text-slate-700 text-xs font-bold flex items-center justify-center gap-2 transition-all"
        >
          <Smartphone className="w-4 h-4 text-sky-500 stroke-[1.75]" />
          <span>Palm Store & Direct APK Fast Mirror</span>
        </button>
      </div>

      {/* iPhone 17 Pro Mockup */}
      <div className="relative mt-16 w-full max-w-[340px] sm:max-w-[380px] mx-auto">
        <div className="absolute -inset-4 bg-gradient-to-tr from-sky-300/40 via-cyan-200/30 to-transparent rounded-[60px] blur-2xl -z-10" />

        <div className="rounded-[55px] p-[10px] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 shadow-[0_30px_70px_-15px_rgba(14,165,233,0.3),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-white">
          <div className="relative rounded-[46px] bg-slate-950 overflow-hidden aspect-[9/19.5] flex flex-col shadow-inner">
            
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30 flex items-center justify-between px-3 text-[10px] text-white/60 shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white/20" />
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* iOS Status Bar */}
            <div className="pt-3 px-7 pb-2 flex justify-between items-center text-[11px] font-semibold text-white/90 z-20">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* App Screen Showcase */}
            <div className="relative flex-1 w-full h-full overflow-hidden">
              <img 
                src="/images/hero-mockup.png" 
                alt="MovieDock App Interface"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              />

              {/* Built-in fallback UI if screenshot is not yet placed in public/images/ */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-4 text-left flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pt-6 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center">
                          <Tv className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-white">MovieDock</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-bold border border-sky-500/30">4K PRO</span>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden h-44 bg-gradient-to-t from-black via-slate-800 to-slate-700 p-3 flex flex-col justify-end border border-white/10 shadow-lg">
                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-sky-500 text-white text-[9px] font-bold">HDR 4K</div>
                      <div className="w-10 h-10 rounded-full bg-sky-500/90 text-white flex items-center justify-center mb-2 shadow-lg">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                      <h4 className="text-sm font-extrabold text-white leading-tight">Cyberpunk 2099: Neo Tokyo</h4>
                      <p className="text-[10px] text-zinc-300">Dual Audio • 100% 4K Streaming</p>
                    </div>

                    <div className="flex gap-1.5 mt-3 overflow-x-hidden">
                      <span className="px-2.5 py-1 rounded-full bg-sky-500 text-white text-[10px] font-bold">Trending</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-zinc-300 text-[10px] font-medium">Anime</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-zinc-300 text-[10px] font-medium">Web Series</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="h-16 rounded-lg bg-slate-800 flex items-center justify-center mb-1">
                          <Film className="w-5 h-5 text-sky-400 stroke-[1.5]" />
                        </div>
                        <div className="text-[11px] font-bold text-white truncate">Oppenheimer 4K</div>
                        <div className="text-[9px] text-zinc-400">24.5 MB/s Fast DL</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="h-16 rounded-lg bg-slate-800 flex items-center justify-center mb-1">
                          <Sparkles className="w-5 h-5 text-amber-400 stroke-[1.5]" />
                        </div>
                        <div className="text-[11px] font-bold text-white truncate">Solo Leveling Ep 12</div>
                        <div className="text-[9px] text-zinc-400">Dual Audio Subs</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-32 h-1 bg-white/40 rounded-full mx-auto mb-1" />
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}