import React from 'react';
import { Star, CheckCircle, Heart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Hamza Tariq",
      location: "Lahore, PK",
      review: "MovieDock is 10x smoother than VidMate. No clutter, fast downloads, and 4K HDR playback runs perfectly on mobile data!",
      stars: 5
    },
    {
      name: "Alex Rivera",
      location: "Madrid, ES",
      review: "The download speed is unbelievable. Saved full anime series with dual audio directly to my external SD card in minutes.",
      stars: 5
    },
    {
      name: "Rohit Verma",
      location: "Mumbai, IN",
      review: "Super sleek interface with instant playback. Easily the best free streaming APK on Android right now.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-16 px-4 max-w-6xl mx-auto">
      <div className="liquid-glass-card rounded-[36px] p-8 sm:p-11 shadow-[0_20px_50px_-15px_rgba(56,189,248,0.25)]">
        
        {/* Header Stats */}
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

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/70 border border-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic mb-6">"{r.review}"</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                <div>
                  <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
                    {r.name} <CheckCircle className="w-3.5 h-3.5 text-sky-500 stroke-[2] inline" />
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
  );
}