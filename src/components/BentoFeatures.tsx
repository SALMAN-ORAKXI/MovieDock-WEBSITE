import React, { useState } from 'react';
import { Cpu, Zap, Volume2, LayoutGrid, CheckCircle2, MonitorPlay, ArrowDownToLine, Layers } from 'lucide-react';

export default function BentoFeatures() {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-200/80">
          iOS Bento Architecture
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-3">
          Engineered for Pure 4K Streaming
        </h2>
        <p className="text-sm text-slate-600 mt-2">
          Experience native hardware acceleration, instant downloads, and crystal clear multi-audio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1 (Large - 4K Engine) */}
        <div className="md:col-span-2 liquid-glass-card rounded-[32px] p-7 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-sky-100/90 border border-sky-200 flex items-center justify-center text-sky-600">
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

          {/* Screenshot Showcase Container */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/80 h-44 shadow-inner flex items-center justify-center">
            <img 
              src="/images/screen-player.png" 
              alt="4K Player Screenshot" 
              onLoad={() => setImg1Loaded(true)}
              className={`w-full h-full object-cover ${img1Loaded ? 'opacity-100' : 'opacity-0'}`} 
            />
            {!img1Loaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 flex items-center justify-between px-6 text-white">
                <div className="flex items-center gap-3">
                  <MonitorPlay className="w-8 h-8 text-sky-400 stroke-[1.5]" />
                  <div>
                    <div className="text-xs font-bold">4K HDR MediaKit Pipeline Active</div>
                    <div className="text-[10px] text-sky-200">Zero Drop Frames • Dual Buffer On</div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-sky-500/30 text-sky-300 text-[10px] font-bold rounded-lg border border-sky-400/30">60 FPS</span>
              </div>
            )}
          </div>
        </div>

        {/* Card 2 (Turbo Downloads) */}
        <div className="md:col-span-1 liquid-glass-card rounded-[32px] p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-sky-100/90 border border-sky-200 flex items-center justify-center text-sky-600">
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

        {/* Card 3 (Dual Audio & Captions) */}
        <div className="md:col-span-1 liquid-glass-card rounded-[32px] p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-2xl bg-sky-100/90 border border-sky-200 flex items-center justify-center text-sky-600">
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

        {/* Card 4 (Categorized Hub) */}
        <div className="md:col-span-2 liquid-glass-card rounded-[32px] p-7 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-5">
            <div className="w-12 h-12 rounded-2xl bg-sky-100/90 border border-sky-200 flex items-center justify-center text-sky-600">
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
            <div className="p-2.5 rounded-xl bg-white/70 border border-white">🎬 Hollywood & OTT</div>
            <div className="p-2.5 rounded-xl bg-white/70 border border-white">🎌 Anime 4K Dubbed</div>
            <div className="p-2.5 rounded-xl bg-white/70 border border-white">🍿 Top Web Series</div>
          </div>
        </div>

      </div>

    </section>
  );
}