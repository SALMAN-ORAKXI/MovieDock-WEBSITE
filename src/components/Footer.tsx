import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, MessageCircle, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/90 liquid-glass pt-14 pb-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-400 to-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-400/30">
                <Tv className="w-5 h-5 stroke-[1.75]" />
              </div>
              <span className="text-xl font-black text-slate-900 tracking-tight">MovieDock</span>
            </div>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Official app landing and direct APK download portal. High speed 4K streaming and media manager.
            </p>
          </div>

          {/* WhatsApp Direct Support CTA */}
          <a
            href="https://wa.me/923275176283?text=Hi%20MovieDock%20Support,%20I%20need%20help%20with%20the%20APK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-all text-xs font-bold shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 stroke-[2]" />
            <span>WhatsApp Support: +92 327 5176283</span>
          </a>

        </div>

        {/* DMCA Disclaimer Capsule */}
        <div className="p-4 rounded-2xl bg-white/60 border border-white text-[11px] text-slate-600 leading-relaxed flex items-start gap-3 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-sky-500 stroke-[2] flex-shrink-0 mt-0.5" />
          <span>
            <strong>DMCA Notice:</strong> MovieDock is an indexing utility and media aggregator that does not host video files on its servers. All copyrights belong to their respective owners in compliance with 17 U.S.C. § 512.
          </span>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-6 border-t border-slate-200/60">
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
            <span>by <strong>Salman Khan</strong> • MovieDock © 2026</span>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <Link to="/privacy" className="hover:text-sky-600 transition-colors">Privacy Policy</Link>
            <a href="/#install-guide" className="hover:text-sky-600 transition-colors">Installation Help</a>
            <span className="text-slate-400">v1.2.0 Release</span>
          </div>
        </div>

      </div>
    </footer>
  );
}